import { NextResponse } from 'next/server';
import { query, ensureCommunityTables } from '@/app/lib/db';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await ensureCommunityTables();
    const { id } = await params;
    const result = await query(
      'UPDATE community_discussions SET likes_count = likes_count + 1 WHERE id = $1 RETURNING likes_count',
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Discussion not found' }, { status: 404 });
    }

    return NextResponse.json({ likes: result.rows[0].likes_count });
  } catch (error) {
    console.error('Failed to like discussion:', error);
    return NextResponse.json({ error: 'Failed to like' }, { status: 500 });
  }
}
