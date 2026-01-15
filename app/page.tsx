import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background grid-bg selection:bg-primary/30">

      {/* Navigation */}
      <nav className="w-full glass fixed top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-b-2xl mt-0 md:mt-4 md:rounded-2xl border-white/5">
        <div className="flex items-center gap-3">
          <Image src="/icon.png" alt="Reox Logo" width={32} height={32} />
          <span className="font-bold text-xl tracking-tight">Reox</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#docs" className="hover:text-white transition-colors">Documentation</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
        </div>
        <a
          href="#download"
          className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
        >
          Get Started
        </a>
      </nav>

      <main className="flex flex-col items-center justify-center w-full max-w-7xl px-6 pt-32 pb-16">

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-8 py-20 animate-fade-in-up">
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-4">
            <Image
              src="/logo.svg"
              alt="Reox Logo"
              fill
              className="drop-shadow-2xl"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1]">
            The Native Language of <span className="text-gradient">NeolyxOS</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            Declarative UI simplicity meets system-level performance.
            <br className="hidden md:block" />
            Simpler than C++, Safer than C, Built for AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
              Download Reox 1.0
            </button>
            <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Read the Docs
            </button>
          </div>
        </section>

        {/* Code Preview Section */}
        <section className="w-full max-w-5xl my-24">
          <div className="glass rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <div className="bg-[#0f111a] px-4 py-3 flex justify-end gap-2 border-b border-white/5 items-center">
              <span className="mr-auto ml-2 text-xs text-gray-500 font-mono">main.reox</span>
              <Image src="/minimmize.svg" alt="Minimize" width={12} height={12} className="opacity-70 hover:opacity-100" />
              <Image src="/expand.svg" alt="Maximize" width={12} height={12} className="opacity-70 hover:opacity-100" />
              <Image src="/close.svg" alt="Close" width={12} height={12} className="opacity-70 hover:opacity-100" />
            </div>
            <div className="p-6 md:p-8 overflow-x-auto bg-code-bg">
              <pre className="font-mono text-sm md:text-base leading-relaxed">
                <code className="language-reox">
                  <span className="text-purple-400">window</span> <span className="text-yellow-300">Calculator</span> <span className="text-white">{`{`}</span>{"\n"}
                  {"    "}<span className="text-blue-300">title</span>: <span className="text-green-400">"Calculator"</span>{"\n"}
                  {"    "}<span className="text-blue-300">size</span>: <span className="text-orange-400">(400, 300)</span>{"\n\n"}

                  {"    "}<span className="text-purple-400">@Bind</span> <span className="text-blue-300">result</span>: <span className="text-cyan-300">string</span> = <span className="text-green-400">"0"</span>{"\n\n"}

                  {"    "}<span className="text-purple-400">view</span> <span className="text-white">{`{`}</span>{"\n"}
                  {"        "}<span className="text-cyan-300">vstack</span>(<span className="text-blue-300">gap</span>: <span className="text-orange-400">12</span>) <span className="text-white">{`{`}</span>{"\n"}
                  {"            "}<span className="text-cyan-300">text</span>(result){"\n"}
                  {"                "}.<span className="text-yellow-300">font_size</span>(<span className="text-orange-400">32</span>){"\n"}
                  {"                "}.<span className="text-yellow-300">color</span>(<span className="text-orange-400">0xFFFFFF</span>){"\n\n"}

                  {"            "}<span className="text-cyan-300">hstack</span>(<span className="text-blue-300">gap</span>: <span className="text-orange-400">8</span>) <span className="text-white">{`{`}</span>{"\n"}
                  {"                "}<span className="text-cyan-300">button</span>(<span className="text-green-400">"7"</span>).<span className="text-yellow-300">on_click</span>(<span className="text-purple-400">action</span> <span className="text-white">{`{`}</span> append(<span className="text-green-400">"7"</span>) <span className="text-white">{`}`}</span>){"\n"}
                  {"                "}<span className="text-gray-500">// ... more buttons</span>{"\n"}
                  {"            "}<span className="text-white">{`}`}</span>{"\n"}
                  {"        "}<span className="text-white">{`}`}</span>{"\n"}
                  {"    "}<span className="text-white">{`}`}</span>{"\n"}
                  <span className="text-white">{`}`}</span>
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-32">
          {[
            {
              title: "Native Performance",
              desc: "Direct integration with NeolyxOS syscalls and rendering primitives. No virtual machine overhead.",
              icon: "⚡"
            },
            {
              title: "Declarative UI",
              desc: "Build complex interfaces with simple, composable syntax inspired by modern frameworks.",
              icon: "🎨"
            },
            {
              title: "AI First",
              desc: "First-class keywords for AI assistant integration and context awareness.",
              icon: "🤖"
            }
          ].map((feature, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Why Reox Table */}
        <section className="w-full max-w-4xl mb-32">
          <h2 className="text-3xl font-bold text-center mb-12">Why Reox?</h2>
          <div className="glass rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="p-4 font-medium">Feature</th>
                  <th className="p-4 font-bold text-primary">Reox</th>
                  <th className="p-4 font-medium hidden sm:table-cell">C++</th>
                  <th className="p-4 font-medium hidden sm:table-cell">Python</th>
                  <th className="p-4 font-medium hidden sm:table-cell">Swift</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["UI Syntax", "Native", "Library", "Library", "Native"],
                  ["Performance", "System", "System", "Interpreted", "System"],
                  ["Simplicity", "High", "Low", "High", "High"],
                  ["AI Native", "Yes", "No", "Libraries", "CoreML"],
                  ["Target OS", "NeolyxOS", "Any", "Any", "macOS"],
                ].map(([feat, reox, cpp, py, swift], i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-gray-300">{feat}</td>
                    <td className="p-4 text-primary font-bold">{reox}</td>
                    <td className="p-4 text-gray-500 hidden sm:table-cell">{cpp}</td>
                    <td className="p-4 text-gray-500 hidden sm:table-cell">{py}</td>
                    <td className="p-4 text-gray-500 hidden sm:table-cell">{swift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#0a0a0a] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="Reox" width={24} height={24} className="opacity-80" />
            <span className="text-gray-400 font-medium">© 2026 KetiveeAI</span>
          </div>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="https://policy.ketivee.com/reox" className="hover:text-white transition-colors">Privacy</a>
            <a href="https://policy.ketivee.com/reox" className="hover:text-white transition-colors">Terms</a>
            <a href="/license" className="hover:text-white transition-colors">License</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ketiveeai/reox" className="opacity-50 hover:opacity-100 transition-opacity font-medium hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
