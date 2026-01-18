import Link from "next/link";

export default function ControlFlowDocs() {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h1 className="text-4xl font-bold mb-6">Control Flow</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Conditionals, loops, and branching in Reox.
                </p>
            </div>

            {/* If/Else */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-200">If/Else Statements</h2>
                <p className="text-gray-400">
                    Use <code>if</code>, <code>else if</code>, and <code>else</code> for conditional branching.
                    Conditions must be boolean expressions (no implicit conversion).
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-purple-400">let</span> <span className="text-blue-300">score</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">85</span>;{"\n\n"}
                            <span className="text-purple-400">if</span> score &gt;= <span className="text-orange-400">90</span> {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">&quot;Excellent!&quot;</span>);{"\n"}
                            {`}`} <span className="text-purple-400">else if</span> score &gt;= <span className="text-orange-400">70</span> {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">&quot;Good job!&quot;</span>);{"\n"}
                            {`}`} <span className="text-purple-400">else</span> {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">&quot;Keep trying!&quot;</span>);{"\n"}
                            {`}`}
                        </code>
                    </pre>
                </div>
            </section>

            {/* While Loop */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">While Loops</h2>
                <p className="text-gray-400">
                    Execute a block repeatedly while a condition is true.
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-purple-400">let mut</span> <span className="text-blue-300">count</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">0</span>;{"\n\n"}
                            <span className="text-purple-400">while</span> count &lt; <span className="text-orange-400">5</span> {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(count);{"\n"}
                            {"    "}count = count + <span className="text-orange-400">1</span>;{"\n"}
                            {`}`}{"\n\n"}
                            <span className="text-gray-500">// Output: 0, 1, 2, 3, 4</span>
                        </code>
                    </pre>
                </div>
            </section>

            {/* For Loop */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">For Loops</h2>
                <p className="text-gray-400">
                    Iterate over arrays and ranges with <code>for..in</code>.
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-gray-500">// Iterate over array</span>{"\n"}
                            <span className="text-purple-400">let</span> <span className="text-blue-300">items</span> = [<span className="text-green-400">&quot;apple&quot;</span>, <span className="text-green-400">&quot;banana&quot;</span>, <span className="text-green-400">&quot;cherry&quot;</span>];{"\n\n"}
                            <span className="text-purple-400">for</span> item <span className="text-purple-400">in</span> items {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(item);{"\n"}
                            {`}`}{"\n\n"}
                            <span className="text-gray-500">// Iterate over range</span>{"\n"}
                            <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">10</span> {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(i);{"\n"}
                            {`}`}
                        </code>
                    </pre>
                </div>
            </section>

            {/* Break and Continue */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Break and Continue</h2>
                <p className="text-gray-400">
                    Use <code>break</code> to exit a loop early, and <code>continue</code> to skip to the next iteration.
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">100</span> {`{`}{"\n"}
                            {"    "}<span className="text-purple-400">if</span> i == <span className="text-orange-400">5</span> {`{`}{"\n"}
                            {"        "}<span className="text-purple-400">break</span>;  <span className="text-gray-500">// Exit loop</span>{"\n"}
                            {"    "}{`}`}{"\n"}
                            {"    "}<span className="text-purple-400">if</span> i % <span className="text-orange-400">2</span> == <span className="text-orange-400">0</span> {`{`}{"\n"}
                            {"        "}<span className="text-purple-400">continue</span>;  <span className="text-gray-500">// Skip even numbers</span>{"\n"}
                            {"    "}{`}`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(i);{"\n"}
                            {`}`}{"\n"}
                            <span className="text-gray-500">// Output: 1, 3</span>
                        </code>
                    </pre>
                </div>
            </section>

            {/* Logical Operators */}
            <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold text-gray-200">Logical Operators</h2>
                <p className="text-gray-400">
                    Combine conditions with <code>and</code>, <code>or</code>, and <code>not</code>.
                </p>
                <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                        <code>
                            <span className="text-purple-400">let</span> <span className="text-blue-300">age</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">25</span>;{"\n"}
                            <span className="text-purple-400">let</span> <span className="text-blue-300">hasLicense</span>: <span className="text-cyan-300">bool</span> = <span className="text-orange-400">true</span>;{"\n\n"}
                            <span className="text-purple-400">if</span> age &gt;= <span className="text-orange-400">18</span> <span className="text-purple-400">and</span> hasLicense {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">&quot;Can drive&quot;</span>);{"\n"}
                            {`}`}{"\n\n"}
                            <span className="text-purple-400">if</span> age &lt; <span className="text-orange-400">13</span> <span className="text-purple-400">or</span> age &gt; <span className="text-orange-400">65</span> {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">&quot;Discount available&quot;</span>);{"\n"}
                            {`}`}{"\n\n"}
                            <span className="text-purple-400">if</span> <span className="text-purple-400">not</span> hasLicense {`{`}{"\n"}
                            {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">&quot;Get a license first&quot;</span>);{"\n"}
                            {`}`}
                        </code>
                    </pre>
                </div>
            </section>

            <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
                <Link href="/docs/syntax" className="text-primary hover:text-blue-400 font-medium">← Syntax Basics</Link>
                <Link href="/docs/running-code" className="text-primary hover:text-blue-400 font-medium">Next: Running Code →</Link>
            </div>
        </div>
    );
}
