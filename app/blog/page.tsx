import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      slug: "reox-ui-framework",
      title: "Reox UI Framework: Building Native UIs for NeolyxOS",
      date: "January 29, 2026",
      excerpt: "Introducing a complete UI framework with declarative widgets, theme colors, animation easing, and seamless NeolyxOS integration.",
      author: "Swanaya Gupta",
      category: "Feature"
    },
    {
      slug: "reox-cross-platform-release",
      title: "Reox Goes Cross-Platform: Download for Windows, macOS & Linux",
      date: "January 18, 2026",
      excerpt: "Today we're releasing standalone downloads for Windows, macOS, and Linux, making it easy for developers everywhere to build beautiful native UIs with Reox.",
      author: "Swanaya Gupta",
      category: "Release"
    },
    {
      slug: "reox-0-5-beta",
      title: "Reox 0.5.0-beta: Road to Stability",
      date: "January 18, 2026",
      excerpt: "Upgrading Reox from alpha to stable beta with core interpreter improvements, a new package manager foundation, and comprehensive testing infrastructure.",
      author: "Swanaya Gupta",
      category: "Release"
    },

  ];

  return (
    <div className="min-h-screen bg-[#05050A] text-white selection:bg-purple-500/30">
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
          <Link href="/blog" className="text-white">Blog</Link>
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
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            The Reox <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Latest news, updates, technical deep-dives, and tutorials from the Reox team and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full animate-fade-in">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="glass p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 group cursor-pointer flex flex-col h-full">
                <div className="flex items-center gap-3 text-sm mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.date}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <span className="text-primary font-medium group-hover:underline">Read Article →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Want to write for us? <a href="/community" className="text-primary hover:underline">Join our community</a>
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
