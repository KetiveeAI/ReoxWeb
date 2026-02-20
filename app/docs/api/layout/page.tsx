export default function LayoutApiDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Layout System</h1>
        <p className="text-xl text-gray-400 mb-8">
          Reox provides a flexible, declarative layout system with stacks, grids, and containers for building responsive UIs.
        </p>
      </div>

      {/* Stack Layouts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Stack Layouts</h2>
        <p className="text-gray-400">
          Linear layouts using <code className="text-blue-300">vstack</code>, <code className="text-blue-300">hstack</code>, and <code className="text-blue-300">zstack</code>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-green-400 mb-2">VStack</h3>
            <p className="text-sm text-gray-400">Vertical stack - items arranged top to bottom</p>
            <code className="text-xs text-purple-300 block mt-2">vstack(gap: float) → View</code>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-blue-400 mb-2">HStack</h3>
            <p className="text-sm text-gray-400">Horizontal stack - items arranged left to right</p>
            <code className="text-xs text-purple-300 block mt-2">hstack(gap: float) → View</code>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-pink-400 mb-2">ZStack</h3>
            <p className="text-sm text-gray-400">Overlay stack - items layered on top of each other</p>
            <code className="text-xs text-purple-300 block mt-2">zstack() → View</code>
          </div>
        </div>

        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Vertical stack with 16px gap</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">column</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">vstack</span>(<span className="text-orange-400">16.0</span>);{"\n"}
              <span className="text-yellow-300">view_add_child</span>(column, <span className="text-yellow-300">text_view</span>(<span className="text-green-400">"Title"</span>));{"\n"}
              <span className="text-yellow-300">view_add_child</span>(column, <span className="text-yellow-300">text_view</span>(<span className="text-green-400">"Subtitle"</span>));{"\n\n"}
              <span className="text-gray-500">// Horizontal row with 8px gap</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">row</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">hstack</span>(<span className="text-orange-400">8.0</span>);{"\n"}
              <span className="text-yellow-300">view_add_child</span>(row, <span className="text-yellow-300">button_primary</span>(<span className="text-green-400">"Save"</span>));{"\n"}
              <span className="text-yellow-300">view_add_child</span>(row, <span className="text-yellow-300">button_secondary</span>(<span className="text-green-400">"Cancel"</span>));{"\n\n"}
              <span className="text-gray-500">// Overlay (e.g., badge on avatar)</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">overlay</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">zstack</span>();{"\n"}
              <span className="text-yellow-300">view_add_child</span>(overlay, <span className="text-yellow-300">avatar_view</span>(<span className="text-green-400">"user.png"</span>));{"\n"}
              <span className="text-yellow-300">view_add_child</span>(overlay, <span className="text-yellow-300">badge_view</span>(<span className="text-green-400">"3"</span>));
            </code>
          </pre>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Grid Layout</h2>
        <p className="text-gray-400">
          Create grid-based layouts with a fixed number of columns.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// 3-column grid with 12px gap</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">grid</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">grid_view</span>(<span className="text-orange-400">3</span>, <span className="text-orange-400">12.0</span>);{"\n\n"}
              <span className="text-gray-500">// Add items - they wrap automatically</span>{"\n"}
              <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">9</span> {"{"}{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">card</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">vstack</span>(<span className="text-orange-400">8.0</span>);{"\n"}
              {"    "}<span className="text-yellow-300">view_set_background</span>(card, <span className="text-yellow-300">color_surface</span>());{"\n"}
              {"    "}<span className="text-yellow-300">view_set_corner_radius</span>(card, <span className="text-orange-400">12.0</span>);{"\n"}
              {"    "}<span className="text-yellow-300">view_add_child</span>(grid, card);{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* Flex & Scroll */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Flex & Scroll Containers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-cyan-400 mb-2">flex_view()</h3>
            <p className="text-sm text-gray-400 mb-2">Flexbox-style container for complex layouts</p>
            <code className="text-xs text-purple-300">view_set_flex(v, grow, shrink)</code>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-yellow-400 mb-2">scroll_view()</h3>
            <p className="text-sm text-gray-400 mb-2">Scrollable container for overflow content</p>
            <code className="text-xs text-purple-300">scroll_view() → View</code>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-orange-400 mb-2">list_view()</h3>
            <p className="text-sm text-gray-400 mb-2">Virtualized list for large data sets</p>
            <code className="text-xs text-purple-300">list_view() → View</code>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-indigo-400 mb-2">center()</h3>
            <p className="text-sm text-gray-400 mb-2">Centers its child view</p>
            <code className="text-xs text-purple-300">center() → View</code>
          </div>
        </div>
      </section>

      {/* Spacing Helpers */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Spacing Helpers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-green-400 mb-2">spacer()</h3>
            <p className="text-sm text-gray-400">Expands to fill available space (like CSS flex: 1)</p>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-gray-400 mb-2">divider()</h3>
            <p className="text-sm text-gray-400">Horizontal line separator</p>
          </div>
        </div>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Header with spacer pushes button to right</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">header</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">hstack</span>(<span className="text-orange-400">0.0</span>);{"\n"}
              <span className="text-yellow-300">view_add_child</span>(header, <span className="text-yellow-300">text_view</span>(<span className="text-green-400">"Title"</span>));{"\n"}
              <span className="text-yellow-300">view_add_child</span>(header, <span className="text-yellow-300">spacer</span>()); <span className="text-gray-500">// fills middle</span>{"\n"}
              <span className="text-yellow-300">view_add_child</span>(header, <span className="text-yellow-300">button_icon</span>(<span className="text-green-400">"menu"</span>));
            </code>
          </pre>
        </div>
      </section>

      {/* Padding & Margins */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Padding & Margins</h2>
        <p className="text-gray-400">
          Use <code className="text-blue-300">EdgeInsets</code> to control spacing around views.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// EdgeInsets constructors</span>{"\n"}
              <span className="text-yellow-300">insets_all</span>(<span className="text-orange-400">20.0</span>);              <span className="text-gray-500">// All sides equal</span>{"\n"}
              <span className="text-yellow-300">insets_symmetric</span>(<span className="text-orange-400">16.0</span>, <span className="text-orange-400">24.0</span>);  <span className="text-gray-500">// Vertical, Horizontal</span>{"\n"}
              <span className="text-yellow-300">insets</span>(<span className="text-orange-400">10.0</span>, <span className="text-orange-400">20.0</span>, <span className="text-orange-400">10.0</span>, <span className="text-orange-400">20.0</span>); <span className="text-gray-500">// Top, Right, Bottom, Left</span>{"\n\n"}
              <span className="text-gray-500">// Apply to view</span>{"\n"}
              <span className="text-yellow-300">view_set_padding</span>(card, <span className="text-yellow-300">insets_all</span>(<span className="text-orange-400">16.0</span>));{"\n"}
              <span className="text-yellow-300">view_set_margin</span>(card, <span className="text-yellow-300">insets_symmetric</span>(<span className="text-orange-400">8.0</span>, <span className="text-orange-400">0.0</span>));
            </code>
          </pre>
        </div>
      </section>

      {/* Size Modifiers */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Size Modifiers</h2>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-yellow-300">view_set_size</span>(v, <span className="text-orange-400">200.0</span>, <span className="text-orange-400">100.0</span>);    <span className="text-gray-500">// Fixed width & height</span>{"\n"}
              <span className="text-yellow-300">view_set_width</span>(v, <span className="text-orange-400">300.0</span>);           <span className="text-gray-500">// Width only</span>{"\n"}
              <span className="text-yellow-300">view_set_height</span>(v, <span className="text-orange-400">50.0</span>);           <span className="text-gray-500">// Height only</span>{"\n"}
              <span className="text-yellow-300">view_set_min_size</span>(v, <span className="text-orange-400">100.0</span>, <span className="text-orange-400">40.0</span>);  <span className="text-gray-500">// Minimum constraints</span>{"\n"}
              <span className="text-yellow-300">view_set_max_size</span>(v, <span className="text-orange-400">500.0</span>, <span className="text-orange-400">300.0</span>); <span className="text-gray-500">// Maximum constraints</span>{"\n"}
              <span className="text-yellow-300">view_set_flex</span>(v, <span className="text-orange-400">1.0</span>, <span className="text-orange-400">0.0</span>);        <span className="text-gray-500">// Flex grow, shrink</span>
            </code>
          </pre>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <a href="/docs/api/widgets" className="text-primary hover:text-blue-400 font-medium">← Widgets</a>
        <a href="/docs/api/events" className="text-primary hover:text-blue-400 font-medium">Events & Actions →</a>
      </div>
    </div>
  );
}
