import Link from "next/link";

export default function StdlibDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Standard Library</h1>
        <p className="text-xl text-gray-400 mb-8">
          Built-in modules available in Reox for NeolyxOS development.
        </p>
      </div>

      {/* Available Modules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Available Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="glass p-4 rounded-lg border border-white/10 hover:border-primary/40 transition-colors">
            <h3 className="font-bold text-primary mb-2">prelude</h3>
            <p className="text-sm text-gray-400">Core functions, types, colors, and UI widgets.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10 hover:border-primary/40 transition-colors">
            <h3 className="font-bold text-primary mb-2">nxrender</h3>
            <p className="text-sm text-gray-400">Low-level NeolyxOS graphics and window API.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10 hover:border-primary/40 transition-colors">
            <h3 className="font-bold text-primary mb-2">transition</h3>
            <p className="text-sm text-gray-400">Animations, transitions, and motion effects.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10 hover:border-primary/40 transition-colors">
            <h3 className="font-bold text-primary mb-2">network</h3>
            <p className="text-sm text-gray-400">HTTP, TCP, UDP, and DNS networking.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10 hover:border-primary/40 transition-colors">
            <h3 className="font-bold text-primary mb-2">system</h3>
            <p className="text-sm text-gray-400">File I/O, process control, and environment.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10 hover:border-primary/40 transition-colors">
            <h3 className="font-bold text-primary mb-2">gesture</h3>
            <p className="text-sm text-gray-400">Touch and gesture recognition.</p>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Core Functions (prelude)</h2>
        <p className="text-gray-400">
          Automatically imported in every Reox program.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-primary mb-2">print(text) / println(text)</h3>
            <p className="text-sm text-gray-400">Output text to console.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-primary mb-2">len(collection)</h3>
            <p className="text-sm text-gray-400">Get length of array or string.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-primary mb-2">push(array, item) / pop(array)</h3>
            <p className="text-sm text-gray-400">Add/remove items from arrays.</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-primary mb-2">map_new() / map_get() / map_set()</h3>
            <p className="text-sm text-gray-400">Key-value hashmap operations.</p>
          </div>
        </div>
      </section>

      {/* Transition Module */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Transition Module</h2>
        <p className="text-gray-400">
          Animation and transition effects for UI.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">import</span> transition;{"\n\n"}
              <span className="text-gray-500">// Create a transition</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">t</span> = <span className="text-yellow-300">transition_ease_out</span>(<span className="text-orange-400">300</span>);  <span className="text-gray-500">// 300ms ease-out</span>{"\n\n"}
              <span className="text-gray-500">// Animate view properties</span>{"\n"}
              <span className="text-yellow-300">view_animate_opacity</span>(button, <span className="text-orange-400">1.0</span>, t);{"\n"}
              <span className="text-yellow-300">view_animate_scale</span>(card, <span className="text-orange-400">1.1</span>, t);{"\n"}
              <span className="text-yellow-300">view_fade_in</span>(panel, t);{"\n"}
              <span className="text-yellow-300">view_slide_in</span>(menu, <span className="text-orange-400">0</span>, t);  <span className="text-gray-500">// 0=left, 1=right, 2=top, 3=bottom</span>{"\n\n"}
              <span className="text-gray-500">// Preset animations</span>{"\n"}
              <span className="text-yellow-300">preset_pulse</span>(icon, <span className="text-orange-400">500</span>);{"\n"}
              <span className="text-yellow-300">preset_shake</span>(error_label, <span className="text-orange-400">0.5</span>);{"\n"}
              <span className="text-yellow-300">preset_bounce</span>(success_badge);
            </code>
          </pre>
        </div>

        <h3 className="text-lg font-semibold text-gray-300 pt-2">Transition Types</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <code className="glass p-2 text-sm text-center">transition_linear()</code>
          <code className="glass p-2 text-sm text-center">transition_ease()</code>
          <code className="glass p-2 text-sm text-center">transition_ease_in()</code>
          <code className="glass p-2 text-sm text-center">transition_ease_out()</code>
          <code className="glass p-2 text-sm text-center">transition_spring()</code>
          <code className="glass p-2 text-sm text-center">transition_bounce()</code>
          <code className="glass p-2 text-sm text-center">transition_elastic()</code>
          <code className="glass p-2 text-sm text-center">transition_cubic_bezier()</code>
        </div>
      </section>

      {/* NXRender Module */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">NXRender Module</h2>
        <p className="text-gray-400">
          Direct access to NeolyxOS native rendering engine.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">import</span> nxrender;{"\n\n"}
              <span className="text-gray-500">// Create window</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">win</span> = <span className="text-yellow-300">nx_window_create</span>(<span className="text-green-400">"My App"</span>, <span className="text-orange-400">100</span>, <span className="text-orange-400">100</span>, <span className="text-orange-400">800</span>, <span className="text-orange-400">600</span>);{"\n"}
              <span className="text-yellow-300">nx_window_center</span>(win);{"\n\n"}
              <span className="text-gray-500">// Create widgets</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">btn</span> = <span className="text-yellow-300">nx_button_create</span>(<span className="text-green-400">"Click Me"</span>);{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">label</span> = <span className="text-yellow-300">nx_label_create</span>(<span className="text-green-400">"Hello World"</span>);{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">field</span> = <span className="text-yellow-300">nx_textfield_create</span>(<span className="text-green-400">"Enter text..."</span>);{"\n\n"}
              <span className="text-gray-500">// Build widget tree</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">container</span> = <span className="text-yellow-300">nx_vstack_create</span>(<span className="text-orange-400">12</span>);{"\n"}
              <span className="text-yellow-300">nx_widget_add_child</span>(container, label);{"\n"}
              <span className="text-yellow-300">nx_widget_add_child</span>(container, field);{"\n"}
              <span className="text-yellow-300">nx_widget_add_child</span>(container, btn);{"\n\n"}
              <span className="text-gray-500">// Set root and run</span>{"\n"}
              <span className="text-yellow-300">nx_window_set_root</span>(win, container);{"\n"}
              <span className="text-yellow-300">nx_window_show</span>(win);{"\n"}
              <span className="text-yellow-300">nx_event_loop_run</span>();
            </code>
          </pre>
        </div>
      </section>

      {/* UI Module */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">UI Module (prelude)</h2>
        <p className="text-gray-400">
          High-level UI components from prelude for building applications.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
          <li><strong>App</strong> - Application lifecycle management</li>
          <li><strong>Window</strong> - Top-level window containers</li>
          <li><strong>View</strong> - Layout containers (hstack, vstack, zstack, grid)</li>
          <li><strong>Controls</strong> - Button, Slider, TextField, Toggle, Checkbox</li>
          <li><strong>Forms</strong> - Form fields, pickers, date/time selectors</li>
          <li><strong>Colors</strong> - Theme-aware system colors</li>
          <li><strong>State</strong> - Reactive state management with auto-update</li>
        </ul>
      </section>

      {/* System Module */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">System Module</h2>
        <p className="text-gray-400">
          File I/O, process control, and environment access.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">import</span> system;{"\n\n"}
              <span className="text-gray-500">// File operations</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">content</span> = <span className="text-yellow-300">file_read</span>(<span className="text-green-400">"config.json"</span>);{"\n"}
              <span className="text-yellow-300">file_write</span>(<span className="text-green-400">"log.txt"</span>, <span className="text-green-400">"Application started"</span>);{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">exists</span> = <span className="text-yellow-300">file_exists</span>(<span className="text-green-400">"data.db"</span>);{"\n\n"}
              <span className="text-gray-500">// Environment</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">home</span> = <span className="text-yellow-300">env_get</span>(<span className="text-green-400">"HOME"</span>);{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">args</span> = <span className="text-yellow-300">sys_args</span>();{"\n\n"}
              <span className="text-gray-500">// Process control</span>{"\n"}
              <span className="text-yellow-300">sys_exit</span>(<span className="text-orange-400">0</span>);
            </code>
          </pre>
        </div>
      </section>

      {/* Network Module */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Network Module</h2>
        <p className="text-gray-400">
          HTTP requests and networking.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">import</span> network;{"\n\n"}
              <span className="text-gray-500">// HTTP GET request</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">response</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">http_get</span>(<span className="text-green-400">"https://api.example.com/data"</span>);{"\n\n"}
              <span className="text-gray-500">// HTTP POST with JSON body</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">result</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">http_post</span>(<span className="text-green-400">"https://api.example.com/submit"</span>, body);{"\n\n"}
              <span className="text-gray-500">// DNS lookup</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">ip</span> = <span className="text-yellow-300">dns_resolve</span>(<span className="text-green-400">"example.com"</span>);
            </code>
          </pre>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <Link href="/docs/syntax" className="text-primary hover:text-blue-400 font-medium">← Back to Syntax</Link>
        <Link href="/docs/ai" className="text-primary hover:text-blue-400 font-medium">Next: AI Features →</Link>
      </div>
    </div>
  );
}
