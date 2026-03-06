import { NextResponse } from 'next/server';
import { query, ensureCommunityTables } from '@/app/lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await ensureCommunityTables();
    const { id } = await params;
    const result = await query(
      'SELECT * FROM community_replies WHERE discussion_id = $1 ORDER BY created_at ASC',
      [id]
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Failed to fetch replies:', error);
    return NextResponse.json({ error: 'Failed to fetch replies' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await ensureCommunityTables();
    const { id } = await params;
    const body = await request.json();
    const { author, content, parent_id } = body;

    if (!author || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const avatar = author.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);

    const result = await query(
      `INSERT INTO community_replies (discussion_id, parent_id, author, avatar, content)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [id, parent_id || null, author, avatar, content]
    );

    await query(
      'UPDATE community_discussions SET replies_count = replies_count + 1 WHERE id = $1',
      [id]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Failed to create reply:', error);
    return NextResponse.json({ error: 'Failed to create reply' }, { status: 500 });
  }
}
