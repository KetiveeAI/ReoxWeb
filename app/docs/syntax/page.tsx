import Link from "next/link";

export default function SyntaxDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Syntax Basics</h1>
        <p className="text-xl text-gray-400 mb-8">
          A comprehensive guide to the core language features of Reox.
        </p>
      </div>

      {/* Immutable vs Mutable - Enhanced */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Variables: Immutable vs Mutable</h2>
        <p className="text-gray-400">
          Reox is designed with safety in mind. Variables are <strong>immutable by default</strong>,
          meaning once assigned, they cannot be changed. Use <code>let mut</code> to create mutable variables.
        </p>

        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n"}
              <span className="text-gray-500">// IMMUTABLE VARIABLES (Default)</span>{"\n"}
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">x</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">42</span>;{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">name</span>: <span className="text-cyan-300">string</span> = <span className="text-green-400">"Reox"</span>;{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">pi</span>: <span className="text-cyan-300">float</span> = <span className="text-orange-400">3.14159</span>;{"\n\n"}
              <span className="text-gray-500">// x = 10;  // ❌ ERROR: Cannot assign to immutable variable</span>{"\n"}
              <span className="text-gray-500">// name = "New";  // ❌ ERROR: Variable is immutable</span>{"\n\n"}
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n"}
              <span className="text-gray-500">// MUTABLE VARIABLES (Explicit)</span>{"\n"}
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">counter</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">0</span>;{"\n"}
              counter = <span className="text-orange-400">10</span>;       <span className="text-gray-500">// ✓ OK - counter is mutable</span>{"\n"}
              counter += <span className="text-orange-400">5</span>;       <span className="text-gray-500">// ✓ OK - compound assignment</span>{"\n"}
              counter++;          <span className="text-gray-500">// ✓ OK - increment</span>{"\n\n"}
              <span className="text-gray-500">// Mutable collections</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">items</span> = [<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>];{"\n"}
              items = <span className="text-cyan-300">push</span>(items, <span className="text-orange-400">4</span>);  <span className="text-gray-500">// [1, 2, 3, 4]</span>{"\n\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">config</span> = <span className="text-cyan-300">map_new</span>();{"\n"}
              config = <span className="text-cyan-300">map_set</span>(config, <span className="text-green-400">"debug"</span>, <span className="text-orange-400">true</span>);
            </code>
          </pre>
        </div>

        <div className="glass p-4 rounded-lg border border-blue-500/30 bg-blue-500/10">
          <p className="text-blue-300 text-sm">
            <strong>Why immutable by default?</strong> Immutability prevents accidental changes, makes
            code easier to reason about, and enables safe concurrent programming. Only mark variables as <code>mut</code> when you need to modify them.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-300 pt-4">Shadowing vs Mutation</h3>
        <p className="text-gray-400">
          You can "shadow" an immutable variable by re-declaring it with the same name:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">value</span> = <span className="text-orange-400">10</span>;{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">value</span> = value * <span className="text-orange-400">2</span>;  <span className="text-gray-500">// Shadowing - creates new binding (20)</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">value</span> = <span className="text-cyan-300">to_string</span>(value);  <span className="text-gray-500">// Can even change type</span>{"\n\n"}
              <span className="text-gray-500">// vs Mutation (requires mut)</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">count</span> = <span className="text-orange-400">10</span>;{"\n"}
              count = count * <span className="text-orange-400">2</span>;  <span className="text-gray-500">// Mutation - same binding, new value</span>
            </code>
          </pre>
        </div>
      </section>

      {/* Types */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Primitive Types</h2>
        <p className="text-gray-400">
          Reox has statically typed primitives with type inference.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">count</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">42</span>;           <span className="text-gray-500">// Integer</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">price</span>: <span className="text-cyan-300">float</span> = <span className="text-orange-400">19.99</span>;       <span className="text-gray-500">// Float</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">name</span>: <span className="text-cyan-300">string</span> = <span className="text-green-400">"NeolyxOS"</span>;   <span className="text-gray-500">// String</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">active</span>: <span className="text-cyan-300">bool</span> = <span className="text-orange-400">true</span>;         <span className="text-gray-500">// Boolean</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">nothing</span> = <span className="text-purple-400">nil</span>;               <span className="text-gray-500">// Nil (null)</span>{"\n\n"}
              <span className="text-gray-500">// Type inference</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">inferred</span> = <span className="text-orange-400">100</span>;             <span className="text-gray-500">// Inferred as int</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">text</span> = <span className="text-green-400">"Hello"</span>;            <span className="text-gray-500">// Inferred as string</span>
            </code>
          </pre>
        </div>
      </section>

      {/* Compound Assignments */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Compound Assignments & Operators</h2>
        <p className="text-gray-400">
          Shorthand operators for modifying mutable variables.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">x</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">10</span>;{"\n\n"}
              <span className="text-gray-500">// Arithmetic compound operators</span>{"\n"}
              x += <span className="text-orange-400">5</span>;   <span className="text-gray-500">// x = x + 5  → 15</span>{"\n"}
              x -= <span className="text-orange-400">3</span>;   <span className="text-gray-500">// x = x - 3  → 12</span>{"\n"}
              x *= <span className="text-orange-400">2</span>;   <span className="text-gray-500">// x = x * 2  → 24</span>{"\n"}
              x /= <span className="text-orange-400">4</span>;   <span className="text-gray-500">// x = x / 4  → 6</span>{"\n"}
              x %= <span className="text-orange-400">4</span>;   <span className="text-gray-500">// x = x % 4  → 2</span>{"\n\n"}
              <span className="text-gray-500">// Increment and Decrement</span>{"\n"}
              x++;       <span className="text-gray-500">// Post-increment: returns old value, then adds 1</span>{"\n"}
              ++x;       <span className="text-gray-500">// Pre-increment: adds 1, then returns new value</span>{"\n"}
              x--;       <span className="text-gray-500">// Post-decrement</span>{"\n"}
              --x;       <span className="text-gray-500">// Pre-decrement</span>{"\n\n"}
              <span className="text-gray-500">// Practical example in loop</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">i</span> = <span className="text-orange-400">0</span>;{"\n"}
              <span className="text-purple-400">while</span> i {"<"} <span className="text-orange-400">10</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(i++);  <span className="text-gray-500">// Prints 0-9</span>{"\n"}
              {`}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Functions - Enhanced */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Functions</h2>
        <p className="text-gray-400">
          Functions are declared with <code>fn</code>. Parameters have explicit types,
          and return types are specified after <code>{"->"}</code>.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n"}
              <span className="text-gray-500">// BASIC FUNCTION</span>{"\n"}
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">add</span>(<span className="text-blue-300">a</span>: <span className="text-cyan-300">int</span>, <span className="text-blue-300">b</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">return</span> a + b;{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Function without return (void)</span>{"\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">greet</span>(<span className="text-blue-300">name</span>: <span className="text-cyan-300">string</span>) {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"Hello, "</span> + name);{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n"}
              <span className="text-gray-500">// CALLING FUNCTIONS</span>{"\n"}
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">result</span> = <span className="text-yellow-300">add</span>(<span className="text-orange-400">10</span>, <span className="text-orange-400">20</span>);  <span className="text-gray-500">// 30</span>{"\n"}
              <span className="text-yellow-300">greet</span>(<span className="text-green-400">"Reox"</span>);  <span className="text-gray-500">// Prints: Hello, Reox</span>
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-300 pt-4">Inter-Function Calls & Composition</h3>
        <p className="text-gray-400">
          Functions can call other functions, enabling modular composition:
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Helper functions</span>{"\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">square</span>(<span className="text-blue-300">n</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">return</span> n * n;{"\n"}
              {`}`}{"\n\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">double</span>(<span className="text-blue-300">n</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">return</span> n * <span className="text-orange-400">2</span>;{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Composed function using helpers</span>{"\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">process</span>(<span className="text-blue-300">value</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">squared</span> = <span className="text-yellow-300">square</span>(value);{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">doubled</span> = <span className="text-yellow-300">double</span>(squared);{"\n"}
              {"    "}<span className="text-purple-400">return</span> doubled;{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Chain calls inline</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">result</span> = <span className="text-yellow-300">double</span>(<span className="text-yellow-300">square</span>(<span className="text-orange-400">5</span>));  <span className="text-gray-500">// 50</span>{"\n\n"}
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n"}
              <span className="text-gray-500">// RECURSIVE FUNCTIONS</span>{"\n"}
              <span className="text-gray-500">// ═══════════════════════════════════════</span>{"\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">factorial</span>(<span className="text-blue-300">n</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">if</span> n {"<="} <span className="text-orange-400">1</span> {`{`}{"\n"}
              {"        "}<span className="text-purple-400">return</span> <span className="text-orange-400">1</span>;{"\n"}
              {"    "}{`}`}{"\n"}
              {"    "}<span className="text-purple-400">return</span> n * <span className="text-yellow-300">factorial</span>(n - <span className="text-orange-400">1</span>);{"\n"}
              {`}`}{"\n\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">fibonacci</span>(<span className="text-blue-300">n</span>: <span className="text-cyan-300">int</span>) {`->`} <span className="text-cyan-300">int</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">if</span> n {"<="} <span className="text-orange-400">1</span> {`{`} <span className="text-purple-400">return</span> n; {`}`}{"\n"}
              {"    "}<span className="text-purple-400">return</span> <span className="text-yellow-300">fibonacci</span>(n - <span className="text-orange-400">1</span>) + <span className="text-yellow-300">fibonacci</span>(n - <span className="text-orange-400">2</span>);{"\n"}
              {`}`}
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-300 pt-4">Async Functions & Await</h3>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Async function declaration</span>{"\n"}
              <span className="text-purple-400">async fn</span> <span className="text-yellow-300">fetch_data</span>(<span className="text-blue-300">url</span>: <span className="text-cyan-300">string</span>) {`->`} <span className="text-cyan-300">string</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">response</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">http_get</span>(url);{"\n"}
              {"    "}<span className="text-purple-400">return</span> response;{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Multiple async calls</span>{"\n"}
              <span className="text-purple-400">async fn</span> <span className="text-yellow-300">load_user_data</span>(<span className="text-blue-300">id</span>: <span className="text-cyan-300">int</span>) {`{`}{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">user</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">fetch_user</span>(id);{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">posts</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">fetch_posts</span>(user.id);{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"Loaded "</span> + <span className="text-cyan-300">len</span>(posts) + <span className="text-green-400">" posts"</span>);{"\n"}
              {`}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Loops and Iteration - Enhanced */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Loops and Iteration</h2>
        <p className="text-gray-400">
          Reox supports <code>while</code> loops, <code>for..in</code> loops, range expressions, and loop control with <code>break</code> and <code>continue</code>.
        </p>

        <h3 className="text-xl font-semibold text-gray-300">While Loops</h3>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Basic while loop</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">count</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">0</span>;{"\n"}
              <span className="text-purple-400">while</span> count {"<"} <span className="text-orange-400">5</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(count);{"\n"}
              {"    "}count++;{"\n"}
              {`}`}  <span className="text-gray-500">// Prints: 0, 1, 2, 3, 4</span>{"\n\n"}
              <span className="text-gray-500">// Infinite loop with break</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">running</span> = <span className="text-orange-400">true</span>;{"\n"}
              <span className="text-purple-400">while</span> running {`{`}{"\n"}
              {"    "}<span className="text-purple-400">let</span> <span className="text-blue-300">input</span> = <span className="text-yellow-300">read_input</span>();{"\n"}
              {"    "}<span className="text-purple-400">if</span> input == <span className="text-green-400">"quit"</span> {`{`}{"\n"}
              {"        "}running = <span className="text-orange-400">false</span>;{"\n"}
              {"    "}{`}`}{"\n"}
              {`}`}
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-300 pt-4">For Loops with Arrays</h3>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Iterate over array elements</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">fruits</span> = [<span className="text-green-400">"apple"</span>, <span className="text-green-400">"banana"</span>, <span className="text-green-400">"cherry"</span>];{"\n"}
              <span className="text-purple-400">for</span> fruit <span className="text-purple-400">in</span> fruits {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(fruit);{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Process each item</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">numbers</span> = [<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>, <span className="text-orange-400">4</span>, <span className="text-orange-400">5</span>];{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">sum</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">0</span>;{"\n"}
              <span className="text-purple-400">for</span> num <span className="text-purple-400">in</span> numbers {`{`}{"\n"}
              {"    "}sum += num;{"\n"}
              {`}`}{"\n"}
              <span className="text-cyan-300">print</span>(sum);  <span className="text-gray-500">// 15</span>
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-300 pt-4">Range Expressions</h3>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Exclusive range: 0..5 means 0, 1, 2, 3, 4</span>{"\n"}
              <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">5</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(i);{"\n"}
              {`}`}  <span className="text-gray-500">// Prints: 0, 1, 2, 3, 4</span>{"\n\n"}
              <span className="text-gray-500">// Inclusive range: 1..=10 means 1 to 10 inclusive</span>{"\n"}
              <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-orange-400">1</span>..=<span className="text-orange-400">10</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(i);{"\n"}
              {`}`}  <span className="text-gray-500">// Prints: 1, 2, 3, ..., 10</span>{"\n\n"}
              <span className="text-gray-500">// Counting backwards</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">i</span> = <span className="text-orange-400">10</span>;{"\n"}
              <span className="text-purple-400">while</span> i {">="} <span className="text-orange-400">0</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(i);{"\n"}
              {"    "}i--;{"\n"}
              {`}`}  <span className="text-gray-500">// Prints: 10, 9, 8, ..., 0</span>
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-300 pt-4">Loop Control: Break & Continue</h3>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// break: exit loop entirely</span>{"\n"}
              <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">100</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">if</span> i == <span className="text-orange-400">5</span> {`{`}{"\n"}
              {"        "}<span className="text-purple-400">break</span>;  <span className="text-gray-500">// Stop the loop</span>{"\n"}
              {"    "}{`}`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(i);{"\n"}
              {`}`}  <span className="text-gray-500">// Prints: 0, 1, 2, 3, 4</span>{"\n\n"}
              <span className="text-gray-500">// continue: skip to next iteration</span>{"\n"}
              <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">10</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">if</span> i % <span className="text-orange-400">2</span> == <span className="text-orange-400">0</span> {`{`}{"\n"}
              {"        "}<span className="text-purple-400">continue</span>;  <span className="text-gray-500">// Skip even numbers</span>{"\n"}
              {"    "}{`}`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(i);{"\n"}
              {`}`}  <span className="text-gray-500">// Prints: 1, 3, 5, 7, 9</span>{"\n\n"}
              <span className="text-gray-500">// Find first match and exit</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">data</span> = [<span className="text-orange-400">10</span>, <span className="text-orange-400">20</span>, <span className="text-orange-400">30</span>, <span className="text-orange-400">40</span>];{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">found</span> = <span className="text-purple-400">nil</span>;{"\n"}
              <span className="text-purple-400">for</span> item <span className="text-purple-400">in</span> data {`{`}{"\n"}
              {"    "}<span className="text-purple-400">if</span> item {">"} <span className="text-orange-400">25</span> {`{`}{"\n"}
              {"        "}found = item;{"\n"}
              {"        "}<span className="text-purple-400">break</span>;{"\n"}
              {"    "}{`}`}{"\n"}
              {`}`}{"\n"}
              <span className="text-cyan-300">print</span>(found);  <span className="text-gray-500">// 30</span>
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-300 pt-4">Nested Loops</h3>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Matrix iteration</span>{"\n"}
              <span className="text-purple-400">for</span> row <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">3</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">for</span> col <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">3</span> {`{`}{"\n"}
              {"        "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"["</span> + row + <span className="text-green-400">","</span> + col + <span className="text-green-400">"]"</span>);{"\n"}
              {"    "}{`}`}{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Breaking out of nested loops</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">done</span> = <span className="text-orange-400">false</span>;{"\n"}
              <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">10</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">for</span> j <span className="text-purple-400">in</span> <span className="text-orange-400">0</span>..<span className="text-orange-400">10</span> {`{`}{"\n"}
              {"        "}<span className="text-purple-400">if</span> i * j == <span className="text-orange-400">42</span> {`{`}{"\n"}
              {"            "}done = <span className="text-orange-400">true</span>;{"\n"}
              {"            "}<span className="text-purple-400">break</span>;{"\n"}
              {"        "}{`}`}{"\n"}
              {"    "}{`}`}{"\n"}
              {"    "}<span className="text-purple-400">if</span> done {`{`} <span className="text-purple-400">break</span>; {`}`}{"\n"}
              {`}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Transitions (State Changes) */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">State Transitions</h2>
        <p className="text-gray-400">
          Managing state changes cleanly with mutable variables and pattern matching.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// State machine pattern</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">state</span>: <span className="text-cyan-300">string</span> = <span className="text-green-400">"idle"</span>;{"\n\n"}
              <span className="text-purple-400">fn</span> <span className="text-yellow-300">transition</span>(<span className="text-blue-300">current</span>: <span className="text-cyan-300">string</span>, <span className="text-blue-300">event</span>: <span className="text-cyan-300">string</span>) {`->`} <span className="text-cyan-300">string</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">match</span> current {`{`}{"\n"}
              {"        "}<span className="text-green-400">"idle"</span> {`=>`} <span className="text-purple-400">match</span> event {`{`}{"\n"}
              {"            "}<span className="text-green-400">"start"</span> {`=>`} <span className="text-green-400">"running"</span>,{"\n"}
              {"            "}_ {`=>`} current{"\n"}
              {"        "}{`}`},{"\n"}
              {"        "}<span className="text-green-400">"running"</span> {`=>`} <span className="text-purple-400">match</span> event {`{`}{"\n"}
              {"            "}<span className="text-green-400">"pause"</span> {`=>`} <span className="text-green-400">"paused"</span>,{"\n"}
              {"            "}<span className="text-green-400">"stop"</span> {`=>`} <span className="text-green-400">"stopped"</span>,{"\n"}
              {"            "}_ {`=>`} current{"\n"}
              {"        "}{`}`},{"\n"}
              {"        "}<span className="text-green-400">"paused"</span> {`=>`} <span className="text-purple-400">match</span> event {`{`}{"\n"}
              {"            "}<span className="text-green-400">"resume"</span> {`=>`} <span className="text-green-400">"running"</span>,{"\n"}
              {"            "}<span className="text-green-400">"stop"</span> {`=>`} <span className="text-green-400">"stopped"</span>,{"\n"}
              {"            "}_ {`=>`} current{"\n"}
              {"        "}{`}`},{"\n"}
              {"        "}_ {`=>`} current{"\n"}
              {"    "}{`}`}{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Usage</span>{"\n"}
              state = <span className="text-yellow-300">transition</span>(state, <span className="text-green-400">"start"</span>);   <span className="text-gray-500">// "running"</span>{"\n"}
              state = <span className="text-yellow-300">transition</span>(state, <span className="text-green-400">"pause"</span>);   <span className="text-gray-500">// "paused"</span>{"\n"}
              state = <span className="text-yellow-300">transition</span>(state, <span className="text-green-400">"resume"</span>);  <span className="text-gray-500">// "running"</span>
            </code>
          </pre>
        </div>
      </section>

      {/* Collections */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Arrays and Maps</h2>
        <p className="text-gray-400">
          Reox provides built-in collections for storing multiple values.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Arrays</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">numbers</span> = [<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>, <span className="text-orange-400">4</span>, <span className="text-orange-400">5</span>];{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">first</span> = numbers[<span className="text-orange-400">0</span>];      <span className="text-gray-500">// Access by index</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">count</span> = <span className="text-cyan-300">len</span>(numbers);   <span className="text-gray-500">// Get length: 5</span>{"\n\n"}
              <span className="text-gray-500">// Modify array (requires mutable)</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">items</span> = [<span className="text-green-400">"a"</span>, <span className="text-green-400">"b"</span>];{"\n"}
              items = <span className="text-cyan-300">push</span>(items, <span className="text-green-400">"c"</span>);   <span className="text-gray-500">// ["a", "b", "c"]</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">last</span> = <span className="text-cyan-300">pop</span>(items);       <span className="text-gray-500">// "c"</span>{"\n\n"}
              <span className="text-gray-500">// Maps (key-value pairs)</span>{"\n"}
              <span className="text-purple-400">let mut</span> <span className="text-blue-300">user</span> = <span className="text-cyan-300">map_new</span>();{"\n"}
              user = <span className="text-cyan-300">map_set</span>(user, <span className="text-green-400">"name"</span>, <span className="text-green-400">"Alice"</span>);{"\n"}
              user = <span className="text-cyan-300">map_set</span>(user, <span className="text-green-400">"age"</span>, <span className="text-orange-400">25</span>);{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">name</span> = <span className="text-cyan-300">map_get</span>(user, <span className="text-green-400">"name"</span>);  <span className="text-gray-500">// "Alice"</span>{"\n\n"}
              <span className="text-gray-500">// Check if key exists</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">hasEmail</span> = <span className="text-cyan-300">map_has</span>(user, <span className="text-green-400">"email"</span>);  <span className="text-gray-500">// false</span>
            </code>
          </pre>
        </div>
      </section>

      {/* Structures */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Structures</h2>
        <p className="text-gray-400">
          Define custom data types with <code>struct</code>.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">struct</span> <span className="text-yellow-300">User</span> {`{`}{"\n"}
              {"    "}<span className="text-blue-300">id</span>: <span className="text-cyan-300">int</span>,{"\n"}
              {"    "}<span className="text-blue-300">name</span>: <span className="text-cyan-300">string</span>,{"\n"}
              {"    "}<span className="text-blue-300">email</span>: <span className="text-cyan-300">string</span>{"\n"}
              {`}`}{"\n\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">user</span> = <span className="text-yellow-300">User</span> {`{`}{"\n"}
              {"    "}<span className="text-blue-300">id</span>: <span className="text-orange-400">1</span>,{"\n"}
              {"    "}<span className="text-blue-300">name</span>: <span className="text-green-400">"Swana"</span>,{"\n"}
              {"    "}<span className="text-blue-300">email</span>: <span className="text-green-400">"swana@neolyx.os"</span>{"\n"}
              {`}`};{"\n\n"}
              <span className="text-gray-500">// Access fields</span>{"\n"}
              <span className="text-cyan-300">print</span>(user.name);      <span className="text-gray-500">// "Swana"</span>{"\n\n"}
              <span className="text-gray-500">// Optional chaining (returns nil if nil)</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">maybeUser</span> = <span className="text-purple-400">nil</span>;{"\n"}
              <span className="text-cyan-300">print</span>(maybeUser?.name);  <span className="text-gray-500">// nil (no crash)</span>
            </code>
          </pre>
        </div>
      </section>

      {/* Null Safety */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Null Safety</h2>
        <p className="text-gray-400">
          Handle nil values safely with optional chaining and null coalescing.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Null coalescing: use default if nil</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">value</span> = <span className="text-purple-400">nil</span>;{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">result</span> = value ?? <span className="text-green-400">"default"</span>;  <span className="text-gray-500">// "default"</span>{"\n\n"}
              <span className="text-gray-500">// Optional chaining: safe member access</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">user</span> = <span className="text-purple-400">nil</span>;{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">name</span> = user?.name ?? <span className="text-green-400">"Guest"</span>;  <span className="text-gray-500">// "Guest"</span>{"\n\n"}
              <span className="text-gray-500">// Chained optional access</span>{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">city</span> = user?.address?.city ?? <span className="text-green-400">"Unknown"</span>;
            </code>
          </pre>
        </div>
      </section>

      {/* Pattern Matching */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Pattern Matching</h2>
        <p className="text-gray-400">
          Powerful <code>match</code> expressions simplify control flow.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">match</span> command {`{`}{"\n"}
              {"    "}<span className="text-green-400">"save"</span> {`=>`} <span className="text-yellow-300">save_file</span>(),{"\n"}
              {"    "}<span className="text-green-400">"load"</span> {`=>`} <span className="text-yellow-300">load_file</span>(),{"\n"}
              {"    "}<span className="text-green-400">"exit"</span> {`=>`} <span className="text-purple-400">return</span>,{"\n"}
              {"    "}_ {`=>`} <span className="text-cyan-300">print</span>(<span className="text-green-400">"Unknown command"</span>){"\n"}
              {`}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Conditionals */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Conditionals</h2>
        <p className="text-gray-400">
          Use <code>if</code>, <code>else if</code>, and <code>else</code> for conditional branching.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">score</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">85</span>;{"\n\n"}
              <span className="text-purple-400">if</span> score {">="} <span className="text-orange-400">90</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"Excellent!"</span>);{"\n"}
              {`}`} <span className="text-purple-400">else if</span> score {">="} <span className="text-orange-400">70</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"Good job!"</span>);{"\n"}
              {`}`} <span className="text-purple-400">else</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"Keep trying!"</span>);{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Logical operators</span>{"\n"}
              <span className="text-purple-400">if</span> score {">"} <span className="text-orange-400">50</span> <span className="text-purple-400">and</span> score {"<"} <span className="text-orange-400">100</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"Valid score"</span>);{"\n"}
              {`}`}{"\n\n"}
              <span className="text-purple-400">if</span> score {"<"} <span className="text-orange-400">0</span> <span className="text-purple-400">or</span> score {">"} <span className="text-orange-400">100</span> {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"Invalid score"</span>);{"\n"}
              {`}`}{"\n\n"}
              <span className="text-purple-400">if</span> <span className="text-purple-400">not</span> is_valid {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"Not valid"</span>);{"\n"}
              {`}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Error Handling */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Error Handling</h2>
        <p className="text-gray-400">
          Reox provides robust error handling with <code>guard</code>, <code>try/catch</code>, and <code>defer</code>.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-gray-500">// Guard: early exit if condition fails</span>{"\n"}
              <span className="text-purple-400">guard</span> user != <span className="text-purple-400">nil</span> <span className="text-purple-400">else</span> {`{`}{"\n"}
              {"    "}<span className="text-purple-400">return</span>;{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Defer: cleanup when leaving scope</span>{"\n"}
              <span className="text-purple-400">defer</span> {`{`}{"\n"}
              {"    "}<span className="text-yellow-300">close_connection</span>();{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Try/catch: handle exceptions</span>{"\n"}
              <span className="text-purple-400">try</span> {`{`}{"\n"}
              {"    "}<span className="text-yellow-300">risky_operation</span>();{"\n"}
              {`}`} <span className="text-purple-400">catch</span> err {`{`}{"\n"}
              {"    "}<span className="text-cyan-300">print</span>(<span className="text-green-400">"Error: "</span> + err);{"\n"}
              {`}`}{"\n\n"}
              <span className="text-gray-500">// Throw an error</span>{"\n"}
              <span className="text-purple-400">throw</span> <span className="text-green-400">"Something went wrong"</span>;
            </code>
          </pre>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <Link href="/docs/quickstart" className="text-primary hover:text-blue-400 font-medium">← Back to Quick Start</Link>
        <Link href="/docs/control-flow" className="text-primary hover:text-blue-400 font-medium">Next: Control Flow →</Link>
      </div>
    </div>
  );
}
