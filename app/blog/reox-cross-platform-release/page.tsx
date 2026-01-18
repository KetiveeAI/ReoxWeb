import Link from "next/link";
import Image from "next/image";

export default function CrossPlatformReleaseBlog() {
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
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    ← Back to Blog
                </Link>
            </nav>

            <main className="w-full max-w-4xl mx-auto px-6 pt-32 pb-16">
                <article className="animate-fade-in-up">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 text-sm mb-4">
                            <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400">
                                Release
                            </span>
                            <span className="text-gray-500">January 18, 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Reox Goes Cross-Platform: Download for Windows, macOS & Linux
                        </h1>
                        <p className="text-xl text-gray-400">
                            Today we&apos;re thrilled to announce that Reox 0.5.0-beta is now available as standalone
                            downloads for Windows, macOS, and Linux, making it easy for developers everywhere to
                            build beautiful native UIs.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Download Links</h2>
                        <p className="text-gray-300">
                            We&apos;ve set up an automated CI/CD pipeline to build and distribute Reox for every major platform.
                            You can now download ready-to-run binaries directly from our website or GitHub Releases:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                            <Link href="/download" className="glass p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all hover:scale-[1.02] flex items-center gap-4">
                                <span className="text-3xl">💻</span>
                                <div>
                                    <div className="font-semibold">Windows x64</div>
                                    <div className="text-gray-400 text-sm">.exe installer</div>
                                </div>
                            </Link>
                            <Link href="/download" className="glass p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all hover:scale-[1.02] flex items-center gap-4">
                                <span className="text-3xl">🍎</span>
                                <div>
                                    <div className="font-semibold">macOS Universal</div>
                                    <div className="text-gray-400 text-sm">Intel + Apple Silicon</div>
                                </div>
                            </Link>
                            <Link href="/download" className="glass p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all hover:scale-[1.02] flex items-center gap-4">
                                <span className="text-3xl">🐧</span>
                                <div>
                                    <div className="font-semibold">Linux x64</div>
                                    <div className="text-gray-400 text-sm">Static binary</div>
                                </div>
                            </Link>
                            <Link href="/download" className="glass p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all hover:scale-[1.02] flex items-center gap-4">
                                <span className="text-3xl">📦</span>
                                <div>
                                    <div className="font-semibold">Debian/Ubuntu</div>
                                    <div className="text-gray-400 text-sm">.deb package</div>
                                </div>
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">What&apos;s New in 0.5.0-beta</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Cross-platform builds:</strong> Native binaries for Windows, macOS, and Linux</li>
                            <li><strong>Static linking:</strong> No runtime dependencies on Linux (musl libc)</li>
                            <li><strong>Universal binary:</strong> Single macOS binary works on Intel and Apple Silicon</li>
                            <li><strong>Automated CI/CD:</strong> GitHub Actions builds and publishes releases automatically</li>
                            <li><strong>Platform detection:</strong> <code className="text-cyan-400">reoxc --version</code> now shows OS and architecture</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Installation Methods</h2>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-3">One-Line Install (Linux/macOS)</h3>
                        <div className="bg-[#0d0f16] p-4 rounded-lg border border-white/10 my-4">
                            <code className="text-purple-400 font-mono">curl -fsSL https://reox.dev/install.sh | sh</code>
                        </div>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Debian/Ubuntu</h3>
                        <div className="bg-[#0d0f16] p-4 rounded-lg border border-white/10 my-4">
                            <code className="text-cyan-400 font-mono">sudo dpkg -i reoxc_0.5.0-beta_amd64.deb</code>
                        </div>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-3">NeolyxOS</h3>
                        <div className="bg-[#0d0f16] p-4 rounded-lg border border-white/10 my-4">
                            <code className="text-cyan-400 font-mono">reoxpm update reox@0.5.0-beta</code>
                        </div>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">What&apos;s Coming Next</h2>
                        <p className="text-gray-300">
                            This release lays the foundation for broader adoption. Coming soon:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Windows MSI installer with Start Menu shortcuts</li>
                            <li>macOS .pkg installer with code signing</li>
                            <li>RPM packages for Fedora/RHEL</li>
                            <li>Homebrew formula for macOS</li>
                            <li>VSCode extension for syntax highlighting</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Get Started</h2>
                        <p className="text-gray-300">
                            Ready to build beautiful native UIs with Reox? Head to our{" "}
                            <Link href="/download" className="text-primary hover:underline">download page</Link>{" "}
                            or check out the{" "}
                            <Link href="/docs/quickstart" className="text-primary hover:underline">quickstart guide</Link>{" "}
                            to get up and running in minutes.
                        </p>
                    </div>

                    {/* Author */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
                                SG
                            </div>
                            <div>
                                <div className="font-semibold">Swanaya Gupta</div>
                                <div className="text-gray-500 text-sm">Lead Developer, KetiveeAI</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 glass p-8 rounded-2xl border border-white/10 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to try Reox?</h3>
                        <Link
                            href="/download"
                            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors"
                        >
                            Download Now →
                        </Link>
                    </div>
                </article>
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
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="/license" className="hover:text-white transition-colors">License</Link>
                        <Link href="/eula" className="hover:text-white transition-colors">EULA</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    </div>
                    <div className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} KetiveeAI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
