'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Settings as SettingsIcon, ShieldAlert, Cpu, Bell, User } from 'lucide-react';

export default function SettingsPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
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
    fetchSession();
  }, []);

  const handleLogin = () => {
    const returnTo = encodeURIComponent(`${window.location.origin}`);
    const authUrl = process.env.NEXT_PUBLIC_AUTH_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:7951';
    window.location.href = `${authUrl}/login?returnTo=${returnTo}`;
  };

  const handleLogout = async () => {
    await fetch('/api/auth/me', { method: 'POST' });
    setCurrentUser(null);
    window.location.reload();
  };

  if (!currentUser) {
    return (
      <div className="flex min-h-screen flex-col items-center bg-background grid-bg justify-center">
        <div className="glass p-10 rounded-2xl border border-white/10 text-center max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-white">Authentication Required</h2>
          <p className="text-gray-400 mb-8">Please log in to Ketivee to manage your Reox account settings.</p>
          <button
            onClick={handleLogin}
            className="bg-white text-black px-8 py-3 rounded-full font-bold w-full hover:bg-gray-200 transition-colors"
          >
            Login with Ketivee
          </button>
        </div>
      </div>
    );
  }

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
          <Link href="/community" className="hover:text-white transition-colors">Community</Link>
        </div>
        <div className="relative group flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-lg border border-white/20">
              {currentUser.avatar || (currentUser.firstName ? currentUser.firstName[0].toUpperCase() : 'U')}
            </div>
            <span className="text-sm font-medium text-gray-200">Hi, {currentUser.firstName || currentUser.name}</span>
          </div>
          <div className="absolute top-full right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right group-hover:translate-y-0 translate-y-2 z-50">
             <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-2 rounded-t-sm">
               <Link href="/settings" className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                 <SettingsIcon className="w-4 h-4" />
                 Settings
               </Link>
               <button onClick={handleLogout} className="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors mt-1">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                 Sign Out
               </button>
             </div>
          </div>
        </div>
      </nav>

      <main className="flex w-full max-w-6xl px-6 py-28 gap-8">
        
        {/* Settings Sidebar */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 glass rounded-2xl border border-white/10 p-4 h-max sticky top-28">
           <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">Settings</h3>
           <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors bg-primary/20 text-primary border border-primary/30">
               <User className="w-4 h-4" />
               Profile
           </button>
           <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors text-gray-400 hover:bg-white/5 hover:text-white mt-1 border border-transparent">
               <SettingsIcon className="w-4 h-4" />
               Preferences
           </button>
           <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors text-gray-400 hover:bg-white/5 hover:text-white mt-1 border border-transparent">
               <Bell className="w-4 h-4" />
               Notifications
           </button>
           <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors text-gray-400 hover:bg-white/5 hover:text-white mt-1 border border-transparent">
               <ShieldAlert className="w-4 h-4" />
               Security
           </button>
        </aside>

        {/* Profile Settings Form */}
        <div className="flex-1 glass rounded-2xl border border-white/10 p-6 md:p-10">
           <div className="mb-8 border-b border-white/10 pb-6">
             <h1 className="text-3xl font-bold mb-2">Public Profile</h1>
             <p className="text-gray-400">Manage your Reox identifying information securely across Ketivee.</p>
           </div>
           
           <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1 space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                   <input type="text" readOnly value={currentUser.firstName || ''} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 opacity-70 cursor-not-allowed" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                   <input type="email" readOnly value={currentUser.email || ''} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 opacity-70 cursor-not-allowed" />
                   <p className="text-xs text-yellow-500/80 mt-2 flex items-center gap-1">
                     <ShieldAlert className="w-3 h-3" /> Managed globally via Ketivee SSO Auth.
                   </p>
                 </div>
                 <div className="pt-4 border-t border-white/5">
                   <a 
                     href={process.env.NEXT_PUBLIC_ACCOUNT_URL || 'http://localhost:8956'} 
                     target="_blank" 
                     className="inline-flex items-center justify-center bg-white text-black px-6 py-2.5 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                   >
                     Edit Profile on Ketivee
                   </a>
                 </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                 <div className="relative group w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 shadow-xl border-4 border-white/10 flex items-center justify-center text-4xl font-bold text-white">
                   {currentUser.avatar?.startsWith('http') ? (
                     <Image src={currentUser.avatar} alt="Profile" fill className="object-cover" />
                   ) : (
                     currentUser.avatar || (currentUser.firstName ? currentUser.firstName[0].toUpperCase() : 'U')
                   )}
                   <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity backdrop-blur-sm z-10">
                     <span className="text-xs font-bold leading-tight text-center px-4">Change Reox Avatar</span>
                     <input type="file" className="hidden" accept="image/*" onChange={async (e) => {
                       if (!e.target.files || !e.target.files[0]) return;
                       
                       if (e.target.files[0].size > 1024 * 1024) {
                         alert('Avatar image must be below 1MB.');
                         e.target.value = '';
                         return;
                       }
                       
                       const fd = new FormData();
                       fd.append('param', e.target.files[0]);
                       try {
                         const res = await fetch('/api/profile/custom-avatar', { method: 'POST', body: fd });
                         const data = await res.json();
                         if (data.success) {
                           window.location.reload();
                         } else {
                           alert(data.error || 'Failed to sync with KCD3');
                         }
                       } catch (err) {
                          alert('Network error when contacting CDN proxy');
                       }
                     }} />
                   </label>
                 </div>
                 <div className="text-center">
                   <p className="text-sm text-gray-400 font-medium">
                     {currentUser.avatar?.includes('5662') || currentUser.avatar?.includes('kcd') ? 'Custom Reox Avatar' : 'Synced from SSO'}
                   </p>
                   {(currentUser.avatar?.includes('5662') || currentUser.avatar?.includes('kcd')) && (
                     <button 
                       onClick={async () => {
                         await fetch('/api/profile/custom-avatar', {
                           method: 'PUT',
                           headers: { 'Content-Type': 'application/json' },
                           body: JSON.stringify({ useCustom: false })
                         });
                         window.location.reload();
                       }}
                       className="text-xs text-red-400 hover:text-red-300 transition-colors mt-2"
                     >
                       Revert to SSO Avatar
                     </button>
                   )}
                 </div>
              </div>
           </div>
        </div>

      </main>
    </div>
  );
}
