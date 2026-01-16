export default function WidgetsApiDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Widgets</h1>
        <p className="text-xl text-gray-400 mb-8">
          Interactive controls and display elements for your UI.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Text</h2>
        <p className="text-gray-400">
          Create text labels and modify their appearance using setter functions.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">label</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">text_view</span>(<span className="text-green-400">"Hello World"</span>);{"\n"}
              <span className="text-yellow-300">text_set_font_size</span>(label, <span className="text-orange-400">24.0</span>);{"\n"}
              <span className="text-yellow-300">text_set_font_weight</span>(label, <span className="text-orange-400">700</span>);{"\n"}
              <span className="text-yellow-300">text_set_color</span>(label, <span className="text-yellow-300">color_white</span>());
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Button</h2>
        <p className="text-gray-400">
          Create buttons and attach event handlers.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">btn</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">button_view</span>(<span className="text-green-400">"Submit"</span>);{"\n"}
              <span className="text-yellow-300">button_set_style</span>(btn, <span className="text-yellow-300">color_primary</span>(), <span className="text-yellow-300">color_accent</span>(), <span className="text-yellow-300">color_error</span>());
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Inputs</h2>
        <p className="text-gray-400">
          Controls like sliders and toggles use explicit construct functions.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">tgl</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">toggle_view</span>(<span className="text-green-400">"Enable AI"</span>, <span className="text-orange-400">true</span>);{"\n\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">sld</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">slider_view</span>(<span className="text-orange-400">0.0</span>, <span className="text-orange-400">100.0</span>, <span className="text-orange-400">50.0</span>);
            </code>
          </pre>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <a href="/docs/api/layout" className="text-primary hover:text-blue-400 font-medium">← Back to Layout</a>
        <a href="/docs/api/events" className="text-primary hover:text-blue-400 font-medium">Next: Events →</a>
      </div>
    </div>
  );
}
