import { NextResponse } from 'next/server';
import { query, ensureCommunityTables } from '@/app/lib/db';

export async function GET() {
  try {
    await ensureCommunityTables();
    const result = await query(
      'SELECT * FROM community_discussions ORDER BY created_at DESC'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Failed to fetch discussions:', error);
    return NextResponse.json({ error: 'Failed to fetch discussions' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureCommunityTables();
    const body = await request.json();
    const { author, title, content, category } = body;

    if (!author || !title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const avatar = author.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);

    const result = await query(
      `INSERT INTO community_discussions (author, avatar, title, content, category)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [author, avatar, title, content, category || 'discussion']
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Failed to create discussion:', error);
    return NextResponse.json({ error: 'Failed to create discussion' }, { status: 500 });
  }
}
