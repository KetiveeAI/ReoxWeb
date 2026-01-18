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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/docs/installation" className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group border border-white/10 hover:border-blue-500/30">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Quick Start</h3>
          <p className="text-sm text-gray-500">Get the Reox compiler installed and run your first "Hello World".</p>
        </a>

        <a href="/docs/syntax" className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group border border-white/10 hover:border-purple-500/30">
          <div className="text-3xl mb-4">📝</div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Language Guide</h3>
          <p className="text-sm text-gray-500">Master the syntax: structs, pattern matching, async/await, error handling, and more.</p>
        </a>

        <a href="/docs/components" className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group border border-white/10 hover:border-green-500/30">
          <div className="text-3xl mb-4">🧩</div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">UI Components</h3>
          <p className="text-sm text-gray-500">Build declarative interfaces with the dedicated `window` and `view` syntax.</p>
        </a>

        <a href="/docs/ai" className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group border border-white/10 hover:border-pink-500/30">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">AI Integration</h3>
          <p className="text-sm text-gray-500">Learn to use the `ai assistant` keyword to integrate LLM features natively.</p>
        </a>
      </div>

      <div className="pt-8 border-t border-white/5">
        <h2 className="text-2xl font-bold mb-6">What is Reox?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 leading-relaxed">
          <p>
            Reox is a statically-typed, compiled language designed specifically for NeolyxOS. It aims to be <strong>simpler than C++ but safer than C</strong>, offering modern features like type inference, pattern matching, and memory safety without the overhead of a virtual machine.
          </p>
          <p>
            Unlike other languages, Reox treats <strong>User Interface</strong> and <strong>AI</strong> as first-class citizens. You define windows and views directly in the language syntax, and integrate AI models with native keywords, all compiling down to optimized machine code via LLVM.
          </p>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5">
        <h2 className="text-2xl font-bold mb-6">Reox vs Swift</h2>
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
                <td className="p-4 font-medium text-white">LLVM Native</td>
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
