'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import EmojiPicker from 'emoji-picker-react';
import { Theme } from 'emoji-picker-react';
import gsap from 'gsap';

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

function SmileIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "w-5 h-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
      <line x1="9" y1="9" x2="9.01" y2="9"></line>
      <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
  );
}

interface Discussion {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  category: string;
  created_at: string;
  replies_count: number;
  likes_count: number;
}

interface Reply {
  id: number;
  discussion_id: number;
  parent_id: number | null;
  author: string;
  avatar: string;
  content: string;
  created_at: string;
  likes_count: number;
}

const CATEGORIES = [
  { id: 'all', label: 'All', color: 'gray' },
  { id: 'question', label: 'Questions', color: 'blue' },
  { id: 'discussion', label: 'Discussions', color: 'purple' },
  { id: 'showcase', label: 'Showcase', color: 'green' },
  { id: 'announcement', label: 'Announcements', color: 'orange' }
];

export default function CommunityPage() {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'discussion' });
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState<Discussion | null>(null);
  const [newReply, setNewReply] = useState('');
  const [replyToParentId, setReplyToParentId] = useState<number | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [showEmojiPickerId, setShowEmojiPickerId] = useState<string | null>(null);

  const onEmojiClickReply = (emojiData: any) => {
    setNewReply(prev => prev + emojiData.emoji);
    setShowEmojiPickerId(null);
  };

  const [likedDiscussions, setLikedDiscussions] = useState<Set<number>>(new Set());
  const [likedReplies, setLikedReplies] = useState<Set<number>>(new Set());

  const fetchDiscussions = useCallback(async (queryParam = searchQuery) => {
    try {
      const qs = queryParam ? `?q=${encodeURIComponent(queryParam)}` : '';
      const res = await fetch(`/api/community/discussions${qs}`);
      if (res.ok) {
        const data = await res.json();
        setDiscussions(data);
      }
    } catch (err) {
      console.error('Failed to load discussions:', err);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  const fetchSession = async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated) {
          setCurrentUser(data.user);
        }
      }
    } catch(err) {}
  };

  useEffect(() => {
    fetchDiscussions();
    fetchSession();
    
    try {
      const savedLikedD = JSON.parse(localStorage.getItem('reox-liked-discussions') || '[]');
      setLikedDiscussions(new Set(savedLikedD));
      const savedLikedR = JSON.parse(localStorage.getItem('reox-liked-replies') || '[]');
      setLikedReplies(new Set(savedLikedR));
    } catch (e) {
      // ignore
    }

    // Subscribe to silent real-time updates via Server-Sent Events (SSE)
    const eventSource = new EventSource('/api/community/stream');
    eventSource.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.type === 'new_discussion') {
          setDiscussions(prev => {
            // Check for duplicates
            if (prev.some(d => d.id === payload.data.id)) return prev;
            return [payload.data, ...prev];
          });
        } else if (payload.type === 'new_reply') {
          // If viewing this specific discussion, inject it live
          setReplies(prev => {
             if (prev.some(r => r.id === payload.data.id)) return prev;
             return [...prev, payload.data];
          });
          // Also bump the count on discussions list silently
          setDiscussions(prev => prev.map(d => 
             d.id === parseInt(payload.discussionId) 
             ? { ...d, replies_count: (d.replies_count || 0) + 1 } 
             : d
          ));
        }
      } catch (err) {}
    };

    return () => {
      eventSource.close();
    };
  }, []); // Only initial mount, let debounce handle the rest

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchDiscussions();
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, fetchDiscussions]);
  
  const fetchReplies = async (discussionId: number) => {
    try {
      const res = await fetch(`/api/community/discussions/${discussionId}/replies`);
      if (res.ok) {
        setReplies(await res.json());
      }
    } catch (err) {
      console.error('Failed to load replies:', err);
    }
  };

  const filteredDiscussions = selectedCategory === 'all'
    ? discussions
    : discussions.filter(d => d.category === selectedCategory);

  const handleLogin = () => {
    const clientId = 'ketivee-reoxweb';
    const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
    const authUrl = process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:5689';
    window.location.href = `${authUrl}/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  };

  const handleLogout = async () => {
    await fetch('/api/auth/me', { method: 'POST' });
    setCurrentUser(null);
    window.location.reload();
  };

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim() || !currentUser || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/community/discussions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: currentUser.name, ...newPost }),
      });
      if (res.ok) {
        setNewPost({ title: '', content: '', category: 'discussion' });
        setShowNewPostForm(false);
        await fetchDiscussions();
      }
    } catch (err) {
      console.error('Failed to post:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmitReply = async (e: React.FormEvent, parentId: number | null) => {
    e.preventDefault();
    if (!newReply.trim() || !currentUser || !selectedDiscussion || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch(`/api/community/discussions/${selectedDiscussion.id}/replies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: currentUser.name, content: newReply, parent_id: parentId }),
      });
      if (res.ok) {
        setNewReply('');
        setReplyToParentId(null);
        await fetchReplies(selectedDiscussion.id);
        await fetchDiscussions();
      }
    } catch (err) {
      console.error('Failed to reply:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReplyLike = async (replyId: number) => {
    try {
      const isLiked = likedReplies.has(replyId);
      const action = isLiked ? 'unlike' : 'like';

      const res = await fetch(`/api/community/replies/${replyId}/like`, { 
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      if (res.ok) {
        const data = await res.json();
        setReplies(prev => prev.map(r => r.id === replyId ? { ...r, likes_count: data.likes } : r));
        
        const newLiked = new Set(likedReplies);
        if (isLiked) newLiked.delete(replyId);
        else newLiked.add(replyId);
        setLikedReplies(newLiked);
        localStorage.setItem('reox-liked-replies', JSON.stringify(Array.from(newLiked)));
      }
    } catch (err) {
      console.error('Failed to like reply:', err);
    }
  };

  const handleLike = async (discussionId: number) => {
    try {
      const isLiked = likedDiscussions.has(discussionId);
      const action = isLiked ? 'unlike' : 'like';

      const res = await fetch(`/api/community/discussions/${discussionId}/like`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      if (res.ok) {
        const data = await res.json();
        setDiscussions(prev => prev.map(d =>
          d.id === discussionId ? { ...d, likes_count: data.likes } : d
        ));
        if (selectedDiscussion?.id === discussionId) {
          setSelectedDiscussion(prev => prev ? { ...prev, likes_count: data.likes } : null);
        }
        
        const newLiked = new Set(likedDiscussions);
        if (isLiked) newLiked.delete(discussionId);
        else newLiked.add(discussionId);
        setLikedDiscussions(newLiked);
        localStorage.setItem('reox-liked-discussions', JSON.stringify(Array.from(newLiked)));
      }
    } catch (err) {
      console.error('Failed to like:', err);
    }
  };

  const handleDeleteDiscussion = async (discussionId: number) => {
    if (!confirm('Are you sure you want to delete this discussion?')) return;
    try {
      const res = await fetch(`/api/community/discussions/${discussionId}`, { method: 'DELETE' });
      if (res.ok) {
        setDiscussions(prev => prev.filter(d => d.id !== discussionId));
        if (selectedDiscussion?.id === discussionId) {
          setSelectedDiscussion(null);
          setReplies([]);
        }
      }
    } catch (err) {
      console.error('Failed to delete discussion:', err);
    }
  };

  const handleDeleteReply = async (replyId: number) => {
    if (!confirm('Are you sure you want to delete this reply?')) return;
    try {
      const res = await fetch(`/api/community/replies/${replyId}`, { method: 'DELETE' });
      if (res.ok) {
        setReplies(prev => prev.filter(r => r.id !== replyId));
      }
    } catch (err) {
      console.error('Failed to delete reply:', err);
    }
  };

  const openDiscussion = (d: Discussion) => {
    setSelectedDiscussion(d);
    fetchReplies(d.id);
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

  const formatTime = (dateStr: string) => {
    const now = new Date();
    const diff = now.getTime() - new Date(dateStr).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

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
        {currentUser ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Hi, {currentUser.name}</span>
            <button
              onClick={handleLogout}
              className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            Login with Ketivee
          </button>
        )}
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
              <p className="text-sm text-gray-500">Source code &amp; issues</p>
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

          <a href="https://x.com/reoxlang" target="_blank" className="glass p-5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all group flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TwitterIcon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold group-hover:text-blue-400 transition-colors">Follow @reoxlang</h4>
              <p className="text-sm text-gray-500">News &amp; updates</p>
            </div>
          </a>
        </div>

        {/* Main Layout Block */}
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full cursor-default">
          
          {/* Discourse-Style Sidebar (Visible only on lg) */}
          <div className="hidden lg:flex w-64 flex-col gap-6 sticky top-24 flex-shrink-0 animate-fade-in-up">
            <div>
               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Categories</h3>
               <div className="space-y-1">
                 {CATEGORIES.map(cat => (
                   <button
                     key={cat.id}
                     onClick={() => { setSelectedCategory(cat.id); setSelectedDiscussion(null); setShowNewPostForm(false); }}
                     className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                         selectedCategory === cat.id && !selectedDiscussion && !showNewPostForm
                         ? 'bg-primary/20 text-primary border border-primary/30'
                         : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                       }`}
                   >
                     <div className="flex items-center gap-3">
                       <div className={`w-3 h-3 rounded-full bg-${cat.color}-500/50 border border-${cat.color}-500/30`} />
                       {cat.label}
                     </div>
                   </button>
                 ))}
               </div>
            </div>
          </div>

          {/* Community Forum Column */}
          <div className="flex-1 w-full glass rounded-2xl border border-white/10 overflow-hidden">
            
            {/* Forum Header */}
            <div className="p-6 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <h2 className="text-xl font-bold hidden sm:block">Live Discussions</h2>
              </div>
              
              {/* Search Bar */}
              <div className="flex-1 max-w-md relative mx-4 w-full">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                 </div>
                 <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="Search discussions..." 
                   className="w-full bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                 />
              </div>

              {!selectedDiscussion && currentUser && (
                <button
                  onClick={() => setShowNewPostForm(!showNewPostForm)}
                  className="bg-primary text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-primary/80 transition-colors flex items-center gap-2 flex-shrink-0"
                >
                  <span className="font-bold text-lg">+</span> New Post
                </button>
              )}
              {!selectedDiscussion && !currentUser && (
                <button
                  onClick={handleLogin}
                  className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 flex-shrink-0"
                >
                  Login to Post
                </button>
              )}
            </div>

            {/* Mobile Categories Navbar (Hidden on lg) */}
            {!selectedDiscussion && !showNewPostForm && (
              <div className="p-4 border-b border-white/10 flex lg:hidden gap-2 overflow-x-auto bg-black/20">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                        selectedCategory === cat.id
                        ? 'bg-primary text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
            
            {/* New Post Form */}
            {showNewPostForm && currentUser && (
              <div className="p-6 border-b border-white/10 bg-white/5 animate-in slide-in-from-top-4">
                <form onSubmit={handleSubmitPost} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <div className="w-full sm:w-1/2 px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                        {currentUser.avatar}
                      </div>
                      <span className="text-sm font-medium">{currentUser.name}</span>
                    </div>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      className="w-full sm:w-1/2 px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:border-primary/50 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="question">Question</option>
                      <option value="discussion">Discussion</option>
                      <option value="showcase">Showcase</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Discussion title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none font-medium"
                    required
                  />
                  <div className="relative">
                    <textarea
                      placeholder="What would you like to discuss?"
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none resize-none leading-relaxed pb-12"
                      required
                    />
                    <div className="absolute bottom-2 right-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowEmojiPickerId(showEmojiPickerId === 'new-post' ? null : 'new-post')}
                        className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                      >
                        <SmileIcon className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowNewPostForm(false)}
                        className="text-gray-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="bg-primary text-white px-6 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50 hover:scale-105 active:scale-95"
                      >
                        {submitting ? (
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          <SendIcon className="w-4 h-4" />
                        )}
                        <span>{submitting ? 'Posting...' : 'Post'}</span>
                      </button>
                    </div>
                    {showEmojiPickerId === 'new-post' && (
                      <div className="absolute z-50 bottom-full right-0 mb-2">
                        <EmojiPicker 
                          theme={Theme.DARK} 
                          onEmojiClick={(ed) => {
                            setNewPost(prev => ({ ...prev, content: prev.content + ed.emoji }));
                            setShowEmojiPickerId(null);
                          }} 
                          lazyLoadEmojis 
                        />
                      </div>
                    )}
                  </div>
                </form>
              </div>
            )}
            
          {loading ? (
            <div className="p-12 text-center text-gray-500">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              Loading discussions...
            </div>
          ) : selectedDiscussion ? (
            /* Discussion Detail View */
            <div className="p-6">
              <button
                onClick={() => { setSelectedDiscussion(null); setReplies([]); }}
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
                    <span className="text-gray-500 text-sm ml-2">{formatTime(selectedDiscussion.created_at)}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(selectedDiscussion.category)}`}>
                    {selectedDiscussion.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{selectedDiscussion.title}</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{selectedDiscussion.content}</p>

                {/* Discussion Actions */}
                <div className="mt-6 mb-2 flex flex-wrap items-center gap-4 border-t border-white/5 pt-4">
                  <button
                    onClick={(e) => {
                      const btn = e.currentTarget;
                      gsap.fromTo(btn, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: 'back.out(1.7)' });
                      handleLike(selectedDiscussion.id);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors group ${likedDiscussions.has(selectedDiscussion.id) ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'}`}
                  >
                    <span className="group-hover:scale-125 transition-transform inline-block origin-center">♥</span> 
                    <span className="text-gray-300">{selectedDiscussion.likes_count}</span>
                    <span className="hidden sm:inline">Likes</span>
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById('main-reply-input')?.focus();
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors group"
                  >
                    <ForumIcon className="w-4 h-4" /> 
                    <span>{replies.length}</span>
                    <span className="hidden sm:inline">Replies</span>
                  </button>
                  {currentUser?.name === selectedDiscussion.author && (
                    <button
                      onClick={() => handleDeleteDiscussion(selectedDiscussion.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors group ml-auto"
                    >
                      <span>Delete</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Replies */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-semibold mb-6 text-lg">Replies ({replies.length})</h4>

                <div className="space-y-6 mb-8">
                  {/* Threaded Comment Renderer */}
                  {(() => {
                    const renderThread = (parentId: number | null, depth = 0) => {
                      const threadReplies = replies.filter(r => (r.parent_id || null) === parentId);
                      if (threadReplies.length === 0) return null;

                      return (
                        <div className={`space-y-4 ${depth > 0 ? 'ml-6 border-l-2 border-white/10 pl-4 mt-4' : ''}`}>
                          {threadReplies.map(reply => (
                            <div key={reply.id} className="group animate-in fade-in duration-300">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                                  {reply.avatar}
                                </div>
                                <div className="flex-1 min-w-0 bg-white/5 rounded-2xl rounded-tl-sm p-4 border border-white/5 hover:border-white/10 transition-colors">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium text-sm text-white">{reply.author}</span>
                                      <span className="text-gray-500 text-xs">{formatTime(reply.created_at)}</span>
                                    </div>
                                  </div>
                                  <p className="text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">{reply.content}</p>
                                  
                                  {/* Reply Actions */}
                                  <div className="mt-3 flex items-center gap-4">
                                    <button 
                                      onClick={(e) => {
                                        const btn = e.currentTarget;
                                        gsap.fromTo(btn, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: 'back.out(1.7)' });
                                        handleReplyLike(reply.id);
                                      }}
                                      className={`flex items-center gap-1.5 text-xs font-medium transition-colors group-hover:text-gray-400 ${likedReplies.has(reply.id) ? 'text-pink-500 hover:text-pink-400' : 'text-gray-500 hover:text-pink-400'}`}
                                    >
                                      ♥ {reply.likes_count || 0}
                                    </button>
                                    <button 
                                      onClick={() => setReplyToParentId(replyToParentId === reply.id ? null : reply.id)}
                                      className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-white transition-colors group-hover:text-gray-400"
                                    >
                                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                                      Reply
                                    </button>
                                    {currentUser?.name === reply.author && (
                                      <button 
                                        onClick={() => handleDeleteReply(reply.id)}
                                        className="flex items-center gap-1.5 text-xs font-medium text-red-500/70 hover:text-red-400 transition-colors ml-auto"
                                      >
                                        Delete
                                      </button>
                                    )}
                                  </div>

                                  {/* Nested Reply Form */}
                                  {replyToParentId === reply.id && currentUser && (
                                    <div className="mt-4 animate-in slide-in-from-top-2">
                                      <form onSubmit={(e) => { e.preventDefault(); handleSubmitReply(e, reply.id); }} className="flex flex-col gap-3 relative">
                                        <div className="flex gap-3">
                                          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 border border-white/10">
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                                              {currentUser.avatar}
                                            </div>
                                          </div>
                                          <div className="flex-1 relative">
                                            <input type="text" placeholder={`Reply to ${reply.author}...`} value={newReply} onChange={(e) => setNewReply(e.target.value)} className="w-full px-3 py-2 pl-3 pr-10 rounded-lg bg-black/40 border border-white/10 text-white text-sm placeholder-gray-500 focus:border-primary/50 focus:outline-none" required />
                                            <button type="button" onClick={() => setShowEmojiPickerId(showEmojiPickerId === `nested-${reply.id}` ? null : `nested-${reply.id}`)} className="absolute right-2 top-1.5 text-gray-400 hover:text-white transition-colors"><SmileIcon /></button>
                                            {showEmojiPickerId === `nested-${reply.id}` && (
                                              <div className="absolute z-50 bottom-full right-0 mb-2">
                                                <EmojiPicker theme={Theme.DARK} onEmojiClick={(ed) => onEmojiClickReply(ed)} lazyLoadEmojis />
                                              </div>
                                            )}
                                          </div>
                                          <button type="submit" disabled={submitting} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50 text-sm font-medium">Post</button>
                                        </div>
                                      </form>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {/* Recursive Call */}
                              {renderThread(reply.id, depth + 1)}
                            </div>
                          ))}
                        </div>
                      );
                    };
                    return renderThread(null);
                  })()}
                </div>

                {/* Main Thread Reply Form */}
                <div className="bg-white/5 rounded-xl p-5 border border-white/10 relative">
                  <h4 className="text-sm font-semibold mb-3 text-white">Leave a reply to discussion</h4>
                  {currentUser ? (
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmitReply(e, null); }} className="flex flex-col gap-3">
                      <div className="flex gap-3">
                        <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 shrink-0">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                            {currentUser.avatar}
                          </div>
                          <span className="text-sm font-medium text-white">{currentUser.name}</span>
                        </div>
                        <div className="flex-1 relative">
                        <input
                          id="main-reply-input"
                          type="text"
                          placeholder="Write a reply..."
                          value={newReply}
                          onChange={(e) => setNewReply(e.target.value)}
                          className="w-full px-4 py-2.5 pl-4 pr-12 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none"
                          required
                        />
                        <button type="button" onClick={() => setShowEmojiPickerId(showEmojiPickerId === 'main' ? null : 'main')} className="absolute right-3 top-2.5 text-gray-400 hover:text-white transition-colors"><SmileIcon /></button>
                        {showEmojiPickerId === 'main' && (
                          <div className="absolute z-50 bottom-full right-0 mb-2">
                            <EmojiPicker theme={Theme.DARK} onEmojiClick={(ed) => onEmojiClickReply(ed)} lazyLoadEmojis />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={submitting}
                          className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/80 transition-colors disabled:opacity-50"
                        >
                          Reply
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/10">
                      <p className="text-sm text-gray-400">Join the discussion to leave a reply.</p>
                      <button onClick={handleLogin} className="bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
                        Login
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : filteredDiscussions.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              No discussions yet. Be the first to start one!
            </div>
          ) : (
            /* Discussion List */
            <div className="divide-y divide-white/5">
              {filteredDiscussions.map(discussion => (
                <div
                  key={discussion.id}
                  onClick={() => openDiscussion(discussion)}
                  className="p-5 hover:bg-white/5 cursor-pointer transition-colors group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    {/* Author & Avatar Area */}
                    <div className="hidden sm:flex flex-col items-center gap-2 w-16 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-105 transition-transform">
                        {discussion.avatar}
                      </div>
                    </div>
                    
                    {/* Mobile Author area inline */}
                    <div className="flex sm:hidden items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold shrink-0">
                        {discussion.avatar}
                      </div>
                      <span className="text-sm font-medium text-white">{discussion.author}</span>
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${getCategoryColor(discussion.category)}`}>
                          {discussion.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-primary transition-colors leading-tight">
                          {discussion.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-2 sm:line-clamp-1 mb-2 max-w-3xl leading-relaxed">
                        {discussion.content}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="hidden sm:flex items-center gap-1.5 font-medium">
                          {discussion.author}
                        </span>
                        <span>{formatTime(discussion.created_at)}</span>
                      </div>
                    </div>
                    
                    {/* Stats Area (Right Aligned on Desktop) */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:gap-2 text-sm text-gray-400 sm:w-24 shrink-0 mt-3 sm:mt-0 pt-3 sm:pt-0 border-t border-white/5 sm:border-0 w-full sm:w-auto">
                      <div className="flex items-center gap-2" title="Replies">
                        <ForumIcon className="w-4 h-4 opacity-70" /> 
                        <span className="font-medium">{discussion.replies_count}</span>
                      </div>
                      <button
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          const btn = e.currentTarget;
                          gsap.fromTo(btn, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: 'back.out(1.7)' });
                          handleLike(discussion.id); 
                        }}
                        className={`flex items-center gap-2 transition-colors ${likedDiscussions.has(discussion.id) ? 'text-pink-500 hover:text-pink-400' : 'hover:text-pink-400 text-gray-400'}`}
                        title="Likes"
                      >
                        <span className="font-medium text-gray-400">{discussion.likes_count}</span>
                        <span className="group-hover:scale-125 transition-transform inline-block origin-center hover:text-pink-400">♥</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
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

      {/* Mobile Bottom Navigation Bar (Hidden on md and up) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 w-full z-50 bg-[#0d0f16] border-t border-white/10 pb-safe">
        <div className="flex justify-around items-center px-2 py-3">
          <button className="flex flex-col items-center gap-1 group w-16">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-[10px] text-gray-400 group-hover:text-primary font-medium transition-colors">Discover</span>
          </button>
          <button className="flex flex-col items-center gap-1 group w-16">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-[10px] text-gray-400 group-hover:text-primary font-medium transition-colors">Channels</span>
          </button>
          <button className="flex flex-col items-center gap-1 group w-16 relative">
            <div className="absolute top-0 right-3.5 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span className="text-[10px] text-primary font-medium transition-colors">Discussions</span>
          </button>
          <button className="flex flex-col items-center gap-1 group w-16">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="text-[10px] text-gray-400 group-hover:text-primary font-medium transition-colors">Alerts</span>
          </button>
          <button className="flex flex-col items-center gap-1 group w-16">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] text-gray-400 group-hover:text-primary font-medium transition-colors">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
