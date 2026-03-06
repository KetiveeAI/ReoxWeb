import { NextResponse } from 'next/server';
import { query, ensureCommunityTables } from '@/app/lib/db';

import { getSession } from '@/app/lib/session';

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await ensureCommunityTables();
    const { id } = await params;

    // First check if they own it or if it exists
    const check = await query('SELECT author_id FROM community_discussions WHERE id = $1', [id]);
    if (check.rowCount === 0) {
      return NextResponse.json({ error: 'Discussion not found' }, { status: 404 });
    }
    
    const discussion = check.rows[0];
    if (discussion.author_id && discussion.author_id !== session.id) {
       // Only enforce for posts that have an author_id set (backwards compatibility for older posts)
       return NextResponse.json({ error: 'Forbidden. You do not own this post.' }, { status: 403 });
    }

    // Delete associated replies first (cascade)
    await query('DELETE FROM community_replies WHERE discussion_id = $1', [id]);
    
    // Delete the discussion
    const result = await query(
      'DELETE FROM community_discussions WHERE id = $1 RETURNING id',
      [id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete discussion:', error);
    return NextResponse.json({ error: 'Failed to delete discussion' }, { status: 500 });
  }
}
