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

export async function POST(
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
    const body = await request.json();
    const { content, parent_id } = body;

    if (!content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const isAcceptable = await moderateContent(content);
    if (!isAcceptable) {
      return NextResponse.json({ error: 'Content was flagged as inappropriate by our AI moderation system.' }, { status: 400 });
    }

    const avatar = session.avatar || session.name[0]?.toUpperCase() || '?';

    const result = await query(
      `INSERT INTO community_replies (discussion_id, parent_id, author_id, author, avatar, content)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [id, parent_id || null, session.id, session.publicName || session.name, avatar, content]
    );

    await query(
      'UPDATE community_discussions SET replies_count = replies_count + 1 WHERE id = $1',
      [id]
    );

    const newReply = result.rows[0];

    redisClient.publish('reox_community_updates', JSON.stringify({
      type: 'new_reply',
      data: newReply,
      discussionId: id
    })).catch(err => console.error('Redis publish error:', err));

    return NextResponse.json(newReply, { status: 201 });
  } catch (error) {
    console.error('Failed to create reply:', error);
    return NextResponse.json({ error: 'Failed to create reply' }, { status: 500 });
  }
}
