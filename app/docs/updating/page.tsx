import Link from "next/link";

export default function UpdatingDocs() {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h1 className="text-4xl font-bold mb-6">Updating Reox</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Keep your Reox installation up to date.
                </p>
            </div>

            {/* Check Version */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-200">Check Current Version</h2>
                <p className="text-gray-400">
                    First, check which version you have installed:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-green-400">$</span> reoxc --version{"\n"}
                            <span className="text-cyan-400">reoxc 0.5.0-beta (linux x86_64)</span>
                        </code>
                    </pre>
                </div>
            </section>

            {/* NeolyxOS */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">NeolyxOS</h2>
                <p className="text-gray-400">
                    On NeolyxOS, use the package manager:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-gray-500"># Update to latest</span>{"\n"}
                            <span className="text-green-400">$</span> reoxpm update reox{"\n\n"}
                            <span className="text-gray-500"># Or specify version</span>{"\n"}
                            <span className="text-green-400">$</span> reoxpm update reox@0.5.0-beta
                        </code>
                    </pre>
                </div>
            </section>

            {/* Linux APT */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Linux (Debian/Ubuntu)</h2>
                <p className="text-gray-400">
                    If you installed via APT repository:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-green-400">$</span> sudo apt update{"\n"}
                            <span className="text-green-400">$</span> sudo apt upgrade reoxc
                        </code>
                    </pre>
                </div>
            </section>

            {/* Manual Update */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Manual Update (All Platforms)</h2>
                <p className="text-gray-400">
                    Re-run the install script to update:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-green-400">$</span> curl -fsSL https://reox.dev/install.sh | sh
                        </code>
                    </pre>
                </div>
                <p className="text-gray-400 mt-4">
                    Or download directly from{" "}
                    <a href="https://github.com/KetiveeAI/reox/releases" className="text-primary hover:underline" target="_blank" rel="noopener">
                        GitHub Releases
                    </a>
                    {" "}and replace the binary:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-gray-500"># Linux</span>{"\n"}
                            <span className="text-green-400">$</span> sudo mv reoxc-linux-x64 /usr/local/bin/reoxc{"\n"}
                            <span className="text-green-400">$</span> sudo chmod +x /usr/local/bin/reoxc{"\n\n"}
                            <span className="text-gray-500"># macOS</span>{"\n"}
                            <span className="text-green-400">$</span> sudo mv reoxc-macos-universal /usr/local/bin/reoxc{"\n"}
                            <span className="text-green-400">$</span> sudo chmod +x /usr/local/bin/reoxc
                        </code>
                    </pre>
                </div>
            </section>

            {/* Build from Source */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Build from Source</h2>
                <p className="text-gray-400">
                    For the latest development version:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-green-400">$</span> git clone https://github.com/KetiveeAI/reox.git{"\n"}
                            <span className="text-green-400">$</span> cd reox/reox-lang{"\n"}
                            <span className="text-green-400">$</span> cargo build --release{"\n"}
                            <span className="text-green-400">$</span> sudo cp target/release/reoxc /usr/local/bin/
                        </code>
                    </pre>
                </div>
            </section>

            {/* Release Notes */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Release Notes</h2>
                <p className="text-gray-400">
                    Check what&apos;s new in each version:
                </p>
                <div className="flex gap-4">
                    <Link href="/blog" className="glass px-4 py-2 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
                        Blog Announcements
                    </Link>
                    <a
                        href="https://github.com/KetiveeAI/reox/releases"
                        className="glass px-4 py-2 rounded-lg border border-white/10 hover:border-primary/50 transition-colors"
                        target="_blank"
                        rel="noopener"
                    >
                        GitHub Releases
                    </a>
                </div>
            </section>

            <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
                <Link href="/docs/installation" className="text-primary hover:text-blue-400 font-medium">← Installation</Link>
                <Link href="/docs/quickstart" className="text-primary hover:text-blue-400 font-medium">Quick Start →</Link>
            </div>
        </div>
    );
}
