export default function SyntaxDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Syntax Basics</h1>
        <p className="text-xl text-gray-400 mb-8">
          A guide to the core language features of Reox.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Variables & Types</h2>
        <p className="text-gray-400">
          Reox is statically typed with powerful type inference. Variables are immutable by default.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">x</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">42</span>;              <span className="text-gray-500">// Immutable</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-purple-400">mut</span> <span className="text-blue-300">y</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">10</span>;          <span className="text-gray-500">// Mutable</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">name</span>: <span className="text-cyan-300">string</span> = <span className="text-green-400">"NeolyxOS"</span>;{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">active</span>: <span className="text-cyan-300">bool</span> = <span className="text-orange-400">true</span>;
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Functions</h2>
        <p className="text-gray-400">
          Functions are declared with <code>fn</code> and support implicit returns for single expressions.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Standard form</span>{"\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">add</span>(<span className="text-blue-300">a</span>: <span className="text-cyan-300">int</span>, <span className="text-blue-300">b</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> <span className="text-white">{`{`}</span>{"\n"}
              {"    "}<span className="text-purple-400">return</span> a + b;{"\n"}
              <span className="text-white">{`}`}</span>{"\n\n"}
              <span className="text-gray-500">// Short form</span>{"\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">multiply</span>(<span className="text-blue-300">a</span>: <span className="text-cyan-300">int</span>, <span className="text-blue-300">b</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> = a * b;
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Structures</h2>
        <p className="text-gray-400">
          Data structures are defined with <code>struct</code> and use C-style initialization.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">struct</span> <span className="text-yellow-300">User</span> <span className="text-white">{`{`}</span>{"\n"}
              {"    "}<span className="text-blue-300">id</span>: <span className="text-cyan-300">int</span>,{"\n"}
              {"    "}<span className="text-blue-300">name</span>: <span className="text-cyan-300">string</span>,{"\n"}
              {"    "}<span className="text-blue-300">email</span>: <span className="text-cyan-300">string</span>{"\n"}
              <span className="text-white">{`}`}</span>{"\n\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">user</span> = <span className="text-yellow-300">User</span> <span className="text-white">{`{`}</span>{"\n"}
              {"    "}<span className="text-blue-300">id</span>: <span className="text-orange-400">1</span>,{"\n"}
              {"    "}<span className="text-blue-300">name</span>: <span className="text-green-400">"Swana"</span>,{"\n"}
              {"    "}<span className="text-blue-300">email</span>: <span className="text-green-400">"swana@neolyx.os"</span>{"\n"}
              <span className="text-white">{`}`}</span>;
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Pattern Matching</h2>
        <p className="text-gray-400">
          Powerful <code>match</code> expressions simplify control flow.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">match</span> command <span className="text-white">{`{`}</span>{"\n"}
              {"    "}<span className="text-green-400">"save"</span> {`=>`} <span className="text-yellow-300">save_file</span>(),{"\n"}
              {"    "}<span className="text-green-400">"load"</span> {`=>`} <span className="text-yellow-300">load_file</span>(),{"\n"}
              {"    "}<span className="text-green-400">"exit"</span> {`=>`} <span className="text-purple-400">return</span>,{"\n"}
              {"    "}_ {`=>`} <span className="text-cyan-300">print</span>(<span className="text-green-400">"Unknown command"</span>){"\n"}
              <span className="text-white">{`}`}</span>
            </code>
          </pre>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <a href="/docs/quickstart" className="text-primary hover:text-blue-400 font-medium">← Back to Quick Start</a>
        <a href="/docs/stdlib" className="text-primary hover:text-blue-400 font-medium">Next: Standard Library →</a>
      </div>
    </div>
  );
}
