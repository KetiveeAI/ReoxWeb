import Link from "next/link";
import Image from "next/image";

export default function PackagesPage() {
  const featuredPackages = [
    {
      name: "reox-ui",
      version: "1.2.0",
      description: "Standard UI component library for Reox applications.",
      author: "neolyx",
      downloads: "12k"
    },
    {
      name: "http-client",
      version: "0.8.5",
      description: "Async HTTP client with JSON support and interceptors.",
      author: "ketivee",
      downloads: "8.5k"
    },
    {
      name: "json-parser",
      version: "2.1.0",
      description: "Fast, zero-allocation JSON parsing and serialization.",
      author: "community",
      downloads: "5.2k"
    },
    {
      name: "sqlite-driver",
      version: "1.0.1",
      description: "Native SQLite bindings for data persistence.",
      author: "neolyx",
      downloads: "3.1k"
    },
    {
      name: "math-utils",
      version: "0.5.0",
      description: "Advanced mathematical functions and linear algebra.",
      author: "science-lab",
      downloads: "1.2k"
    },
    {
      name: "game-engine",
      version: "0.1.0-alpha",
      description: "2D game development framework for Reox.",
      author: "gamedev",
      downloads: "900"
    }
  ];

  return (
    <div className="min-h-screen bg-[#05050A] text-white selection:bg-orange-500/30">
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
          <Link href="/packages" className="text-white">Packages</Link>
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
        
        <div className="flex flex-col items-center text-center gap-6 mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Reox <span className="text-gradient">Packages</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Discover, install, and publish packages to the central registry.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl relative mt-4">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search packages..." 
              className="w-full bg-[#0d0f16] border border-white/10 rounded-full py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        <div className="w-full animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-purple-400">Featured</span> Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.map((pkg) => (
                <div key={pkg.name} className="glass p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-primary transition-colors">{pkg.name}</h3>
                    <span className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/5">{pkg.version}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 h-10 line-clamp-2">
                    {pkg.description}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[8px] text-white font-bold uppercase">
                            {pkg.author[0]}
                        </div>
                        <span>@{pkg.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        {pkg.downloads}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        <div className="mt-16 w-full glass p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h3 className="text-xl font-bold mb-2">Install Packages</h3>
                <p className="text-gray-400 text-sm">Use the Reox Package Manager CLI to add packages to your project.</p>
            </div>
            <div className="bg-[#000] px-4 py-3 rounded-lg border border-white/10 font-mono text-sm text-gray-300">
                reoxpm install <span className="text-purple-400">&lt;package_name&gt;</span>
            </div>
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
