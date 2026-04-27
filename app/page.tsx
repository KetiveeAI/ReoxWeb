import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import MouseTrackingCard from "./components/MouseTrackingCard";
import TabbedCode from "./components/TabbedCode";
import CopyButton from "./components/CopyButton";
import LocCounter from "./components/LocCounter";
import WebGLLogo from "./components/WebGLLogo";
import BackgroundParticles from "./components/BackgroundParticles";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between selection:bg-primary/30 relative overflow-hidden">
      <BackgroundParticles />
      <WebGLLogo />
      <div className="grid-bg"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex items-center justify-between bg-background/50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 transition-transform group-hover:scale-110 duration-300">
            <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight">Reox</span>
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/community" className="hover:text-white transition-colors">Community</Link>
        </div>
        <Link
          href="/download"
          className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
        >
          Get Started
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-center w-full max-w-7xl px-6 pt-32 pb-16 relative z-10">

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-8 py-20 min-h-[85vh] justify-center relative w-full">
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              v1.1.1 is now available
            </div>
            {/* Spacer for where the logo used to be */}
            <div className="h-[250px] w-[250px] mx-auto" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            The Native Language of <span className="text-gradient">NeolyxOS</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            Declarative UI simplicity meets system-level performance.
            <br className="hidden md:block" />
            <span className="text-gray-300 font-medium">Built in just <span className="text-primary"><LocCounter target={7356} /></span> LOC of pure Rust.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Link href="/download" className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center">
              Download Reox
            </Link>
            <Link href="/docs" className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
              Read the Docs
            </Link>
          </div>

          <div className="absolute bottom-10 animate-bounce text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </section>

        {/* Tabbed Code Preview Section */}
        <TabbedCode />

        {/* Compiler Pipeline Visualization */}
        <ScrollReveal className="w-full max-w-5xl my-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zero Fat. 100% Muscle.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our compiler is built entirely from scratch in Rust. No heavy dependencies, no bloated toolchains. Just lightning-fast AOT compilation to native binaries.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0 overflow-hidden">
                <div className="w-[100px] h-full bg-gradient-to-r from-transparent via-secondary to-transparent animate-[scan_2s_linear_infinite]" />
              </div>
              
              {/* Stages */}
              {[
                { name: "Lexer", loc: 1024, icon: "text", color: "text-blue-400" },
                { name: "Parser", loc: 2150, icon: "ast", color: "text-purple-400" },
                { name: "Type Checker", loc: 2890, icon: "check", color: "text-green-400" },
                { name: "IR / Codegen", loc: 1292, icon: "cpu", color: "text-orange-400" }
              ].map((stage, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center bg-[#0d0f16] border border-white/10 p-6 rounded-xl w-full md:w-1/4 shadow-xl transition-transform hover:-translate-y-1">
                  <div className={`text-2xl mb-3 ${stage.color}`}>
                    {stage.icon === "text" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="12" y2="18"></line></svg>}
                    {stage.icon === "ast" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>}
                    {stage.icon === "check" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    {stage.icon === "cpu" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>}
                  </div>
                  <h3 className="font-bold text-gray-200">{stage.name}</h3>
                  <div className="text-xs text-gray-500 font-mono mt-2">{stage.loc.toLocaleString()} LOC</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-sm font-mono text-gray-500 flex justify-center items-center gap-2">
              <span>TOTAL COMPILER SIZE:</span>
              <span className="text-secondary font-bold text-base"><LocCounter target={7356} /> LOC</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <ScrollReveal className="w-full max-w-6xl mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Native Performance",
                desc: "Direct integration with NeolyxOS syscalls and rendering primitives. No virtual machine overhead, no garbage collection pauses.",
                icon: "⚡",
                color: "from-blue-500/20"
              },
              {
                title: "Declarative UI",
                desc: "Build complex interfaces with simple, composable syntax inspired by modern frameworks, built right into the language grammar.",
                icon: "🎨",
                color: "from-purple-500/20"
              },
              {
                title: "Memory Safe",
                desc: "Immutable by default. The compiler strictly enforces mutability and ownership, preventing data races and memory leaks.",
                icon: "🛡️",
                color: "from-green-500/20"
              }
            ].map((feature, i) => (
              <MouseTrackingCard key={i} className={`bg-gradient-to-b ${feature.color} to-transparent`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </MouseTrackingCard>
            ))}
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal className="w-full max-w-5xl mb-32">
          <h2 className="text-3xl font-bold text-center mb-12">How We Compare</h2>
          <div className="glass rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <table className="w-full text-left">
              <thead className="bg-[#0f111a] border-b border-white/10">
                <tr>
                  <th className="p-5 font-medium text-gray-400">Capability</th>
                  <th className="p-5 font-bold text-primary text-lg">Reox</th>
                  <th className="p-5 font-medium text-gray-500 hidden sm:table-cell">C++</th>
                  <th className="p-5 font-medium text-gray-500 hidden sm:table-cell">Swift</th>
                  <th className="p-5 font-medium text-gray-500 hidden sm:table-cell">Python</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#0a0a0f]">
                {[
                  ["UI Paradigms", "Native Declarative", "External Libs (Qt)", "Native Declarative", "External Libs"],
                  ["Memory Safety", "Compiler Enforced", "Manual", "ARC", "Garbage Collected"],
                  ["Execution", "AOT Compiled", "AOT Compiled", "AOT Compiled", "Interpreted"],
                  ["C FFI Overhead", "Zero", "Zero", "Low", "High"],
                  ["Primary Target", "NeolyxOS", "Any", "macOS/iOS", "Any"],
                ].map(([feat, reox, cpp, swift, py], i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="p-5 font-medium text-gray-300">{feat}</td>
                    <td className="p-5 text-primary font-bold group-hover:text-blue-400 transition-colors">{reox}</td>
                    <td className="p-5 text-gray-500 hidden sm:table-cell">{cpp}</td>
                    <td className="p-5 text-gray-500 hidden sm:table-cell">{swift}</td>
                    <td className="p-5 text-gray-500 hidden sm:table-cell">{py}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Install Commands */}
        <ScrollReveal className="w-full max-w-4xl mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Building</h2>
            <p className="text-gray-400">Get up and running in seconds on your preferred OS.</p>
          </div>

          <div className="space-y-4">
            {[
              { os: "NeolyxOS", cmd: "reoxc pkg update reox@latest" },
              { os: "macOS / Linux", cmd: "curl -fsSL https://reox.lang/install.sh | bash" },
              { os: "Build from Source", cmd: "cargo install reoxc --git https://github.com/ketiveeai/reox" },
            ].map((install, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between glass p-4 md:p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="mb-4 sm:mb-0">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{install.os}</div>
                  <code className="text-primary font-mono text-sm md:text-base">{install.cmd}</code>
                </div>
                <CopyButton text={install.cmd} />
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500/80 text-sm border border-yellow-500/20">
              Note: Windows & macOS native installers coming in v1.1.2
            </span>
          </div>
        </ScrollReveal>

      </main>

      {/* ── NEST SECTION ── Bird lands here at page bottom ───────────────────── */}
      {/*
        This section gives the 3D canvas something to "land on".
        The 3D nest/egg is rendered by WebGLLogo; this section provides
        the surrounding text + ground atmosphere.
        Height is controlled so the ScrollTrigger end aligns here.
      */}
      <section className="w-full relative z-10 flex flex-col items-center justify-center py-32 px-6 nest-section">
        {/* Ambient ground glow behind the nest */}
        <div
          className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(139,92,246,0.18) 0%, transparent 80%)",
          }}
        />
        <div className="text-center max-w-xl relative z-0 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for <span className="text-gradient">NeolyxOS</span>.
            <br />Born to fly.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Every line of Reox runs natively on NeolyxOS — no VM, no runtime tax.
            It's the language that lives where your OS breathes.
          </p>
        </div>
        {/* Space for the 3D nest — the canvas bird lands into this gap */}
        <div className="h-[280px] w-full" aria-hidden="true" />
      </section>

      {/* Footer */}
      <footer className="w-[90%] max-w-5xl mx-auto mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md py-8 relative z-10 shadow-2xl">
        <div className="px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Reox" width={24} height={24} className="grayscale opacity-50" />
            <span className="text-gray-600 font-medium tracking-tight">Reox</span>
          </div>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="https://policy.ketivee.com/reox" className="hover:text-white transition-colors">Privacy</a>
            <a href="https://policy.ketivee.com/reox" className="hover:text-white transition-colors">Terms</a>
            <a href="/license" className="hover:text-white transition-colors">License</a>
            <a href="/eula" className="hover:text-white transition-colors">EULA</a>
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