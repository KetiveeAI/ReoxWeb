import Link from "next/link";
import Image from "next/image";

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background grid-bg selection:bg-primary/30">
        
      {/* Navigation (Simple version matching docs) */}
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
        <Link
          href="/download"
          className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
        >
          Get Started
        </Link>
      </nav>

      <main className="flex flex-col items-center w-full max-w-5xl px-6 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">Join the Community</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with other Reox developers, contribute to the ecosystem, and help shape the future of native UI on NeolyxOS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full animate-fade-in">
          {/* GitHub */}
          <a href="https://github.com/ketiveeai/reox" target="_blank" className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:bg-white/5 group">
            <div className="text-4xl mb-6">💻</div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">GitHub</h3>
            <p className="text-gray-400 mb-6">
              Report bugs, request features, or contribute to the source code. Reox is open source and thrives on community contributions.
            </p>
            <span className="text-primary font-medium group-hover:underline">View Repository →</span>
          </a>

          {/* Discord/Chat (Placeholder) */}
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all hover:bg-white/5 group coursor-pointer">
            <div className="text-4xl mb-6">💬</div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">Discord</h3>
            <p className="text-gray-400 mb-6">
              Chat with the core team and other developers in real-time. Get help with your code and share your projects.
            </p>
            <span className="text-indigo-400 font-medium group-hover:underline">Join Server →</span>
          </div>

          {/* Forum/Discussions (Placeholder) */}
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all hover:bg-white/5 group">
            <div className="text-4xl mb-6">🏛️</div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">Discussions</h3>
            <p className="text-gray-400 mb-6">
              Participate in long-form discussions about language design, best practices, and future roadmap items.
            </p>
            <span className="text-green-400 font-medium group-hover:underline">Browse Topics →</span>
          </div>

          {/* Twitter/X (Placeholder) */}
          <a href="https://x.com/ketiveeai" target="_blank" className="glass p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all hover:bg-white/5 group">
            <div className="text-4xl mb-6">🐦</div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Follow Updates</h3>
            <p className="text-gray-400 mb-6">
              Follow @KetiveeAI for the latest news, release announcements, and tips from the Reox team.
            </p>
            <span className="text-blue-400 font-medium group-hover:underline">Follow @KetiveeAI →</span>
          </a>
        </div>
      </main>
    </div>
  );
}
