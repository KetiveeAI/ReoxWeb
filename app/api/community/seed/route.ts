import { NextResponse } from 'next/server';
import { query, ensureCommunityTables } from '@/app/lib/db';

const SEED_DISCUSSIONS = [
  {
    author: 'Swanaya Gupta',
    avatar: 'SG',
    title: 'Reox v1.1: UI Constructs Are Here — variant, layer, panel, protocol & More',
    content: 'We just shipped a major update to Reox! The compiler now supports 7 new language constructs for building native UIs: variant (tagged unions), protocol (vtable interfaces), extension (type methods), layer (reactive view components with signals and gesture handlers), panel (top-level windows), const, and typealias. All constructs compile end-to-end to optimized C. 112 tests pass. Check the updated docs for examples.',
    category: 'announcement',
  },
  {
    author: 'Swanaya Gupta',
    avatar: 'SG',
    title: 'Building a Button with gesture handlers in Reox',
    content: `Here is a quick example of the new layer syntax with gesture handlers:

layer Button {
    signal on_click;
    let label: string = "Click";

    on_tap {
        emit on_click();
    }

    fn body() {
        let width: int = MAX_WIDTH;
    }
}

The compiler generates static C callback functions like Button_on_tap(void* ctx) for each gesture. Try it out and let us know what you build!`,
    category: 'showcase',
  },
  {
    author: 'Ketivee',
    avatar: 'KT',
    title: 'Welcome to Reox Community!',
    content: 'This is the official community forum for Reox developers. Ask questions, share your projects, and connect with other developers building native UIs with Reox.',
    category: 'announcement',
  },
  {
    author: 'NeolyxOS Team',
    avatar: 'NX',
    title: 'Reox 0.5.0-beta Released!',
    content: 'We are excited to announce the release of Reox 0.5.0-beta with interpreter improvements, package manager foundation, and more. Check the blog for details!',
    category: 'announcement',
  },
];

export async function POST() {
  try {
    await ensureCommunityTables();

    const existing = await query('SELECT COUNT(*) FROM community_discussions');
    if (parseInt(existing.rows[0].count) > 0) {
      return NextResponse.json({ message: 'Already seeded', count: existing.rows[0].count });
    }

    for (const d of SEED_DISCUSSIONS) {
      await query(
        `INSERT INTO community_discussions (author, avatar, title, content, category)
         VALUES ($1, $2, $3, $4, $5)`,
        [d.author, d.avatar, d.title, d.content, d.category]
      );
    }

    return NextResponse.json({ message: 'Seeded', count: SEED_DISCUSSIONS.length });
  } catch (error) {
    console.error('Seed failed:', error);
    return NextResponse.json({ error: 'Seed failed' }, { status: 500 });
  }
}
