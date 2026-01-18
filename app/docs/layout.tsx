import Link from "next/link";
import Image from "next/image";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Docs Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 transition-transform group-hover:scale-110 duration-300">
            <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight">Reox</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/docs" className="text-white">Documentation</Link>
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

      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-64 hidden md:block border-r border-white/10 pt-8 pb-10 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-6 space-y-8">
            <div>
              <h4 className="font-semibold text-sm text-gray-200 mb-3 uppercase tracking-wider">Getting Started</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/docs" className="block text-primary hover:text-blue-400">Introduction</Link></li>
                <li><Link href="/docs/installation" className="block hover:text-white transition-colors">Installation</Link></li>
                <li><Link href="/docs/quickstart" className="block hover:text-white transition-colors">Quick Start</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-200 mb-3 uppercase tracking-wider">Language Guide</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/docs/syntax" className="block hover:text-white transition-colors">Syntax Basics</Link></li>
                <li><Link href="/docs/control-flow" className="block hover:text-white transition-colors">Control Flow</Link></li>
                <li><Link href="/docs/running-code" className="block hover:text-white transition-colors">Running Code</Link></li>
                <li><Link href="/docs/ai" className="block hover:text-white transition-colors text-purple-400">AI Features</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-200 mb-3 uppercase tracking-wider">Reference</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/docs/stdlib" className="block hover:text-white transition-colors">Standard Library</Link></li>
                <li><Link href="/docs/components" className="block hover:text-white transition-colors">UI Components</Link></li>
                <li><Link href="/docs/api/layout" className="block hover:text-white transition-colors">Layout System</Link></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-12 py-10 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}
