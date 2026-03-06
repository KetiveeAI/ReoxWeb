import { NextResponse } from 'next/server';
import { query, ensureCommunityTables } from '@/app/lib/db';

export async function GET(request: Request) {
  try {
    await ensureCommunityTables();
    
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    
    let result;
    if (q) {
      result = await query(
        'SELECT * FROM community_discussions WHERE title ILIKE $1 OR content ILIKE $1 ORDER BY created_at DESC',
        [`%${q}%`]
      );
    } else {
      result = await query(
        'SELECT * FROM community_discussions ORDER BY created_at DESC'
      );
    }
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Failed to fetch discussions:', error);
    return NextResponse.json({ error: 'Failed to fetch discussions' }, { status: 500 });
  }
}

async function moderateContent(text: string): Promise<boolean> {
  try {
    const res = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: `You are a strict AI content moderator for a developer community called Reox. Check the following text for vulgarity, spam, hate speech, or highly irrelevant content. Reply with exactly "YES" if the content is completely innocent and acceptable, and exactly "NO" if the content should be blocked.\n\nText:\n${text}`,
        stream: false
      }),
      signal: AbortSignal.timeout(5000), // Don't hang forever
    });
    
    if (res.ok) {
      const data = await res.json();
      const responseText = data.response?.trim().toUpperCase();
      if (responseText && responseText.includes('NO')) {
        return false; 
      }
    }
    return true; // Allow by default if unsure
  } catch (error) {
    console.warn('Ollama Moderation API failed/timeout (allowing post):', error);
    return true; 
  }
}

import { getSession } from '@/app/lib/session';
import { redisClient } from '@/app/lib/redis';

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await ensureCommunityTables();
    const body = await request.json();
    const { title, content, category } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const isAcceptable = await moderateContent(`${title}\n\n${content}`);
    if (!isAcceptable) {
      return NextResponse.json({ error: 'Content was flagged as inappropriate by our AI moderation system.' }, { status: 400 });
    }

    const avatar = session.avatar || session.name[0]?.toUpperCase() || '?';

    const result = await query(
      `INSERT INTO community_discussions (author_id, author, avatar, title, content, category)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [session.id, session.name, avatar, title, content, category || 'discussion']
    );

    const newDiscussion = result.rows[0];

    // Publish to Redis for silent real-time updates
    redisClient.publish('reox_community_updates', JSON.stringify({
      type: 'new_discussion',
      data: newDiscussion
    })).catch((err) => console.error('Redis publish error:', err));

    return NextResponse.json(newDiscussion, { status: 201 });
  } catch (error) {
    console.error('Failed to create discussion:', error);
    return NextResponse.json({ error: 'Failed to create discussion' }, { status: 500 });
  }
}
