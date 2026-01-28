import Link from "next/link";
import Image from "next/image";

export default function ReoxUIFrameworkPage() {
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
                        <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300">
                            Feature
                        </span>
                        <span className="text-gray-500">January 29, 2026</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Reox UI Framework: <span className="text-gradient">SwiftUI for NeolyxOS</span>
                    </h1>

                    <p className="text-xl text-gray-400 leading-relaxed">
                        Introducing a complete UI framework with declarative widgets, theme colors, animation easing, and seamless NeolyxOS integration.
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

                    {/* UI Widgets */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">1</span>
                            Declarative UI Widgets
                        </h2>

                        <div className="glass p-6 rounded-xl border border-white/10 mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-purple-300">Write UI Simply</h3>
                            <p className="text-gray-300 mb-4">
                                Create NeolyxOS apps with SwiftUI-like syntax that compiles directly to optimized C code:
                            </p>
                            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                                <code className="text-gray-300">{`// Reox UI Code
let btn = button("Submit");
let label = text("Welcome!");
let input = textfield("Enter name...");
let container = vstack(16);

// Compiles to C FFI calls:
// reox_button_create("Submit");
// reox_label_create("Welcome!");
// reox_textfield_create("Enter name...");
// reox_vstack(16);`}</code>
                            </pre>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-4 text-purple-300">Supported Widgets</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <code className="bg-white/10 px-2 py-1 rounded text-sm">button(label)</code>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <code className="bg-white/10 px-2 py-1 rounded text-sm">text(content)</code>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <code className="bg-white/10 px-2 py-1 rounded text-sm">textfield(placeholder)</code>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <code className="bg-white/10 px-2 py-1 rounded text-sm">checkbox(label)</code>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <code className="bg-white/10 px-2 py-1 rounded text-sm">slider(min, max)</code>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <code className="bg-white/10 px-2 py-1 rounded text-sm">vstack(gap)</code>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <code className="bg-white/10 px-2 py-1 rounded text-sm">hstack(gap)</code>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <code className="bg-white/10 px-2 py-1 rounded text-sm">window(title, w, h)</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Theme Colors */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">2</span>
                            Theme Colors
                        </h2>

                        <div className="glass p-6 rounded-xl border border-white/10 mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-blue-300">Built-in Color Palette</h3>
                            <p className="text-gray-300 mb-4">
                                Access NeolyxOS theme colors directly in your Reox code:
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: 'rgb(0, 122, 255)' }}></div>
                                    <code className="text-sm">color_primary()</code>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: 'rgb(52, 199, 89)' }}></div>
                                    <code className="text-sm">color_success()</code>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: 'rgb(255, 59, 48)' }}></div>
                                    <code className="text-sm">color_danger()</code>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: 'rgb(255, 149, 0)' }}></div>
                                    <code className="text-sm">color_warning()</code>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: 'rgb(28, 28, 30)' }}></div>
                                    <code className="text-sm">color_background()</code>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: 'rgb(44, 44, 46)' }}></div>
                                    <code className="text-sm">color_surface()</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Animation */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">3</span>
                            Animation Easing
                        </h2>

                        <div className="glass p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-4 text-green-300">Smooth Animations</h3>
                            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                                <code className="text-gray-300">{`// Easing functions
let t = ease_in(0.5);      // Accelerate
let t = ease_out(0.5);     // Decelerate
let t = ease_in_out(0.5);  // Smooth S-curve

// Linear interpolation
let value = lerp(0.0, 100.0, t);

// Color functions
let c = rgb(255, 128, 64);
let c = hsl(240.0, 80.0, 50.0);`}</code>
                            </pre>
                        </div>
                    </section>

                    {/* Stdlib */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">4</span>
                            Standard Library
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="glass p-6 rounded-xl border border-white/10">
                                <h3 className="text-lg font-semibold mb-3 text-orange-300">Core</h3>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                    <li>• len(), type_of()</li>
                                    <li>• min(), max(), clamp()</li>
                                    <li>• sqrt(), pow()</li>
                                    <li>• floor(), ceil(), round()</li>
                                </ul>
                            </div>
                            <div className="glass p-6 rounded-xl border border-white/10">
                                <h3 className="text-lg font-semibold mb-3 text-orange-300">I/O</h3>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                    <li>• read_file(), write_file()</li>
                                    <li>• exists(), is_file()</li>
                                    <li>• list_dir()</li>
                                    <li>• print_raw(), read_line()</li>
                                </ul>
                            </div>
                            <div className="glass p-6 rounded-xl border border-white/10">
                                <h3 className="text-lg font-semibold mb-3 text-orange-300">AI</h3>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                    <li>• ai_generate()</li>
                                    <li>• ai_complete()</li>
                                    <li>• ai_explain()</li>
                                    <li>• ai_fix()</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="glass p-8 rounded-2xl border border-white/10 text-center">
                        <h2 className="text-2xl font-bold mb-4">Build NeolyxOS Apps with Reox</h2>
                        <p className="text-gray-400 mb-6">
                            Get started with the new UI framework and create stunning native applications.
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
