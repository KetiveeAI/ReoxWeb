import Link from "next/link";

export default function QuickStartDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Quick Start</h1>
        <p className="text-xl text-gray-400 mb-8">
          Create your first NeolyxOS application in minutes.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">1. Create a New Project</h2>
        <p className="text-gray-400">
          Use the Reox compiler to scaffold a new NeolyxOS application:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500"># Create a new NeolyxOS app</span>{"\n"}
              <span className="text-blue-400">$</span> reoxc new MyApp{"\n\n"}
              <span className="text-gray-500"># Or with a specific template</span>{"\n"}
              <span className="text-blue-400">$</span> reoxc new MyApp --template neolyx-app{"\n"}
              <span className="text-blue-400">$</span> reoxc new MyCLI --template cli{"\n"}
              <span className="text-blue-400">$</span> reoxc new MyLib --template library{"\n\n"}
              <span className="text-gray-500"># Navigate to your project</span>{"\n"}
              <span className="text-blue-400">$</span> cd MyApp.app
            </code>
          </pre>
        </div>

        <div className="glass p-4 rounded-lg border border-blue-500/30 bg-blue-500/10">
          <p className="text-blue-300 text-sm">
            <strong>Project Templates:</strong>{" "}
            <code>neolyx-app</code> creates a full NeolyxOS GUI application with NXRender integration.{" "}
            <code>cli</code> creates a command-line tool.{" "}
            <code>library</code> creates a reusable Reox library.
          </p>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">2. Project Structure</h2>
        <p className="text-gray-400">
          A NeolyxOS app follows this standard structure:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              MyApp.app/{"\n"}
              ├── main.rx          <span className="text-gray-500"># Entry point</span>{"\n"}
              ├── Makefile         <span className="text-gray-500"># Build configuration</span>{"\n"}
              ├── manifest.npa     <span className="text-gray-500"># App manifest (permissions, metadata)</span>{"\n"}
              ├── README.md{"\n"}
              ├── bin/             <span className="text-gray-500"># Compiled binaries</span>{"\n"}
              ├── resources/{"\n"}
              │   ├── myapp.nxi    <span className="text-gray-500"># App icon</span>{"\n"}
              │   └── themes/      <span className="text-gray-500"># Light/dark themes</span>{"\n"}
              └── src/ui/          <span className="text-gray-500"># UI components</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">3. Hello World (Console)</h2>
        <p className="text-gray-400">
          The simplest Reox program:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// hello.rx</span>{"\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">main</span>() {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">println</span>(<span className="text-green-400">"Hello from Reox!"</span>);{"\n"}
              {`}`}
            </code>
          </pre>
        </div>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500"># Run directly (interpreter mode)</span>{"\n"}
              <span className="text-blue-400">$</span> reoxc hello.rx --run{"\n\n"}
              <span className="text-gray-500"># Or compile to executable</span>{"\n"}
              <span className="text-blue-400">$</span> reoxc hello.rx --emit exe -o hello{"\n"}
              <span className="text-blue-400">$</span> ./hello
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">4. Hello World (GUI)</h2>
        <p className="text-gray-400">
          A simple GUI application with a window and button:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// main.rx</span>{"\n"}
              <span className="text-purple-400">import</span> prelude;{"\n"}
              <span className="text-purple-400">import</span> transition;{"\n\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">main</span>() {`{`}{"\n"}
              {"    "}<span className="text-gray-500">// Create application</span>{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">app</span> = <span className="text-yellow-300">app_new</span>(<span className="text-green-400">"My App"</span>);{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">window</span> = <span className="text-yellow-300">app_create_window</span>(app, <span className="text-green-400">"Hello"</span>, <span className="text-orange-400">400</span>, <span className="text-orange-400">300</span>);{"\n\n"}
              {"    "}<span className="text-gray-500">// Build UI</span>{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">root</span> = <span className="text-yellow-300">center</span>();{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">btn</span> = <span className="text-yellow-300">button_primary</span>(<span className="text-green-400">"Click Me!"</span>);{"\n"}
              {"    "}<span className="text-yellow-300">view_add_child</span>(root, btn);{"\n\n"}
              {"    "}<span className="text-gray-500">// Animate entrance</span>{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">t</span> = <span className="text-yellow-300">transition_ease_out</span>(<span className="text-orange-400">300</span>);{"\n"}
              {"    "}<span className="text-yellow-300">view_fade_in</span>(root, t);{"\n\n"}
              {"    "}<span className="text-gray-500">// Run</span>{"\n"}
              {"    "}<span className="text-yellow-300">window_set_root</span>(window, root);{"\n"}
              {"    "}<span className="text-yellow-300">app_run</span>(app);{"\n"}
              {`}`}
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">5. Build & Run</h2>
        <p className="text-gray-400">
          Use the Makefile to build and run your app:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500"># Build (development mode)</span>{"\n"}
              <span className="text-blue-400">$</span> make dev{"\n\n"}
              <span className="text-gray-500"># Build (release with optimizations)</span>{"\n"}
              <span className="text-blue-400">$</span> make release{"\n\n"}
              <span className="text-gray-500"># Run</span>{"\n"}
              <span className="text-blue-400">$</span> make run{"\n\n"}
              <span className="text-gray-500"># Package for distribution</span>{"\n"}
              <span className="text-blue-400">$</span> make package  <span className="text-gray-500"># Creates MyApp.nxpkg</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Compiler Options</h2>
        <p className="text-gray-400">
          Common <code>reoxc</code> options:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-gray-300">Option</th>
                <th className="text-left py-2 px-3 text-gray-300">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              <tr className="border-b border-white/5">
                <td className="py-2 px-3"><code>--emit c|obj|exe</code></td>
                <td className="py-2 px-3">Output type (C code, object file, executable)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3"><code>-o &lt;path&gt;</code></td>
                <td className="py-2 px-3">Output file path</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3"><code>-O0 / -O2 / -O3</code></td>
                <td className="py-2 px-3">Optimization level (0=none, 2=standard, 3=aggressive)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3"><code>--lto</code></td>
                <td className="py-2 px-3">Enable Link-Time Optimization</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3"><code>--run / -r</code></td>
                <td className="py-2 px-3">Run immediately (interpreter mode)</td>
              </tr>
              <tr>
                <td className="py-2 px-3"><code>--strip</code></td>
                <td className="py-2 px-3">Strip symbols for smaller binaries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <Link href="/docs/installation" className="text-primary hover:text-blue-400 font-medium">← Back to Installation</Link>
        <Link href="/docs/syntax" className="text-primary hover:text-blue-400 font-medium">Next: Language Basics →</Link>
      </div>
    </div>
  );
}
