import { NextResponse } from 'next/server';
import { getSession } from '@/app/lib/session';
import { query, ensureCommunityTables } from '@/app/lib/db';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await ensureCommunityTables();

    const result = await query(
      'SELECT public_name FROM reox_users WHERE user_id = $1',
      [session.id]
    );

    if (result.rows.length > 0) {
      return NextResponse.json({ success: true, publicName: result.rows[0].public_name });
    }

    return NextResponse.json({ success: true, publicName: null });
  } catch (error) {
    console.error('Failed to get public name:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { publicName } = body;

    const finalName = publicName && publicName.trim() !== '' ? publicName.trim() : null;

    await ensureCommunityTables();

    // Check if user exists
    const check = await query('SELECT user_id FROM reox_users WHERE user_id = $1', [session.id]);
    
    if (check.rows.length > 0) {
      await query(
        'UPDATE reox_users SET public_name = $1, updated_at = NOW() WHERE user_id = $2',
        [finalName, session.id]
      );
    } else {
      await query(
        'INSERT INTO reox_users (user_id, public_name, updated_at) VALUES ($1, $2, NOW())',
        [session.id, finalName]
      );
    }

    return NextResponse.json({ success: true, publicName: finalName });
  } catch (error) {
    console.error('Failed to update public name:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
