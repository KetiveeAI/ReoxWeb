import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function query(text: string, params?: unknown[]) {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
    client.release();
  }
}

export async function ensureCommunityTables() {
  await query(`
    CREATE TABLE IF NOT EXISTS community_discussions (
      id SERIAL PRIMARY KEY,
      author_id VARCHAR(255) DEFAULT NULL,
      author TEXT NOT NULL,
      avatar TEXT NOT NULL DEFAULT '',
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      category TEXT NOT NULL DEFAULT 'discussion',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      replies_count INT DEFAULT 0,
      likes_count INT DEFAULT 0
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS community_replies (
      id SERIAL PRIMARY KEY,
      discussion_id INT NOT NULL REFERENCES community_discussions(id) ON DELETE CASCADE,
      parent_id INT REFERENCES community_replies(id) ON DELETE CASCADE,
      author_id VARCHAR(255) DEFAULT NULL,
      author TEXT NOT NULL,
      avatar TEXT NOT NULL DEFAULT '',
      content TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      likes_count INT DEFAULT 0
    )
  `);

  // Migrations for existing tables
  try {
    await query(`ALTER TABLE community_replies ADD COLUMN parent_id INT REFERENCES community_replies(id) ON DELETE CASCADE;`);
  } catch (e) {}

  try {
    await query(`ALTER TABLE community_discussions ADD COLUMN author_id VARCHAR(255) DEFAULT NULL;`);
  } catch (e) {}

  try {
    await query(`ALTER TABLE community_replies ADD COLUMN author_id VARCHAR(255) DEFAULT NULL;`);
  } catch (e) {}
}

export default pool;
