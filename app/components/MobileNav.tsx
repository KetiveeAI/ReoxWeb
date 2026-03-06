"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MobileNav() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          setCurrentUser(data.user);
        }
      })
      .catch(() => {});
  }, []);

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

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 w-full z-50 bg-[#0d0f16] border-t border-white/10 pb-safe">
      <div className="flex justify-around items-center px-2 py-3">
        <Link href="/docs" className="flex flex-col items-center gap-1 group w-16">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-[10px] text-gray-400 group-hover:text-white font-medium transition-colors">Docs</span>
        </Link>
        <Link href="/packages" className="flex flex-col items-center gap-1 group w-16">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="text-[10px] text-gray-400 group-hover:text-white font-medium transition-colors">Packages</span>
        </Link>
        <Link href="/community" className="flex flex-col items-center gap-1 group w-16 relative">
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
          <span className="text-[10px] text-primary font-medium transition-colors">Community</span>
        </Link>
        <Link href="/blog" className="flex flex-col items-center gap-1 group w-16">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <span className="text-[10px] text-gray-400 group-hover:text-white font-medium transition-colors">Blog</span>
        </Link>
        {currentUser ? (
          <button onClick={handleLogout} className="flex flex-col items-center gap-1 group w-16">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-[10px] text-gray-400 group-hover:text-red-400 font-medium transition-colors">Logout</span>
          </button>
        ) : (
          <button onClick={handleLogin} className="flex flex-col items-center gap-1 group w-16">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] text-gray-400 group-hover:text-white font-medium transition-colors">Login</span>
          </button>
        )}
      </div>
    </div>
  );
}
