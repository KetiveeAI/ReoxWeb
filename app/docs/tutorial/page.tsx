import Link from "next/link";
import { CheckCircle2, Terminal, Code2, PlayCircle } from "lucide-react";

export default function TutorialDocs() {
    return (
        <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Tutorial: Your First App
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                    Learn how to build a simple interactive counter application with Reox in 5 minutes.
                </p>
            </div>

            <div className="space-y-12">
                {/* Step 1 */}
                <section className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">
                            <Terminal size={20} />
                        </span>
                        <h2 className="text-2xl font-semibold text-gray-200">Initialize Project</h2>
                    </div>
                    <p className="text-gray-400">
                        Create a new directory for your project and initialize it.
                    </p>
                    <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                        <pre className="text-sm font-mono text-gray-300">
                            <code>
                                <span className="text-gray-500"># Create directory</span>{"\n"}
                                mkdir counter-app{"\n"}
                                cd counter-app{"\n\n"}
                                <span className="text-gray-500"># Initialize new Reox project</span>{"\n"}
                                reox init .
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Step 2 */}
                <section className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 font-bold border border-purple-500/30">
                            <Code2 size={20} />
                        </span>
                        <h2 className="text-2xl font-semibold text-gray-200">Write the Code</h2>
                    </div>
                    <p className="text-gray-400">
                        Open <code className="text-purple-300">main.rx</code> and add the following code. We'll use a <code className="text-blue-300">state_int</code> variable to track our count.
                    </p>
                    <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                        <pre className="text-sm font-mono text-gray-300">
                            <code>
                                <span className="text-purple-400">fn</span> <span className="text-blue-300">main</span>() -&gt; <span className="text-yellow-300">int</span> {"{"}{"\n"}
                                {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">app</span> = <span className="text-yellow-300">app_new</span>(<span className="text-green-400">"Counter App"</span>);{"\n"}
                                {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">window</span> = <span className="text-yellow-300">app_create_window</span>(app, <span className="text-green-400">"Counter"</span>, <span className="text-orange-400">400</span>, <span className="text-orange-400">300</span>);{"\n\n"}
                                {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">state</span> = <span className="text-yellow-300">state_int</span>(<span className="text-orange-400">0</span>);{"\n\n"}
                                {"    "}<span className="text-gray-500">// Main Layout</span>{"\n"}
                                {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">root</span> = <span className="text-yellow-300">vstack</span>(<span className="text-orange-400">20.0</span>);{"\n"}
                                {"    "}<span className="text-yellow-300">view_set_padding</span>(root, <span className="text-yellow-300">insets_all</span>(<span className="text-orange-400">40.0</span>));{"\n"}
                                {"    "}<span className="text-yellow-300">view_set_background</span>(root, <span className="text-yellow-300">color_background</span>());{"\n\n"}
                                {"    "}<span className="text-gray-500">// Display Count</span>{"\n"}
                                {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">label</span> = <span className="text-yellow-300">text_view</span>(<span className="text-green-400">"Count: 0"</span>);{"\n"}
                                {"    "}<span className="text-yellow-300">text_set_font_size</span>(label, <span className="text-orange-400">32.0</span>);{"\n"}
                                {"    "}<span className="text-yellow-300">text_bind_int</span>(label, state, <span className="text-green-400">"Count: { }"</span>);{"\n"}
                                {"    "}<span className="text-yellow-300">view_add_child</span>(root, label);{"\n\n"}
                                {"    "}<span className="text-gray-500">// Increment Button</span>{"\n"}
                                {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">btn</span> = <span className="text-yellow-300">button_primary</span>(<span className="text-green-400">"Increment"</span>);{"\n"}
                                {"    "}<span className="text-yellow-300">on_click</span>(btn, <span className="text-purple-400">action</span> {"{"}{"\n"}
                                {"        "}<span className="text-purple-400">let</span> <span className="text-blue-300">current</span> = <span className="text-yellow-300">state_get_int</span>(state);{"\n"}
                                {"        "}<span className="text-yellow-300">state_set_int</span>(state, current + <span className="text-orange-400">1</span>);{"\n"}
                                {"    "}{"}"});{"\n"}
                                {"    "}<span className="text-yellow-300">view_add_child</span>(root, btn);{"\n\n"}
                                {"    "}<span className="text-yellow-300">window_set_root</span>(window, root);{"\n"}
                                {"    "}<span className="text-yellow-300">app_run</span>(app);{"\n"}
                                {"    "}<span className="text-purple-400">return</span> <span className="text-orange-400">0</span>;{"\n"}
                                {"}"}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Step 3 */}
                <section className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 font-bold border border-orange-500/30">
                            <PlayCircle size={20} />
                        </span>
                        <h2 className="text-2xl font-semibold text-gray-200">Run It</h2>
                    </div>
                    <p className="text-gray-400">
                        Compile and run your application natively using the Reox CLI.
                    </p>
                    <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                        <pre className="text-sm font-mono text-gray-300">
                            <code>
                                reox run
                            </code>
                        </pre>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
                        <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={18} />
                        <p className="text-green-400 text-sm">
                            Success! You should see a native window with your counter application running.
                        </p>
                    </div>
                </section>
            </div>

            <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
                <Link href="/docs/installation" className="text-primary hover:text-blue-400 font-medium">← Installation</Link>
                <Link href="/docs/api/layout" className="text-primary hover:text-blue-400 font-medium">Layout System →</Link>
            </div>
        </div>
    );
}
