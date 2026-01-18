import Link from "next/link";
import Image from "next/image";

const GITHUB_RELEASE_URL = "https://github.com/KetiveeAI/reox/releases/latest";
const VERSION = "0.5.0-beta";

const downloads = [
  {
    platform: "Windows",
    icon: "💻",
    arch: "x64",
    filename: `reoxc-windows-x64.exe`,
    size: "~8 MB",
    color: "blue",
  },
  {
    platform: "macOS",
    icon: "🍎",
    arch: "Universal (Intel + Apple Silicon)",
    filename: `reoxc-macos-universal`,
    size: "~6 MB",
    color: "gray",
  },
  {
    platform: "Linux",
    icon: "🐧",
    arch: "x64",
    filename: `reoxc-linux-x64`,
    size: "~5 MB",
    color: "orange",
  },
  {
    platform: "Linux (Debian)",
    icon: "📦",
    arch: "x64 .deb package",
    filename: `reoxc_${VERSION}_amd64.deb`,
    size: "~5 MB",
    color: "red",
  },
];

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

        <div className="flex flex-col items-center text-center gap-6 mb-12 animate-fade-in-up">
          <div className="relative w-24 h-24 mb-4">
            <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain drop-shadow-2xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Download <span className="text-gradient">Reox {VERSION}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Install the native declarative UI language for NeolyxOS.
            <br />
            Available for Windows, macOS, and Linux.
          </p>
        </div>

        {/* Direct Downloads */}
        <div className="w-full max-w-4xl mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Direct Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((dl) => (
              <a
                key={dl.filename}
                href={`${GITHUB_RELEASE_URL}/download/v${VERSION}/${dl.filename}`}
                className="glass p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all hover:scale-[1.02] group flex items-center gap-4"
              >
                <span className="text-4xl">{dl.icon}</span>
                <div className="flex-1">
                  <div className="font-semibold text-lg">{dl.platform}</div>
                  <div className="text-gray-400 text-sm">{dl.arch}</div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-medium group-hover:underline">Download</div>
                  <div className="text-gray-500 text-xs">{dl.size}</div>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            All downloads from{" "}
            <a href={GITHUB_RELEASE_URL} className="text-primary hover:underline" target="_blank" rel="noopener">
              GitHub Releases
            </a>
          </p>
        </div>

        {/* Installation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl animate-fade-in">

          {/* NeolyxOS Installation */}
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">NeolyxOS</h2>
                <p className="text-gray-400 text-sm">Pre-installed</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4">
              Reox is pre-installed on NeolyxOS. To update to the latest version:
            </p>

            <div className="bg-[#0d0f16] p-4 rounded-lg border border-white/10 flex items-center justify-between group-hover:border-primary/30 transition-colors">
              <code className="text-cyan-400 font-mono text-sm">reoxpm update reox@{VERSION}</code>
            </div>
          </div>

          {/* Linux/macOS Script */}
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Install Script</h2>
                <p className="text-gray-400 text-sm">Linux / macOS</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4">
              One-line install using our universal script:
            </p>

            <div className="bg-[#0d0f16] p-4 rounded-lg border border-white/10 group-hover:border-purple-500/30 transition-colors">
              <code className="text-purple-400 font-mono text-sm break-all">curl -fsSL https://reox.dev/install.sh | sh</code>
            </div>
          </div>

        </div>

        {/* System Requirements */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="glass px-4 py-2 rounded-full">64-bit CPU (x86_64, ARM64)</span>
            <span className="glass px-4 py-2 rounded-full">4GB RAM</span>
            <span className="glass px-4 py-2 rounded-full">200MB Disk Space</span>
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <a href={GITHUB_RELEASE_URL} className="text-primary hover:underline" target="_blank" rel="noopener">
            View all releases on GitHub →
          </a>
          <Link href="/blog/reox-0-5-beta" className="text-primary hover:underline">
            Read release notes →
          </Link>
          <Link href="/docs/installation" className="text-gray-400 hover:text-white">
            Installation guide
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#020205]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 grayscale opacity-50">
                <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
              </div>
              <span className="text-gray-500 font-semibold">Reox</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <Link href="/license" className="hover:text-white transition-colors">License</Link>
              <Link href="/eula" className="hover:text-white transition-colors">EULA</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <a href="https://support.ketivee.com" className="hover:text-white transition-colors">Support</a>
            </div>
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} KetiveeAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
