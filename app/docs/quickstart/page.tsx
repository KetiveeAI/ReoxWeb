export default function QuickStartDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Quick Start</h1>
        <p className="text-xl text-gray-400 mb-8">
          Write your first "Hello World" application in Reox.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">1. Initialize a Project</h2>
        <p className="text-gray-400">
          Create a new directory for your project and initialize it:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-blue-400">$</span> reoxpm new hello-reox{"\n"}
              <span className="text-blue-400">$</span> cd hello-reox
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">2. Hello World</h2>
        <p className="text-gray-400">
          The simplest Reox program looks like this. Open `main.reox`:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">main</span>() -{`>`} <span className="text-cyan-300">int</span> <span className="text-white">{`{`}</span>{"\n"}
              {"    "}<span className="text-cyan-300">println</span>(<span className="text-green-400">"Hello from Reox!"</span>);{"\n"}
              {"    "}<span className="text-purple-400">return</span> <span className="text-orange-400">0</span>;{"\n"}
              <span className="text-white">{`}`}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">3. Building a UI</h2>
        <p className="text-gray-400">
          A simple UI application using Reox's imperative syntax:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">main</span>() -{`>`} <span className="text-cyan-300">int</span> <span className="text-white">{`{`}</span>{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">app</span>: <span className="text-yellow-300">App</span> = <span className="text-yellow-300">app_new</span>(<span className="text-green-400">"Hello App"</span>);{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">win</span>: <span className="text-yellow-300">Window</span> = <span className="text-yellow-300">app_create_window</span>(app, <span className="text-green-400">"My App"</span>, <span className="text-orange-400">400</span>, <span className="text-orange-400">300</span>);{"\n\n"}
              {"    "}<span className="text-gray-500">// Create root view</span>{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">root</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">center</span>();{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">btn</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">button_view</span>(<span className="text-green-400">"Click Me"</span>);{"\n"}
              {"    "}<span className="text-yellow-300">view_add_child</span>(root, btn);{"\n\n"}
              {"    "}<span className="text-yellow-300">window_set_root</span>(win, root);{"\n"}
              {"    "}<span className="text-yellow-300">app_run</span>(app);{"\n"}
              {"    "}<span className="text-purple-400">return</span> <span className="text-orange-400">0</span>;{"\n"}
              <span className="text-white">{`}`}</span>
            </code>
          </pre>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <a href="/docs/installation" className="text-primary hover:text-blue-400 font-medium">← Back to Installation</a>
        <a href="/docs/syntax" className="text-primary hover:text-blue-400 font-medium">Next: Language Basics →</a>
      </div>
    </div>
  );
}
