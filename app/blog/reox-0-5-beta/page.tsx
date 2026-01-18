import Link from "next/link";
import Image from "next/image";

export default function ReoxBetaReleasePage() {
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

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                        ← Back to Blog
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-12 animate-fade-in-up">
                    <div className="flex items-center gap-3 text-sm mb-6">
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">
                            Release
                        </span>
                        <span className="text-gray-500">January 18, 2026</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Reox 0.5.0-beta: <span className="text-gradient">Road to Stability</span>
                    </h1>

                    <p className="text-xl text-gray-400 leading-relaxed">
                        We are upgrading Reox from <strong>alpha (0.1.0)</strong> to <strong>stable beta (0.5.0-beta)</strong>.
                        This release focuses on core interpreter improvements, a new package manager foundation, and comprehensive testing.
                    </p>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
                            SG
                        </div>
                        <div>
                            <div className="font-semibold">Swanaya Gupta</div>
                            <div className="text-sm text-gray-500">Reox Core Team</div>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <article className="prose prose-invert prose-lg max-w-none animate-fade-in">

                    {/* Phase 1 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">1</span>
                            Phase 1: Core Stability
                        </h2>

                        <div className="glass p-6 rounded-xl border border-white/10 mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-purple-300">Version Bump</h3>
                            <p className="text-gray-300 mb-4">
                                The version in <code className="bg-white/10 px-2 py-1 rounded">Cargo.toml</code> has been updated to <code className="bg-white/10 px-2 py-1 rounded">0.5.0-beta</code>.
                            </p>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-4 text-purple-300">Interpreter Improvements</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Connected all AST nodes: <code className="bg-white/10 px-2 py-1 rounded text-sm">guard</code>, <code className="bg-white/10 px-2 py-1 rounded text-sm">defer</code>, <code className="bg-white/10 px-2 py-1 rounded text-sm">try/catch</code>, <code className="bg-white/10 px-2 py-1 rounded text-sm">throw</code></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Added <code className="bg-white/10 px-2 py-1 rounded text-sm">typeof()</code> builtin for runtime type inspection</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Added type conversions: <code className="bg-white/10 px-2 py-1 rounded text-sm">str()</code>, <code className="bg-white/10 px-2 py-1 rounded text-sm">int()</code>, <code className="bg-white/10 px-2 py-1 rounded text-sm">float()</code></span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Phase 2 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">2</span>
                            Phase 2: Package Manager Foundation
                        </h2>

                        <div className="glass p-6 rounded-xl border border-white/10 mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-blue-300">Package Manifest (reox.toml)</h3>
                            <p className="text-gray-300 mb-4">
                                Introducing the standard package manifest format for Reox projects:
                            </p>
                            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                                <code className="text-gray-300">{`[package]
name = "my-app"
version = "1.0.0"
author = "User"

[dependencies]
std = "0.5"`}</code>
                            </pre>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-blue-300">Directory Structure</h3>
                            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                                <code className="text-gray-300">{`reox-lang/
├── src/package/
│   ├── mod.rs          # Package manager core
│   ├── manifest.rs     # reox.toml parser
│   └── resolver.rs     # Dependency resolver`}</code>
                            </pre>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-4 text-blue-300">CLI Commands</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <code className="bg-white/10 px-3 py-1 rounded text-sm font-mono">reoxc init</code>
                                    <span className="text-gray-500">— Create new project</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <code className="bg-white/10 px-3 py-1 rounded text-sm font-mono">reoxc build</code>
                                    <span className="text-gray-500">— Build project</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <code className="bg-white/10 px-3 py-1 rounded text-sm font-mono">reoxc run</code>
                                    <span className="text-gray-500">— Run project</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Phase 3 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">3</span>
                            Phase 3: Testing & Documentation
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="glass p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-semibold mb-4 text-green-300">Test Suite</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Run all tests in <code className="bg-white/10 px-2 py-1 rounded text-sm">tests/</code></li>
                                    <li>• Add package manager tests</li>
                                    <li>• Container type tests (HashMap, Vec)</li>
                                    <li>• Color management tests</li>
                                </ul>
                            </div>

                            <div className="glass p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-semibold mb-4 text-green-300">Documentation</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Updated README with beta features</li>
                                    <li>• Package manager usage guide</li>
                                    <li>• API reference for new builtins</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Verification */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Verification</h2>

                        <div className="glass p-6 rounded-xl border border-white/10">
                            <p className="text-gray-300 mb-4">Try the new features:</p>
                            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                                <code className="text-gray-300">{`# Check version
cargo run -- --version  # Should show 0.5.0-beta

# Create a new project
cargo run -- init test-project

# Run the project
cargo run -- --run test-project/main.reox`}</code>
                            </pre>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="glass p-8 rounded-2xl border border-white/10 text-center">
                        <h2 className="text-2xl font-bold mb-4">Get Started with Reox 0.5.0-beta</h2>
                        <p className="text-gray-400 mb-6">
                            Download the latest release and start building with the new features.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/download"
                                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                            >
                                Download
                            </Link>
                            <Link
                                href="/docs"
                                className="border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/5 transition-colors"
                            >
                                Read Docs
                            </Link>
                        </div>
                    </section>

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
                    <div className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} KetiveeAI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
