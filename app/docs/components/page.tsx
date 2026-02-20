import Link from "next/link";
import { Tag, Sliders, ToggleLeft, Layout, Grid, ScrollText, FileText, Calendar } from "lucide-react";

export default function ComponentsDocs() {
    return (
        <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    UI Components
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                    Reox comes with a comprehensive suite of native UI components that adapt to the underlying platform.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Views */}
                <section className="glass p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                        <span className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Tag size={20} /></span> Basic Views
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/docs/api/widgets#text" className="block group">
                                <code className="text-blue-400 font-bold group-hover:text-blue-300">text_view</code>
                                <p className="text-sm text-gray-400">Display read-only text with specific styling.</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs/api/widgets#image" className="block group">
                                <code className="text-blue-400 font-bold group-hover:text-blue-300">image_view</code>
                                <p className="text-sm text-gray-400">Render images from assets or URLs.</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs/api/widgets#icon" className="block group">
                                <code className="text-blue-400 font-bold group-hover:text-blue-300">icon_view</code>
                                <p className="text-sm text-gray-400">System vectors and custom SVG icons.</p>
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Controls */}
                <section className="glass p-6 rounded-xl border border-white/10 hover:border-green-500/30 transition-colors">
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                        <span className="p-2 bg-green-500/20 rounded-lg text-green-400"><Sliders size={20} /></span> Controls
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/docs/api/widgets#button" className="block group">
                                <code className="text-green-400 font-bold group-hover:text-green-300">button_view</code>
                                <p className="text-sm text-gray-400">Trigger actions with tap/click events.</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs/api/widgets#slider" className="block group">
                                <code className="text-green-400 font-bold group-hover:text-green-300">slider_view</code>
                                <p className="text-sm text-gray-400">Select value from a continuous range.</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs/api/widgets#switch" className="block group">
                                <code className="text-green-400 font-bold group-hover:text-green-300">switch_view</code>
                                <p className="text-sm text-gray-400">Toggle boolean state on/off.</p>
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Forms */}
                <section className="glass p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                        <span className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><FileText size={20} /></span> Forms
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/docs/api/widgets#input" className="block group">
                                <code className="text-purple-400 font-bold group-hover:text-purple-300">text_field</code>
                                <p className="text-sm text-gray-400">Single-line text input.</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs/api/widgets#picker" className="block group">
                                <code className="text-purple-400 font-bold group-hover:text-purple-300">date_picker</code>
                                <p className="text-sm text-gray-400">Native date and time selection.</p>
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Layouts */}
                <section className="glass p-6 rounded-xl border border-white/10 hover:border-orange-500/30 transition-colors">
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                        <span className="p-2 bg-orange-500/20 rounded-lg text-orange-400"><Layout size={20} /></span> Layouts
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/docs/api/layout" className="block group">
                                <code className="text-orange-400 font-bold group-hover:text-orange-300">vstack / hstack</code>
                                <p className="text-sm text-gray-400">Linear layout containers.</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs/api/layout#grid" className="block group">
                                <code className="text-orange-400 font-bold group-hover:text-orange-300">grid_view</code>
                                <p className="text-sm text-gray-400">2D grid layouts.</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs/api/layout#scroll" className="block group">
                                <code className="text-orange-400 font-bold group-hover:text-orange-300">scroll_view</code>
                                <p className="text-sm text-gray-400">Scrollable content area.</p>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>

            <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
                <Link href="/docs/layout" className="text-primary hover:text-blue-400 font-medium">← Layout System</Link>
                <Link href="/docs/api/widgets" className="text-primary hover:text-blue-400 font-medium">Widget API →</Link>
            </div>
        </div>
    );
}
