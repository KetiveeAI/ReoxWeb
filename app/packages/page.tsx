import Link from "next/link";
import Image from "next/image";

export default function PackagesPage() {
  const stdlibPackages = [
    {
      name: "core",
      version: "1.0.0",
      description: "Core language utilities — math, memory, printing, and string operations.",
      author: "neolyx",
      status: "built-in",
      modules: ["math", "mem", "print", "string"]
    },
    {
      name: "ui",
      version: "1.0.0",
      description: "Declarative UI framework — controls, graphics primitives, and window management.",
      author: "neolyx",
      status: "stable",
      modules: ["controls", "graphics", "window"]
    },
    {
      name: "io",
      version: "1.0.0",
      description: "I/O and networking — file system access, network sockets, and serial communication.",
      author: "neolyx",
      status: "stable",
      modules: ["file", "network", "serial"]
    },
    {
      name: "ai",
      version: "1.0.0",
      description: "AI integration — assistant context, machine learning inference, and model loading.",
      author: "ketivee",
      status: "experimental",
      modules: ["assistant", "ml"]
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
            Reox <span className="text-gradient">Standard Library</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            The official modules that ship with the Reox compiler. All available out of the box.
          </p>
        </div>

        <div className="w-full animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-purple-400">Official</span> Modules
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stdlibPackages.map((pkg) => (
                <div key={pkg.name} className="glass p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 group">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-primary transition-colors">{pkg.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded border ${
                        pkg.status === "built-in" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                        pkg.status === "stable" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                        "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      }`}>{pkg.status}</span>
                      <span className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/5">{pkg.version}</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                    {pkg.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.modules.map((mod) => (
                    <span key={mod} className="text-xs font-mono bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/5">
                      {pkg.name}::{mod}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[8px] text-white font-bold uppercase">
                            {pkg.author[0]}
                        </div>
                        <span>@{pkg.author}</span>
                    </div>
                    <span className="font-mono text-gray-400">use {pkg.name};</span>
                </div>
                </div>
            ))}
            </div>
        </div>

        <div className="mt-16 w-full glass p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h3 className="text-xl font-bold mb-2">Manage Packages</h3>
                <p className="text-gray-400 text-sm">Use the Reox Package Manager CLI to manage dependencies in your project.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-[#000] px-4 py-3 rounded-lg border border-white/10 font-mono text-sm text-gray-300">
                  reoxc pkg add <span className="text-purple-400">&lt;package_name&gt;</span>
              </div>
              <div className="bg-[#000] px-4 py-3 rounded-lg border border-white/10 font-mono text-sm text-gray-300">
                  reoxc pkg init
              </div>
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
            &copy; {new Date().getFullYear()} NeolyxOS Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
