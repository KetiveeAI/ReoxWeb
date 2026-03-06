import { NextResponse } from 'next/server';
import { query, ensureCommunityTables } from '@/app/lib/db';

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await ensureCommunityTables();
    const { id } = await params;

    // Delete the reply
    const result = await query(
      'DELETE FROM community_replies WHERE id = $1 RETURNING discussion_id',
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Reply not found' }, { status: 404 });
    }
    
    const discussionId = result.rows[0].discussion_id;

    // Decrement replies_count on the discussion
    await query(
      'UPDATE community_discussions SET replies_count = GREATEST(0, replies_count - 1) WHERE id = $1',
      [discussionId]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete reply:', error);
    return NextResponse.json({ error: 'Failed to delete reply' }, { status: 500 });
  }
}
