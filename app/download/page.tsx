import Link from "next/link";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#05050A] text-white selection:bg-blue-500/30">
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
        <Link
          href="/download"
          className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
        >
          Get Started
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 pt-32 pb-16">
        
        <div className="flex flex-col items-center text-center gap-6 mb-16 animate-fade-in-up">
           <div className="relative w-24 h-24 mb-4">
            <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain drop-shadow-2xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Get <span className="text-gradient">Reox 1.0</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Install the native declarative UI language for NeolyxOS.
            <br />
            Also available for Linux and macOS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl animate-fade-in">
          
          {/* NeolyxOS Installation */}
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                   <h2 className="text-2xl font-bold">NeolyxOS</h2>
                   <p className="text-gray-400 text-sm">Recommended</p>
                </div>
            </div>
            
            <p className="text-gray-300 mb-4">
                Reox is pre-installed on NeolyxOS. To update to the latest version via the package manager:
            </p>
            
            <div className="bg-[#0d0f16] p-4 rounded-lg border border-white/10 flex items-center justify-between group-hover:border-primary/30 transition-colors">
              <code className="text-cyan-400 font-mono text-sm">reoxpm install stable</code>
               <button className="text-gray-500 hover:text-white transition-colors" aria-label="Copy command">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
               </button>
            </div>
          </div>

          {/* Linux/macOS Installation */}
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                   <h2 className="text-2xl font-bold">Linux / macOS</h2>
                   <p className="text-gray-400 text-sm">Cross-platform Compiler</p>
                </div>
            </div>
            
             <p className="text-gray-300 mb-4">
                Install the Reox toolchain using our universal install script:
            </p>

            <div className="bg-[#0d0f16] p-4 rounded-lg border border-white/10 flex items-center justify-between group-hover:border-purple-500/30 transition-colors">
              <code className="text-purple-400 font-mono text-sm break-all">curl -fsSL https://reox.neolyx.os/install.sh | sh</code>
               <button className="text-gray-500 hover:text-white transition-colors" aria-label="Copy command">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
               </button>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="glass px-4 py-2 rounded-full">64-bit CPU (x86_64, ARM64)</span>
                <span className="glass px-4 py-2 rounded-full">4GB RAM</span>
                <span className="glass px-4 py-2 rounded-full">200MB Disk Space</span>
            </div>
            <p className="mt-8 text-gray-500 text-sm">
                Looking for source code? <a href="https://github.com/ketivee/reox" className="text-primary hover:underline">View on GitHub</a>
            </p>
        </div>

      </main>

       {/* Footer */}
       <footer className="border-t border-white/5 py-12 bg-[#020205]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 grayscale opacity-50">
               <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
            </div>
            <span className="text-gray-500 font-semibold">Reox</span>
          </div>
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} NeolyxOS Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
