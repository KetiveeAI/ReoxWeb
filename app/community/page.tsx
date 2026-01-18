'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ForumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8" />
      <path d="M8 13h6" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8" />
      <path d="M8 11h6" />
    </svg>
  );
}

function LiveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </svg>
  );
}

interface Discussion {
  id: string;
  author: string;
  avatar: string;
  title: string;
  content: string;
  category: 'question' | 'discussion' | 'showcase' | 'announcement';
  timestamp: Date;
  replies: number;
  likes: number;
}

interface Reply {
  id: string;
  discussionId: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: Date;
  likes: number;
}

const CATEGORIES = [
  { id: 'all', label: 'All', color: 'gray' },
  { id: 'question', label: 'Questions', color: 'blue' },
  { id: 'discussion', label: 'Discussions', color: 'purple' },
  { id: 'showcase', label: 'Showcase', color: 'green' },
  { id: 'announcement', label: 'Announcements', color: 'orange' }
];

const INITIAL_DISCUSSIONS: Discussion[] = [
  {
    id: '1',
    author: 'Swanaya Gupta',
    avatar: 'SG',
    title: 'Welcome to Reox Community!',
    content: 'This is the official community forum for Reox developers. Ask questions, share your projects, and connect with other developers building native UIs with Reox.',
    category: 'announcement',
    timestamp: new Date('2026-01-18T10:00:00'),
    replies: 3,
    likes: 12
  },
  {
    id: '2',
    author: 'Developer',
    avatar: 'DV',
    title: 'How to create custom widgets in Reox?',
    content: 'I am trying to build a custom date picker widget. What is the best approach for creating reusable components?',
    category: 'question',
    timestamp: new Date('2026-01-18T09:30:00'),
    replies: 5,
    likes: 8
  },
  {
    id: '3',
    author: 'NeolyxOS Team',
    avatar: 'NX',
    title: 'Reox 0.5.0-beta Released!',
    content: 'We are excited to announce the release of Reox 0.5.0-beta with interpreter improvements, package manager foundation, and more. Check the blog for details!',
    category: 'announcement',
    timestamp: new Date('2026-01-18T08:00:00'),
    replies: 7,
    likes: 24
  },
  {
    id: '4',
    author: 'Builder',
    avatar: 'BL',
    title: 'My first Reox app - Todo List',
    content: 'Just finished building my first app with Reox! A simple todo list that runs natively on NeolyxOS. The declarative syntax is amazing!',
    category: 'showcase',
    timestamp: new Date('2026-01-17T15:00:00'),
    replies: 4,
    likes: 15
  }
];

export default function CommunityPage() {
  const [discussions, setDiscussions] = useState<Discussion[]>(INITIAL_DISCUSSIONS);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'discussion' as Discussion['category'] });
  const [authorName, setAuthorName] = useState('');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState<Discussion | null>(null);
  const [newReply, setNewReply] = useState('');
  const [replies, setReplies] = useState<Reply[]>([]);

  useEffect(() => {
    const savedDiscussions = localStorage.getItem('reox-discussions');
    if (savedDiscussions) {
      const parsed = JSON.parse(savedDiscussions);
      setDiscussions([...INITIAL_DISCUSSIONS, ...parsed]);
    }

    const savedReplies = localStorage.getItem('reox-replies');
    if (savedReplies) {
      setReplies(JSON.parse(savedReplies));
    }

    const savedAuthor = localStorage.getItem('reox-author');
    if (savedAuthor) {
      setAuthorName(savedAuthor);
    }
  }, []);

  const filteredDiscussions = selectedCategory === 'all'
    ? discussions
    : discussions.filter(d => d.category === selectedCategory);

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim() || !authorName.trim()) return;

    const discussion: Discussion = {
      id: Date.now().toString(),
      author: authorName,
      avatar: authorName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      timestamp: new Date(),
      replies: 0,
      likes: 0
    };

    const updated = [discussion, ...discussions.filter(d => !INITIAL_DISCUSSIONS.find(i => i.id === d.id))];
    localStorage.setItem('reox-discussions', JSON.stringify(updated));
    localStorage.setItem('reox-author', authorName);
    setDiscussions([discussion, ...discussions]);
    setNewPost({ title: '', content: '', category: 'discussion' });
    setShowNewPostForm(false);
  };

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReply.trim() || !authorName.trim() || !selectedDiscussion) return;

    const reply: Reply = {
      id: Date.now().toString(),
      discussionId: selectedDiscussion.id,
      author: authorName,
      avatar: authorName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      content: newReply,
      timestamp: new Date(),
      likes: 0
    };

    const updatedReplies = [...replies, reply];
    localStorage.setItem('reox-replies', JSON.stringify(updatedReplies));
    localStorage.setItem('reox-author', authorName);
    setReplies(updatedReplies);
    setNewReply('');

    setDiscussions(prev => prev.map(d =>
      d.id === selectedDiscussion.id ? { ...d, replies: d.replies + 1 } : d
    ));
  };

  const handleLike = (discussionId: string) => {
    setDiscussions(prev => prev.map(d =>
      d.id === discussionId ? { ...d, likes: d.likes + 1 } : d
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      question: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      discussion: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      showcase: 'bg-green-500/20 text-green-300 border-green-500/30',
      announcement: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300';
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  const discussionReplies = selectedDiscussion
    ? replies.filter(r => r.discussionId === selectedDiscussion.id)
    : [];

  return (
    <div className="flex min-h-screen flex-col items-center bg-background grid-bg selection:bg-primary/30">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 transition-transform group-hover:scale-110 duration-300">
            <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight">Reox</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/community" className="text-white">Community</Link>
        </div>
        <Link
          href="/download"
          className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
        >
          Get Started
        </Link>
      </nav>

      <main className="flex flex-col items-center w-full max-w-6xl px-6 py-20">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up pt-12">
          <h1 className="text-5xl font-bold mb-6">Reox <span className="text-gradient">Community</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with developers, ask questions, share your projects, and help shape the future of Reox.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10">
          <a href="https://github.com/ketiveeai/reox" target="_blank" className="glass p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-all group flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <GitHubIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold group-hover:text-primary transition-colors">GitHub</h4>
              <p className="text-sm text-gray-500">Source code & issues</p>
            </div>
          </a>

          <a href="https://github.com/ketiveeai/reox/discussions" target="_blank" className="glass p-5 rounded-xl border border-white/10 hover:border-green-500/50 transition-all group flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ForumIcon className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold group-hover:text-green-400 transition-colors">GitHub Discussions</h4>
              <p className="text-sm text-gray-500">Long-form discussions</p>
            </div>
          </a>

          <a href="https://x.com/ketiveeai" target="_blank" className="glass p-5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all group flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TwitterIcon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold group-hover:text-blue-400 transition-colors">Follow @KetiveeAI</h4>
              <p className="text-sm text-gray-500">News & updates</p>
            </div>
          </a>
        </div>

        {/* Community Forum */}
        <div className="w-full glass rounded-2xl border border-white/10 overflow-hidden">

          {/* Forum Header */}
          <div className="p-6 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <h2 className="text-xl font-bold">Community Discussions</h2>
              <span className="text-sm text-gray-500">({filteredDiscussions.length})</span>
            </div>

            <button
              onClick={() => setShowNewPostForm(!showNewPostForm)}
              className="bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/80 transition-colors flex items-center gap-2"
            >
              <span>+</span> New Discussion
            </button>
          </div>

          {/* New Post Form */}
          {showNewPostForm && (
            <div className="p-6 border-b border-white/10 bg-white/5">
              <form onSubmit={handleSubmitPost} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Discussion title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none"
                  required
                />
                <textarea
                  placeholder="What would you like to discuss?"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none resize-none"
                  required
                />
                <div className="flex items-center gap-4">
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value as Discussion['category'] })}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary/50 focus:outline-none"
                  >
                    <option value="question">Question</option>
                    <option value="discussion">Discussion</option>
                    <option value="showcase">Showcase</option>
                  </select>
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-primary/80 transition-colors flex items-center gap-2"
                  >
                    <SendIcon className="w-4 h-4" /> Post
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewPostForm(false)}
                    className="text-gray-500 hover:text-white px-4 py-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Category Filter */}
          <div className="p-4 border-b border-white/10 flex gap-2 overflow-x-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Discussion Detail View */}
          {selectedDiscussion ? (
            <div className="p-6">
              <button
                onClick={() => setSelectedDiscussion(null)}
                className="text-gray-500 hover:text-white mb-4 flex items-center gap-2"
              >
                ← Back to discussions
              </button>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
                    {selectedDiscussion.avatar}
                  </div>
                  <div>
                    <span className="font-semibold">{selectedDiscussion.author}</span>
                    <span className="text-gray-500 text-sm ml-2">{formatTime(selectedDiscussion.timestamp)}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(selectedDiscussion.category)}`}>
                    {selectedDiscussion.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{selectedDiscussion.title}</h3>
                <p className="text-gray-300 leading-relaxed">{selectedDiscussion.content}</p>
              </div>

              {/* Replies */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-semibold mb-4">Replies ({discussionReplies.length})</h4>

                <div className="space-y-4 mb-6">
                  {discussionReplies.map(reply => (
                    <div key={reply.id} className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-bold">
                          {reply.avatar}
                        </div>
                        <span className="font-medium text-sm">{reply.author}</span>
                        <span className="text-gray-500 text-xs">{formatTime(reply.timestamp)}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{reply.content}</p>
                    </div>
                  ))}
                </div>

                {/* Reply Form */}
                <form onSubmit={handleSubmitReply} className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none w-40"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Write a reply..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors"
                  >
                    <SendIcon className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          ) : (
            /* Discussion List */
            <div className="divide-y divide-white/5">
              {filteredDiscussions.map(discussion => (
                <div
                  key={discussion.id}
                  onClick={() => setSelectedDiscussion(discussion)}
                  className="p-5 hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {discussion.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getCategoryColor(discussion.category)}`}>
                          {discussion.category}
                        </span>
                        <h3 className="font-semibold text-white truncate">{discussion.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-1 mb-2">{discussion.content}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{discussion.author}</span>
                        <span>{formatTime(discussion.timestamp)}</span>
                        <span className="flex items-center gap-1">
                          <ForumIcon className="w-3 h-3" /> {discussion.replies}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleLike(discussion.id); }}
                          className="flex items-center gap-1 hover:text-pink-400 transition-colors"
                        >
                          ♥ {discussion.likes}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Resources */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Link href="/docs" className="glass p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all group">
            <BookIcon className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">Documentation</h4>
            <p className="text-sm text-gray-500">Learn Reox from the official guides and API reference.</p>
          </Link>

          <Link href="/blog" className="glass p-6 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all group">
            <LiveIcon className="w-8 h-8 text-orange-400 mb-4" />
            <h4 className="font-semibold mb-2 group-hover:text-orange-400 transition-colors">Blog</h4>
            <p className="text-sm text-gray-500">Read announcements, tutorials, and engineering deep-dives.</p>
          </Link>

          <Link href="/packages" className="glass p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all group">
            <svg className="w-8 h-8 text-cyan-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
            <h4 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Packages</h4>
            <p className="text-sm text-gray-500">Browse community packages and share your own.</p>
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#020205] w-full mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 grayscale opacity-50">
              <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
            </div>
            <span className="text-gray-500 font-semibold">Reox</span>
          </div>
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} KetiveeAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
