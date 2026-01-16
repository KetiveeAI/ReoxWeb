export default function InstallationDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Installation</h1>
        <p className="text-xl text-gray-400 mb-8">
          Setting up the Reox toolchain on NeolyxOS.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Prerequisites</h2>
        <p className="text-gray-400">
          Reox official support targets NeolyxOS. While portions of the compiler may run on Linux/macOS, the runtime library is optimized for the NeolyxOS kernel.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
            <li>NeolyxOS 2.0+ or compatible Linux distribution</li>
            <li>Rust toolchain (for building from source)</li>
            <li>LLVM 18+ development headers</li>
        </ul>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Building from Source</h2>
        <p className="text-gray-400">
          The primary distribution method is currently building from source via Cargo.
        </p>
        
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500"># Clone the repository</span>{"\n"}
              <span className="text-blue-400">$</span> git clone https://github.com/ketiveeai/reox{"\n"}
              <span className="text-blue-400">$</span> cd reox{"\n\n"}
              <span className="text-gray-500"># Build compiler</span>{"\n"}
              <span className="text-blue-400">$</span> cargo build --release{"\n\n"}
              <span className="text-gray-500"># Install to system path</span>{"\n"}
              <span className="text-blue-400">$</span> sudo cp target/release/reoxc /usr/bin/
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Package Manager</h2>
        <p className="text-gray-400">
          Reox comes with <code>reoxpm</code> for managing dependencies and project scaffolding.
        </p>

        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-blue-400">$</span> reoxpm new my-app{"\n"}
              <span className="text-blue-400">$</span> reoxpm build{"\n"}
              <span className="text-blue-400">$</span> reoxpm run
            </code>
          </pre>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <a href="/docs" className="text-primary hover:text-blue-400 font-medium">← Back to Introduction</a>
        <a href="/docs/quickstart" className="text-primary hover:text-blue-400 font-medium">Next: Quick Start →</a>
      </div>
    </div>
  );
}
