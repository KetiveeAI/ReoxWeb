export default function StdlibDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Standard Library</h1>
        <p className="text-xl text-gray-400 mb-8">
          A comprehensive overview of the built-in modules available in Reox.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Core Module</h2>
        <p className="text-gray-400">
          Fundamental types and utilities automatically available in every program.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-primary mb-2">print(text)</h3>
            <p className="text-sm text-gray-400">Outputs text to the standard output.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-primary mb-2">string.length()</h3>
            <p className="text-sm text-gray-400">Returns the character count of a string.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-primary mb-2">math.sqrt(x)</h3>
            <p className="text-sm text-gray-400">Calculates square root of a float.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-primary mb-2">mem.alloc(size)</h3>
            <p className="text-sm text-gray-400">Low-level memory allocation.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">IO Module</h2>
        <p className="text-gray-400">
          Input/Output operations for files and network.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">content</span> = <span className="text-yellow-300">file.read</span>(<span className="text-green-400">"config.json"</span>);{"\n"}
              <span className="text-yellow-300">file.write</span>(<span className="text-green-400">"log.txt"</span>, <span className="text-green-400">"Error: Connection failed"</span>);
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">UI Module</h2>
        <p className="text-gray-400">
          The heart of Reox applications. Provides window management and controls.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
            <li><strong>window</strong> - Top-level application containers</li>
            <li><strong>view</strong> - Layout containers (hstack, vstack, zstack)</li>
            <li><strong>controls</strong> - Button, Slider, TextField, Toggle</li>
            <li><strong>graphics</strong> - Canvas drawing primitives</li>
        </ul>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <a href="/docs/syntax" className="text-primary hover:text-blue-400 font-medium">← Back to Syntax</a>
        <a href="/docs/ai" className="text-primary hover:text-blue-400 font-medium">Next: AI Features →</a>
      </div>
    </div>
  );
}
