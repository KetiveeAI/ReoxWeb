import Link from "next/link";

export default function RunningCodeDocs() {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h1 className="text-4xl font-bold mb-6">Running Reox Code</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Learn how to compile and run .rx and .reox files.
                </p>
            </div>

            {/* File Extensions */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-200">File Extensions</h2>
                <p className="text-gray-400">
                    Reox supports two file extensions that are completely equivalent:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="glass p-4 rounded-lg border border-white/10">
                        <code className="text-cyan-400 text-lg">.rx</code>
                        <p className="text-gray-400 text-sm mt-2">Short form - convenient for quick scripts</p>
                    </div>
                    <div className="glass p-4 rounded-lg border border-white/10">
                        <code className="text-cyan-400 text-lg">.reox</code>
                        <p className="text-gray-400 text-sm mt-2">Full form - recommended for projects</p>
                    </div>
                </div>
            </section>

            {/* Running with Interpreter */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Run Directly (Interpreter Mode)</h2>
                <p className="text-gray-400">
                    For quick testing, run code directly with the interpreter:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-gray-500"># Run a .rx file</span>{"\n"}
                            <span className="text-green-400">$</span> reoxc --run hello.rx{"\n\n"}
                            <span className="text-gray-500"># Run a .reox file</span>{"\n"}
                            <span className="text-green-400">$</span> reoxc --run app.reox{"\n\n"}
                            <span className="text-gray-500"># Short form</span>{"\n"}
                            <span className="text-green-400">$</span> reoxc -r script.rx
                        </code>
                    </pre>
                </div>
            </section>

            {/* Compiling to C */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Compile to C</h2>
                <p className="text-gray-400">
                    Generate optimized C code for production:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-gray-500"># Compile to C code</span>{"\n"}
                            <span className="text-green-400">$</span> reoxc main.rx -o main.c{"\n\n"}
                            <span className="text-gray-500"># Then compile with GCC/Clang</span>{"\n"}
                            <span className="text-green-400">$</span> gcc main.c -o myapp -lm{"\n"}
                            <span className="text-green-400">$</span> ./myapp
                        </code>
                    </pre>
                </div>
            </section>

            {/* Compile to Executable */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Compile to Executable</h2>
                <p className="text-gray-400">
                    Create a standalone executable with optimization:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-gray-500"># Full optimization pipeline</span>{"\n"}
                            <span className="text-green-400">$</span> reoxc app.reox --emit exe -o myapp -O3 --lto{"\n\n"}
                            <span className="text-gray-500"># Options:</span>{"\n"}
                            <span className="text-gray-500">#   --emit exe   Generate executable</span>{"\n"}
                            <span className="text-gray-500">#   -O3          Maximum optimization</span>{"\n"}
                            <span className="text-gray-500">#   --lto        Link-time optimization</span>{"\n"}
                            <span className="text-gray-500">#   --strip      Remove debug symbols</span>
                        </code>
                    </pre>
                </div>
            </section>

            {/* Imports */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Imports and Modules</h2>
                <p className="text-gray-400">
                    Split your code into multiple files using <code>import</code>:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-gray-500">// math_utils.rx</span>{"\n"}
                            <span className="text-purple-400">fn</span> <span className="text-yellow-300">square</span>(<span className="text-blue-300">x</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> {`{`}{"\n"}
                            {"    "}<span className="text-purple-400">return</span> x * x;{"\n"}
                            {`}`}{"\n\n"}
                            <span className="text-purple-400">fn</span> <span className="text-yellow-300">cube</span>(<span className="text-blue-300">x</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> {`{`}{"\n"}
                            {"    "}<span className="text-purple-400">return</span> x * x * x;{"\n"}
                            {`}`}
                        </code>
                    </pre>
                </div>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto mt-4">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-gray-500">// main.rx</span>{"\n"}
                            <span className="text-purple-400">import</span> math_utils;{"\n\n"}
                            <span className="text-purple-400">fn</span> <span className="text-yellow-300">main</span>() {`{`}{"\n"}
                            {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">result</span> = <span className="text-yellow-300">square</span>(<span className="text-orange-400">5</span>);{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(result);  <span className="text-gray-500">// 25</span>{"\n"}
                            {`}`}
                        </code>
                    </pre>
                </div>
            </section>

            {/* Entry Point */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Entry Point</h2>
                <p className="text-gray-400">
                    For executable programs, define a <code>main</code> function:
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-gray-500">// A complete Reox program</span>{"\n\n"}
                            <span className="text-purple-400">fn</span> <span className="text-yellow-300">greet</span>(<span className="text-blue-300">name</span>: <span className="text-cyan-300">string</span>) {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">&quot;Hello, &quot;</span> + name + <span className="text-green-400">&quot;!&quot;</span>);{"\n"}
                            {`}`}{"\n\n"}
                            <span className="text-purple-400">fn</span> <span className="text-yellow-300">main</span>() {`{`}{"\n"}
                            {"    "}<span className="text-yellow-300">greet</span>(<span className="text-green-400">&quot;NeolyxOS&quot;</span>);{"\n"}
                            {`}`}
                        </code>
                    </pre>
                </div>
            </section>

            {/* Best Practices */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Best Practices</h2>
                <div className="glass p-4 rounded-lg border border-white/10">
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Use <code className="text-cyan-400">.reox</code> for main application files</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Use <code className="text-cyan-400">.rx</code> for utility modules and scripts</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Keep one <code className="text-cyan-400">main()</code> function per executable</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Use <code className="text-cyan-400">-O3 --lto</code> for production builds</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Test with <code className="text-cyan-400">--run</code> before compiling</span>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
                <Link href="/docs/control-flow" className="text-primary hover:text-blue-400 font-medium">← Control Flow</Link>
                <Link href="/docs/stdlib" className="text-primary hover:text-blue-400 font-medium">Next: Standard Library →</Link>
            </div>
        </div>
    );
}
