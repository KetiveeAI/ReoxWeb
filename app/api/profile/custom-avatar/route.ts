import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/app/lib/db';
import { getSession } from '@/app/lib/session';

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('param') as File; // KCD3 exacts 'param' field
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (file.size > 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be below 1MB' }, { status: 400 });
    }

    // Pass the payload directly to the internal KCD3 microservice securely
    const kcd3Url = process.env.KCD3_INTERNAL_URL || 'http://localhost:5662';
    
    // Create new FormData mapped for KCD3
    const forwardFormData = new FormData();
    forwardFormData.append('param', file);

    let kcd3Res;
    try {
      kcd3Res = await fetch(`${kcd3Url}/v1/upload/avatar`, {
        method: 'POST',
        headers: {
          'X-User-ID': session.id,
          // Don't forward content-type, let fetch calculate multipart boundary
        },
        body: forwardFormData
      });
    } catch (fetchErr) {
      console.error("KCD3 Fetch Network Error (possibly down):", fetchErr);
      return NextResponse.json({ error: 'KCD3 upload service is currently offline. Please try again later.' }, { status: 502 });
    }

    if (!kcd3Res.ok) {
        const errText = await kcd3Res.text();
        console.error('KCD3 Upload Failed:', errText);
        return NextResponse.json({ error: 'KCD3 processing failed: ' + errText }, { status: 502 });
    }

    const kcd3Data = await kcd3Res.json();
    const cdnPath = kcd3Data.url; // Typically /a/filename.webp

    // Store the path inside the reox_users table
    await query(`
      INSERT INTO reox_users (user_id, custom_avatar_path, use_custom_avatar, updated_at) 
      VALUES ($1, $2, TRUE, NOW())
      ON CONFLICT (user_id) 
      DO UPDATE SET custom_avatar_path = EXCLUDED.custom_avatar_path, use_custom_avatar = TRUE, updated_at = NOW()
    `, [session.id, cdnPath]);

    const publicCdnUrl = process.env.KCD3_PUBLIC_URL || kcd3Url;

    return NextResponse.json({ 
      success: true, 
      path: cdnPath,
      url: `${publicCdnUrl}${cdnPath}`
    });
  } catch (error) {
    console.error('Avatar upload error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const useCustom = Boolean(body.useCustom);

    await query(`
      INSERT INTO reox_users (user_id, use_custom_avatar, updated_at) 
      VALUES ($1, $2, NOW())
      ON CONFLICT (user_id) 
      DO UPDATE SET use_custom_avatar = EXCLUDED.use_custom_avatar, updated_at = NOW()
    `, [session.id, useCustom]);

    return NextResponse.json({ success: true, useCustom });
  } catch (error) {
    console.error('Avatar toggle error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
