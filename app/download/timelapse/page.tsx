import Link from "next/link";
import Image from "next/image";

const GITHUB_RELEASE_URL = "https://github.com/KetiveeAI/Reox/releases";

interface ReleaseVersion {
  version: string;
  name: string;
  date: string;
  tag: string;
  prerelease: boolean;
  highlights: string[];
  assets: {
    platform: string;
    filename: string;
    size: string;
    href: string;
  }[];
}

const releases: ReleaseVersion[] = [
  {
    version: "0.5.1-beta",
    name: "Reox 0.5.1-beta: UI Framework",
    date: "January 28, 2026",
    tag: "v0.5.1-beta",
    prerelease: false,
    highlights: [
      "Declarative widgets: button(), text(), input(), slider(), checkbox()",
      "Layout containers: vstack(), hstack(), window()",
      "Theme colors: color_primary(), color_success(), color_danger()",
      "Animation easing: ease_in(), ease_out(), ease_in_out(), lerp()",
      "Standard library: core.rs, io.rs, ui.rs, ai.rs",
      "UI widget calls compile to REOX FFI (reox_button_create, etc.)",
    ],
    assets: [
      {
        platform: "Linux (tar.gz)",
        filename: "reoxc-0.5.1-beta-linux-x64.tar.gz",
        size: "2.1 MB",
        href: `${GITHUB_RELEASE_URL}/download/v0.5.1-beta/reoxc-0.5.1-beta-linux-x64.tar.gz`,
      },
    ],
  },
  {
    version: "0.5.0-beta",
    name: "REOX v0.5.0-beta - Beta Stabilization",
    date: "January 19, 2026",
    tag: "v0.5.0-beta",
    prerelease: true,
    highlights: [
      "Expanded test coverage: 10 comprehensive smoke tests",
      "Fixed view modifier stubs: 10+ view modifiers now store values",
      "Timer system: proper storage and unique IDs",
      "Desktop integration: proper static desktop app pattern",
      "74 tests passing",
      "Runtime library (libreox_runtime.a) builds successfully",
    ],
    assets: [
      {
        platform: "Source code",
        filename: "Source code (tar.gz)",
        size: "—",
        href: `${GITHUB_RELEASE_URL}/tag/v0.5.0-beta`,
      },
    ],
  },
];

export default function TimelapsePage() {
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

      <main className="flex flex-col items-center w-full max-w-5xl mx-auto px-6 pt-32 pb-16">

        <div className="flex flex-col items-center text-center gap-4 mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Version <span className="text-gradient">Timelapse</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Every Reox release, from the beginning. Download any version for any platform.
          </p>
          <Link href="/download" className="text-primary hover:underline text-sm mt-2">
            ← Back to latest download
          </Link>
        </div>

        {/* Timeline */}
        <div className="w-full relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-purple-500/30 to-transparent" />

          <div className="space-y-12">
            {releases.map((release, idx) => (
              <div key={release.version} className="relative pl-16 md:pl-20">
                <div className={`absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full border-2 ${
                  idx === 0
                    ? "bg-primary border-primary shadow-lg shadow-primary/40"
                    : "bg-[#0a0a0f] border-gray-600"
                }`} />

                <div className="glass rounded-2xl border border-white/10 overflow-hidden">
                  {/* Header */}
                  <div className="p-6 border-b border-white/5">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold">{release.name}</h2>
                      {release.prerelease ? (
                        <span className="text-xs px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                          pre-release
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                          stable
                        </span>
                      )}
                      {idx === 0 && (
                        <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                          latest
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{release.date}</p>
                  </div>

                  {/* Highlights */}
                  <div className="p-6 border-b border-white/5">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {release.highlights.map((h) => (
                        <li key={h} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-primary mt-0.5">&#8226;</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Downloads */}
                  <div className="p-6">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Downloads</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {release.assets.map((asset) => (
                        <a
                          key={asset.filename}
                          href={asset.href}
                          target="_blank"
                          rel="noopener"
                          className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-primary/30 hover:bg-white/[0.06] transition-all group text-sm"
                        >
                          <div>
                            <div className="font-medium text-gray-200 group-hover:text-white">{asset.platform}</div>
                            <div className="text-xs text-gray-500">{asset.size}</div>
                          </div>
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a
                        href={`${GITHUB_RELEASE_URL}/tag/${release.tag}`}
                        target="_blank"
                        rel="noopener"
                        className="text-xs text-gray-500 hover:text-primary transition-colors"
                      >
                        View full release notes on GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href={GITHUB_RELEASE_URL}
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline text-sm"
          >
            View all releases on GitHub →
          </a>
        </div>

      </main>

      <footer className="border-t border-white/5 py-12 bg-[#020205]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 grayscale opacity-50">
              <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
            </div>
            <span className="text-gray-500 font-semibold">Reox</span>
          </div>
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} KetiveeAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
