import { NextResponse } from 'next/server';
import { query, ensureCommunityTables } from '@/app/lib/db';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await ensureCommunityTables();
    const { id } = await params;
    
    // Parse the body to support unlike
    const bodyText = await request.text();
    let action = 'like';
    if (bodyText) {
      try {
        const body = JSON.parse(bodyText);
        if (body.action === 'unlike') action = 'unlike';
      } catch (e) {
        // ignore JSON parse error
      }
    }

    const operator = action === 'unlike' ? '-' : '+';
    
    // Ensure likes never go below 0
    const result = await query(
      `UPDATE community_replies SET likes_count = GREATEST(0, likes_count ${operator} 1) WHERE id = $1 RETURNING likes_count`,
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Reply not found' }, { status: 404 });
    }

    return NextResponse.json({ likes: result.rows[0].likes_count });
  } catch (error) {
    console.error('Failed to update reply like:', error);
    return NextResponse.json({ error: 'Failed to update like' }, { status: 500 });
  }
}
