import Link from "next/link";

export default function UIConstructsDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-medium">
            NEW in v1.1
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6">UI Constructs</h1>
        <p className="text-xl text-gray-400 mb-8">
          Reox provides first-class language constructs for building native UIs on NeolyxOS.
          These compile directly to optimized C code with zero runtime overhead.
        </p>
      </div>

      {/* variant */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Variant (Tagged Unions)</h2>
        <p className="text-gray-400">
          <code>variant</code> declares a type-safe enumeration with optional associated data.
          Similar to Rust&apos;s <code>enum</code> with associated values.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">{"// Simple enumeration"}</span>{"\n"}
              <span className="text-purple-400">variant</span> <span className="text-yellow-300">Direction</span> {`{`}{"\n"}
              {"    "}Up,{"\n"}
              {"    "}Down,{"\n"}
              {"    "}Left,{"\n"}
              {"    "}Right{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">{"// With associated data (tagged union)"}</span>{"\n"}
              <span className="text-purple-400">variant</span> <span className="text-yellow-300">Shape</span> {`{`}{"\n"}
              {"    "}Circle(<span className="text-blue-300">radius</span>: <span className="text-cyan-300">float</span>),{"\n"}
              {"    "}Rect(<span className="text-blue-300">w</span>: <span className="text-cyan-300">int</span>, <span className="text-blue-300">h</span>: <span className="text-cyan-300">int</span>){"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">{"// Compiles to C tagged union:"}</span>{"\n"}
              <span className="text-gray-500">{"// typedef enum { SHAPE_CIRCLE, SHAPE_RECT } Shape_Tag;"}</span>{"\n"}
              <span className="text-gray-500">{"// struct Shape { Shape_Tag tag; union { ... } data; };"}</span>
            </code>
          </pre>
        </div>
      </section>

      {/* protocol */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Protocol (Interfaces)</h2>
        <p className="text-gray-400">
          <code>protocol</code> defines a contract of method signatures. Types conforming to a protocol
          must implement all required methods. Compiles to a vtable struct with function pointers.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">protocol</span> <span className="text-yellow-300">Renderable</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">fn</span> <span className="text-yellow-300">render</span>(<span className="text-blue-300">ctx</span>: <span className="text-cyan-300">int</span>);{"\n"}
              {"    "}<span className="text-purple-400">fn</span> <span className="text-yellow-300">size</span>() {"-> "}<span className="text-cyan-300">int</span>;{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">{"// Compiles to C vtable:"}</span>{"\n"}
              <span className="text-gray-500">{"// typedef struct Renderable_vtable {"}</span>{"\n"}
              <span className="text-gray-500">{"//     void (*render)(void* self, int64_t ctx);"}</span>{"\n"}
              <span className="text-gray-500">{"//     int64_t (*size)(void* self);"}</span>{"\n"}
              <span className="text-gray-500">{"// } Renderable_vtable;"}</span>
            </code>
          </pre>
        </div>
      </section>

      {/* extension */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Extension (Type Methods)</h2>
        <p className="text-gray-400">
          <code>extension</code> adds methods to an existing type without modifying its original definition.
          Methods are compiled as namespaced functions (e.g., <code>Color_brighten</code>).
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">struct</span> <span className="text-yellow-300">Color</span> {`{`} <span className="text-blue-300">r</span>: <span className="text-cyan-300">int</span>, <span className="text-blue-300">g</span>: <span className="text-cyan-300">int</span>, <span className="text-blue-300">b</span>: <span className="text-cyan-300">int</span> {`}`}{"\n\n"}
              <span className="text-purple-400">extension</span> <span className="text-yellow-300">Color</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">fn</span> <span className="text-yellow-300">brighten</span>(<span className="text-blue-300">amount</span>: <span className="text-cyan-300">int</span>) {"-> "}<span className="text-cyan-300">int</span> {`{`}{"\n"}
              {"        "}<span className="text-purple-400">return</span> amount * <span className="text-orange-400">2</span>;{"\n"}
              {"    "}{`}`}{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">{"// Call as: Color_brighten(10)"}</span>
            </code>
          </pre>
        </div>
      </section>

      {/* layer */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Layer (View Components)</h2>
        <p className="text-gray-400">
          <code>layer</code> is the primary building block for UI. A layer can declare fields, signals,
          methods, and gesture handlers. It compiles to a C struct with callback slots and namespaced functions.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">layer</span> <span className="text-yellow-300">Button</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">signal</span> <span className="text-blue-300">on_click</span>;{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">label</span>: <span className="text-cyan-300">string</span> = <span className="text-green-400">{'"Click"'}</span>;{"\n\n"}
              {"    "}<span className="text-gray-500">{"// Gesture handlers"}</span>{"\n"}
              {"    "}<span className="text-purple-400">on_tap</span> {`{`}{"\n"}
              {"        "}<span className="text-purple-400">emit</span> <span className="text-blue-300">on_click</span>();{"\n"}
              {"    "}{`}`}{"\n\n"}
              {"    "}<span className="text-purple-400">on_swipe</span>(<span className="text-blue-300">direction</span>: <span className="text-cyan-300">int</span>) {`{`}{"\n"}
              {"        "}<span className="text-cyan-300">print</span>(<span className="text-green-400">{'"Swiped"'}</span>);{"\n"}
              {"    "}{`}`}{"\n\n"}
              {"    "}<span className="text-purple-400">fn</span> <span className="text-yellow-300">body</span>() {`{`}{"\n"}
              {"        "}<span className="text-purple-400">let</span> <span className="text-blue-300">width</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">800</span>;{"\n"}
              {"    "}{`}`}{"\n"}
              {`}`}
            </code>
          </pre>
        </div>

        <div className="glass p-4 rounded-lg border border-green-500/30 bg-green-500/10">
          <p className="text-green-300 text-sm">
            <strong>Gesture Handlers:</strong> Layers support <code>on_tap</code>, <code>on_pan</code>,{" "}
            <code>on_swipe</code>, <code>on_pinch</code>, and <code>on_rotate</code>. Each generates a
            static C callback function (e.g., <code>Button_on_tap(void* ctx)</code>).
          </p>
        </div>
      </section>

      {/* panel */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Panel (Top-Level Windows)</h2>
        <p className="text-gray-400">
          <code>panel</code> represents a top-level application window. It can set properties like title
          and size, and contains a <code>root()</code> method that defines the window content.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">panel</span> <span className="text-yellow-300">MainWindow</span> {`{`}{"\n"}
              {"    "}title: <span className="text-green-400">{'"My App"'}</span>,{"\n"}
              {"    "}size: (<span className="text-orange-400">800</span>, <span className="text-orange-400">600</span>),{"\n\n"}
              {"    "}<span className="text-purple-400">fn</span> <span className="text-yellow-300">root</span>() {`{`}{"\n"}
              {"        "}<span className="text-purple-400">let</span> <span className="text-blue-300">title</span>: <span className="text-cyan-300">string</span> = <span className="text-green-400">{'"REOX App"'}</span>;{"\n"}
              {"    "}{`}`}{"\n"}
              {`}`}
            </code>
          </pre>
        </div>
      </section>

      {/* const + typealias */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Constants &amp; Type Aliases</h2>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">{"// Compile-time constants"}</span>{"\n"}
              <span className="text-purple-400">const</span> <span className="text-blue-300">MAX_WIDTH</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">800</span>;{"\n"}
              <span className="text-purple-400">const</span> <span className="text-blue-300">MAX_HEIGHT</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">600</span>;{"\n\n"}
              <span className="text-gray-500">{"// Type aliases"}</span>{"\n"}
              <span className="text-purple-400">typealias</span> <span className="text-yellow-300">Dimension</span> = <span className="text-cyan-300">int</span>;{"\n"}
              <span className="text-purple-400">typealias</span> <span className="text-yellow-300">Callback</span> = (<span className="text-cyan-300">int</span>) {"-> "}<span className="text-cyan-300">void</span>;{"\n\n"}
              <span className="text-gray-500">{"// Use the alias like the original type"}</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">width</span>: <span className="text-yellow-300">Dimension</span> = MAX_WIDTH;{"\n\n"}
              <span className="text-gray-500">{"// Compiles to C:"}</span>{"\n"}
              <span className="text-gray-500">{"// static const int64_t MAX_WIDTH = 800;"}</span>{"\n"}
              <span className="text-gray-500">{"// typedef int64_t Dimension;"}</span>
            </code>
          </pre>
        </div>
      </section>

      {/* Compilation */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Compilation Overview</h2>
        <p className="text-gray-400">
          Every UI construct compiles to efficient, debuggable C. No virtual machine, no garbage collector.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Reox Construct</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2"><code className="bg-white/10 px-2 py-0.5 rounded">variant</code> <span className="text-gray-500">→</span></li>
              <li className="flex items-center gap-2"><code className="bg-white/10 px-2 py-0.5 rounded">protocol</code> <span className="text-gray-500">→</span></li>
              <li className="flex items-center gap-2"><code className="bg-white/10 px-2 py-0.5 rounded">extension</code> <span className="text-gray-500">→</span></li>
              <li className="flex items-center gap-2"><code className="bg-white/10 px-2 py-0.5 rounded">layer</code> <span className="text-gray-500">→</span></li>
              <li className="flex items-center gap-2"><code className="bg-white/10 px-2 py-0.5 rounded">const</code> <span className="text-gray-500">→</span></li>
              <li className="flex items-center gap-2"><code className="bg-white/10 px-2 py-0.5 rounded">typealias</code> <span className="text-gray-500">→</span></li>
            </ul>
          </div>
          <div className="glass p-4 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-3 text-green-300">C Output</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>C enum + tagged union struct</li>
              <li>vtable struct (function pointers)</li>
              <li>Namespaced standalone functions</li>
              <li>Struct + signal slots + gesture callbacks</li>
              <li><code className="bg-white/10 px-2 py-0.5 rounded">static const</code></li>
              <li><code className="bg-white/10 px-2 py-0.5 rounded">typedef</code></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <Link href="/docs/syntax" className="text-primary hover:text-blue-400 font-medium">← Syntax Basics</Link>
        <Link href="/docs/control-flow" className="text-primary hover:text-blue-400 font-medium">Control Flow →</Link>
      </div>
    </div>
  );
}
