export default function LayoutApiDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Layout System</h1>
        <p className="text-xl text-gray-400 mb-8">
          Reox provides a flexible, declarative layout system based on stacks and containers.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Window</h2>
        <p className="text-gray-400">
          The top-level container for your application, created via the App instance.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">app</span>: <span className="text-yellow-300">App</span> = <span className="text-yellow-300">app_new</span>(<span className="text-green-400">"My Application"</span>);{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">window</span>: <span className="text-yellow-300">Window</span> = <span className="text-yellow-300">app_create_window</span>(app, <span className="text-green-400">"Main Window"</span>, <span className="text-orange-400">800</span>, <span className="text-orange-400">600</span>);{"\n\n"}
              <span className="text-gray-500">// Set the root view</span>{"\n"}
              <span className="text-yellow-300">window_set_root</span>(window, root_view);
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Stacks</h2>
        <p className="text-gray-400">
          Create linear layouts using <code>vstack</code> and <code>hstack</code> functions, then add children imperatively.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">stack</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">vstack</span>(<span className="text-orange-400">16.0</span>); <span className="text-gray-500">// 16.0 gap</span>{"\n\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">title</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">text_view</span>(<span className="text-green-400">"Hello"</span>);{"\n"}
              <span className="text-yellow-300">view_add_child</span>(stack, title);{"\n\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">subtitle</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">text_view</span>(<span className="text-green-400">"World"</span>);{"\n"}
              <span className="text-yellow-300">view_add_child</span>(stack, subtitle);
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Padding & Spacing</h2>
        <p className="text-gray-400">
          Use view modifiers to adjust layout properties like padding and background.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">container</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">vstack</span>(<span className="text-orange-400">0.0</span>);{"\n"}
              <span className="text-yellow-300">view_set_padding</span>(container, <span className="text-yellow-300">insets_all</span>(<span className="text-orange-400">20.0</span>));{"\n"}
              <span className="text-yellow-300">view_set_background</span>(container, <span className="text-yellow-300">color_white</span>());
            </code>
          </pre>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <a href="/docs/components" className="text-primary hover:text-blue-400 font-medium">← Back to Components</a>
        <a href="/docs/api/widgets" className="text-primary hover:text-blue-400 font-medium">Next: Widgets →</a>
      </div>
    </div>
  );
}
