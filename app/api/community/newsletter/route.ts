import { NextResponse } from 'next/server';
import { query, ensureCommunityTables } from '@/app/lib/db';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function generateNewsletterContent(discussions: any[]): Promise<string> {
  const discussionText = discussions.map(d => `Title: ${d.title}\nContent: ${d.content}\nAuthor: ${d.author}`).join('\n\n');
  
  try {
    const res = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2', // generic fast model
        prompt: `You are the community manager for "ReoxWeb". Write a highly engaging, friendly, and beautifully formatted HTML email newsletter summarizing the following recent community discussions. Do not use markdown backticks, output strictly valid HTML that can be directly inserted into an email body.\n\nDiscussions:\n${discussionText}`,
        stream: false
      }),
      signal: AbortSignal.timeout(30000), // 30 sec timeout for generation
    });
    
    if (res.ok) {
      const data = await res.json();
      return data.response || '<p>Here is your weekly update. (AI Generation failed to return text)</p>';
    }
    return '<p>Failed to generate newsletter with AI.</p>';
  } catch (error) {
    console.error('Ollama Generation failed:', error);
    return '<p>Welcome to our weekly newsletter! (AI generation is currently offline)</p>';
  }
}

export async function POST(request: Request) {
  try {
    await ensureCommunityTables();
    let toEmail;
    
    try {
      const body = await request.json();
      toEmail = body.to;
    } catch {
      return NextResponse.json({ error: 'Missing "to" email address in body' }, { status: 400 });
    }

    if (!toEmail) {
      return NextResponse.json({ error: 'Please provide a "to" email address' }, { status: 400 });
    }
    
    // Fetch top 5 recent discussions
    const result = await query(
      'SELECT title, content, author FROM community_discussions ORDER BY created_at DESC LIMIT 5'
    );
    
    const discussions = result.rows;
    if (discussions.length === 0) {
      return NextResponse.json({ message: 'No discussions to summarize' }, { status: 200 });
    }

    // Generate Newsletter with AI
    const htmlContent = await generateNewsletterContent(discussions);

    // Send Email
    const fromAddress = process.env.EMAIL_FROM_2 || process.env.EMAIL_FROM || process.env.SMTP_USER;
    
    await transporter.sendMail({
      from: `"Reox Community" <${fromAddress}>`,
      to: toEmail,
      subject: 'ReoxWeb Community Weekly Update',
      html: htmlContent
    });

    return NextResponse.json({ success: true, message: 'Newsletter sent successfully!' });
  } catch (error) {
    console.error('Failed to send newsletter:', error);
    return NextResponse.json({ error: 'Failed to send newsletter internal error' }, { status: 500 });
  }
}
