"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const GITHUB_RELEASE_URL = "https://github.com/KetiveeAI/Reox/releases";
const VERSION = "0.5.1-beta";

// SVG Icons for platforms
const WindowsIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const LinuxIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.897 1.132.218 0 .439-.027.654-.08.864-.2 1.535-.662 2.046-1.265.511-.601.922-1.27 1.122-1.87.19-.599.258-1.27-.058-1.812a.97.97 0 00-.09-.133 5.086 5.086 0 00.04-1.133c-.022-.468-.086-.904-.176-1.335.134-.066.264-.133.397-.202 1.397-.735 2.2-1.402 2.333-2.07.133-.467-.133-.868-.4-1.333a5.522 5.522 0 00-.267-.4c-.666-1-.866-1.267-.866-1.467 0-1.4.666-2.067.666-3.067 0-2.133-2.2-3.133-4.133-3.133-.533 0-.8.067-1.2.133-.267.067-.533.133-.8.133-.266 0-.466-.066-.666-.133-.2-.067-.4-.133-.666-.133-.667 0-1.534.333-1.934 1.133-.533-1.067-1.666-1.6-3.133-1.6l.003.003z" />
  </svg>
);

const PackageIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const TerminalIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const downloads = [
  {
    platform: "Windows",
    Icon: WindowsIcon,
    arch: "x64",
    filename: `reoxc-windows-x64.exe`,
    size: "~8 MB",
  },
  {
    platform: "macOS",
    Icon: AppleIcon,
    arch: "Universal (Intel + Apple Silicon)",
    filename: `reoxc-macos-universal`,
    size: "~6 MB",
  },
  {
    platform: "Linux",
    Icon: LinuxIcon,
    arch: "x64",
    filename: `reoxc-0.5.1-beta-linux-x64.tar.gz`,
    size: "~2.2 MB",
  },
  {
    platform: "Linux (Debian)",
    Icon: PackageIcon,
    arch: "x64 .deb package",
    filename: `reoxc_${VERSION}_amd64.deb`,
    size: "~5 MB",
  },
];

export default function DownloadPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/community" className="hover:text-white transition-colors">Community</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <Link
          href="/download"
          className="hidden md:block bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
        >
          Get Started
        </Link>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)} />
          <nav className="fixed top-16 left-0 right-0 bg-[#0a0a0f] border-b border-white/10 p-6 space-y-4">
            <Link href="/docs" className="block py-2 text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Documentation
            </Link>
            <Link href="/packages" className="block py-2 text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Packages
            </Link>
            <Link href="/blog" className="block py-2 text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/community" className="block py-2 text-lg font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Community
            </Link>
            <Link href="/download" className="block py-2 text-lg font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>
              Download
            </Link>
          </nav>
        </div>
      )}

      <main className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 pt-32 pb-16">

        <div className="flex flex-col items-center text-center gap-6 mb-12 animate-fade-in-up">
          <div className="relative w-24 h-24 mb-4">
            <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain drop-shadow-2xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Download <span className="text-gradient">Reox {VERSION}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
            Install the native declarative UI language for NeolyxOS.
            <br className="hidden md:block" />
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
                <div className="text-gray-400 group-hover:text-primary transition-colors">
                  <dl.Icon />
                </div>
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
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">NeolyxOS</h2>
                <p className="text-gray-400 text-sm">Pre-installed</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Reox is pre-installed on NeolyxOS. To update to the latest version:
            </p>

            <div className="bg-[#0d0f16] p-4 rounded-lg border border-white/10 flex items-center justify-between group-hover:border-primary/30 transition-colors overflow-x-auto">
              <code className="text-cyan-400 font-mono text-sm">reoxpm update reox@{VERSION}</code>
            </div>
          </div>

          {/* Linux/macOS Script */}
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <TerminalIcon />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">Install Script</h2>
                <p className="text-gray-400 text-sm">Linux / macOS</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4 text-sm md:text-base">
              One-line install using our universal script:
            </p>

            <div className="bg-[#0d0f16] p-4 rounded-lg border border-white/10 group-hover:border-purple-500/30 transition-colors overflow-x-auto">
              <code className="text-purple-400 font-mono text-sm">curl -fsSL https://reox.dev/install.sh | sh</code>
            </div>
          </div>

        </div>

        {/* System Requirements */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm text-gray-400">
            <span className="glass px-4 py-2 rounded-full">64-bit CPU (x86_64, ARM64)</span>
            <span className="glass px-4 py-2 rounded-full">4GB RAM</span>
            <span className="glass px-4 py-2 rounded-full">200MB Disk Space</span>
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
          <a href={GITHUB_RELEASE_URL} className="text-primary hover:underline" target="_blank" rel="noopener">
            View all releases on GitHub →
          </a>
          <Link href="/blog/reox-ui-framework" className="text-primary hover:underline">
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
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-500">
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
