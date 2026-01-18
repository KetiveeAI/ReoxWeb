function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayoutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function DocsHome() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 h-14">
          Documentation
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Welcome to the official Reox documentation. Build native, AI-first applications for NeolyxOS with system-level performance.
        </p>
      </div>

      {/* Main Documentation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/docs/installation" className="glass p-6 rounded-xl hover:bg-white/5 transition-all group border border-white/10 hover:border-blue-500/30">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <RocketIcon className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">Quick Start</h3>
          <p className="text-sm text-gray-500">Get the Reox compiler installed and run your first "Hello World".</p>
        </a>

        <a href="/docs/syntax" className="glass p-6 rounded-xl hover:bg-white/5 transition-all group border border-white/10 hover:border-purple-500/30">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <CodeIcon className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">Language Guide</h3>
          <p className="text-sm text-gray-500">Master the syntax: structs, pattern matching, async/await, error handling, and more.</p>
        </a>

        <a href="/docs/api/widgets" className="glass p-6 rounded-xl hover:bg-white/5 transition-all group border border-white/10 hover:border-green-500/30">
          <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <LayoutIcon className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors">UI Components</h3>
          <p className="text-sm text-gray-500">Build declarative interfaces with the dedicated `window` and `view` syntax.</p>
        </a>

        <a href="/docs/ai" className="glass p-6 rounded-xl hover:bg-white/5 transition-all group border border-white/10 hover:border-pink-500/30">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <BrainIcon className="w-6 h-6 text-pink-400" />
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-pink-400 transition-colors">AI Integration</h3>
          <p className="text-sm text-gray-500">Learn to use the `ai assistant` keyword to integrate LLM features natively.</p>
        </a>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/docs/stdlib" className="glass p-5 rounded-xl hover:bg-white/5 transition-all group border border-white/10 hover:border-cyan-500/30 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <BoxIcon className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h4 className="font-semibold group-hover:text-cyan-400 transition-colors">Standard Library</h4>
            <p className="text-xs text-gray-500">Built-in types and functions</p>
          </div>
        </a>

        <a href="/docs/api/events" className="glass p-5 rounded-xl hover:bg-white/5 transition-all group border border-white/10 hover:border-orange-500/30 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <ZapIcon className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h4 className="font-semibold group-hover:text-orange-400 transition-colors">Events & Actions</h4>
            <p className="text-xs text-gray-500">Handle user interactions</p>
          </div>
        </a>

        <a href="/docs/api/layout" className="glass p-5 rounded-xl hover:bg-white/5 transition-all group border border-white/10 hover:border-indigo-500/30 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold group-hover:text-indigo-400 transition-colors">Layout System</h4>
            <p className="text-xs text-gray-500">Flexbox and grid layouts</p>
          </div>
        </a>
      </div>

      {/* What is Reox Section */}
      <div className="pt-8 border-t border-white/5">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <BookIcon className="w-6 h-6 text-gray-400" />
          What is Reox?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 leading-relaxed">
          <p>
            Reox is a statically-typed, compiled language designed specifically for NeolyxOS. It aims to be <strong className="text-white">simpler than C++ but safer than C</strong>, offering modern features like type inference, pattern matching, and memory safety without the overhead of a virtual machine.
          </p>
          <p>
            Unlike other languages, Reox treats <strong className="text-white">User Interface</strong> and <strong className="text-white">AI</strong> as first-class citizens. You define windows and views directly in the language syntax, and integrate AI models with native keywords, all compiling to optimized native code via C transpilation.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="pt-8 border-t border-white/5">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 3h5v5" />
            <path d="M8 3H3v5" />
            <path d="M21 3l-7 7" />
            <path d="M3 3l7 7" />
            <path d="M16 21h5v-5" />
            <path d="M8 21H3v-5" />
            <path d="M21 21l-7-7" />
            <path d="M3 21l7-7" />
          </svg>
          Reox vs Swift
        </h2>
        <p className="text-gray-400 mb-6">
          Reox is heavily inspired by Swift, adapting its best ideas for the NeolyxOS ecosystem.
        </p>
        <div className="glass rounded-xl overflow-hidden border border-white/10">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-white/5 text-gray-200 font-semibold border-b border-white/10">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4 text-purple-400">Reox</th>
                <th className="p-4 text-orange-400">Swift</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-400">
              <tr>
                <td className="p-4 text-gray-300">Target OS</td>
                <td className="p-4 font-medium text-white">NeolyxOS</td>
                <td className="p-4">macOS / iOS</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-300">UI Framework</td>
                <td className="p-4 font-medium text-white">Native Syntax (ReoxUI)</td>
                <td className="p-4">SwiftUI (Library)</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-300">AI Integration</td>
                <td className="p-4 font-medium text-white">Native Keywords (`ai`)</td>
                <td className="p-4">CoreML Libraries</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-300">Compilation</td>
                <td className="p-4 font-medium text-white">C Transpile → Native</td>
                <td className="p-4">LLVM Native</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-300">Async/Await</td>
                <td className="p-4 font-medium text-white">Native (`async fn`)</td>
                <td className="p-4">Native (`async`)</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-300">Memory Safety</td>
                <td className="p-4 font-medium text-white">Yes (Ownership)</td>
                <td className="p-4">Yes (ARC)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
