import Link from "next/link";
import Image from "next/image";

export default function Reox11ReleasePage() {
  return (
    <div className="min-h-screen bg-[#05050A] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 transition-transform group-hover:scale-110 duration-300">
            <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight">Reox</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
          <Link href="/blog" className="text-white">Blog</Link>
          <Link href="/community" className="hover:text-white transition-colors">Community</Link>
        </div>
        <Link
          href="/download"
          className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
        >
          Get Started
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 pt-32 pb-16">
        
        <Link href="/blog" className="self-start text-gray-500 hover:text-white transition-colors mb-8 flex items-center gap-2">
          ← Back to Blog
        </Link>

        <article className="w-full animate-fade-in-up">
          <div className="flex items-center gap-3 text-sm mb-6">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
              Release
            </span>
            <span className="text-gray-500">April 25, 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Reox v1.1.1: Ergonomics, Interpolation & Stability
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-white/5 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                SG
              </div>
              <div>
                <div className="font-medium">Swanaya Gupta</div>
                <div className="text-sm text-gray-500">Creator of NeolyxOS</div>
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-pre:bg-[#0d0f16] prose-pre:border prose-pre:border-white/10">
            <p>
              Today, we're thrilled to announce the release of <strong>Reox v1.1.1</strong>. Following the launch of our cross-platform capabilities, this update zeroes in on language ergonomics, developer experience, and deeper safety guarantees in the compiler.
            </p>

            <p>
              This release resolves several major feature requests and brings the language closer to our vision of a perfectly balanced tool for native UI development on NeolyxOS. Let's dive into what's new.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">String Interpolation</h2>
            <p>
              Gone are the days of chaining `+` operators to concatenate strings and variables. We've introduced first-class string interpolation using the <code>\(expr)</code> syntax, heavily inspired by Swift for its clean readability.
            </p>
            <pre className="text-sm font-mono text-gray-300"><code>
<span className="text-gray-500">// Before v1.1.1</span>
<span className="text-purple-400">let</span> <span className="text-blue-300">greeting</span> = <span className="text-green-400">"Hello, "</span> + name + <span className="text-green-400">"! You have "</span> + <span className="text-cyan-300">to_string</span>(messages) + <span className="text-green-400">" unread messages."</span>;

<span className="text-gray-500">// Now in v1.1.1</span>
<span className="text-purple-400">let</span> <span className="text-blue-300">greeting</span> = <span className="text-green-400">"Hello, \(name)! You have \(messages) unread messages."</span>;
            </code></pre>
            <p>
              The compiler automatically desugars these interpolations safely, implicitly handling type conversions for primitives like `int` and `float` through the new `str()` runtime built-in.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Global Variables (Top-Level Scope)</h2>
            <p>
              You can now declare global variables at the top level of your Reox modules. This is essential for managing global application state, configuration defaults, and shared constants.
            </p>
            <pre className="text-sm font-mono text-gray-300"><code>
<span className="text-purple-400">let mut</span> <span className="text-blue-300">global_counter</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">0</span>;
<span className="text-purple-400">let</span> <span className="text-blue-300">APP_NAME</span>: <span className="text-cyan-300">string</span> = <span className="text-green-400">"Neolyx Calculator"</span>;

<span className="text-purple-400">fn</span> <span className="text-yellow-300">increment</span>() {`{`}
    global_counter++;
{`}`}
            </code></pre>
            <p>
              Behind the scenes, we've carefully mapped these to statically allocated and safely initialized C globals, ensuring they work flawlessly within the AOT compilation pipeline without incurring overhead.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Else-If Chains & Control Flow</h2>
            <p>
              Recursive `else if` chains are now fully supported and flawlessly parsed. Previously, complex branching required nested `if` statements. Now, Reox handles deep `else if` chains smoothly, generating flat and efficient C conditionals.
            </p>
            <p>
              Additionally, loop control statements <code>break</code> and <code>continue</code> are now officially supported within the REPL and runtime interpreter, ensuring consistent behavior across both AOT and JIT execution modes.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Binary & Hexadecimal Literals</h2>
            <p>
              For low-level systems programming and bit-masking in NeolyxOS, we've added support for binary and hexadecimal integer literals. You can use the <code>0b</code> prefix for binary and <code>0x</code> for hex, along with underscores for readability.
            </p>
            <pre className="text-sm font-mono text-gray-300"><code>
<span className="text-purple-400">let</span> <span className="text-blue-300">flags</span> = <span className="text-orange-400">0b1010_1100</span>;
<span className="text-purple-400">let</span> <span className="text-blue-300">color_mask</span> = <span className="text-orange-400">0xFF00FF</span>;
            </code></pre>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Strict Mutability Enforcement</h2>
            <p>
              Reox is immutable-by-default. We've tightened the Type Checker to strictly enforce mutability rules at compile-time. Any attempt to reassign a variable declared with <code>let</code> (without the <code>mut</code> keyword) will now accurately trigger a <code>TypeError</code> before execution, guaranteeing safety.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">VS Code Extension v1.2.3</h2>
            <p>
              To round out this release, we've updated the official Reox Language Extension for VS Code and Open VSX. The new v1.2.3 release includes full syntax highlighting for string interpolation, binary literals, and the new <code>variant</code> keyword.
            </p>
            
            <p className="mt-8 pt-8 border-t border-white/5">
              Reox v1.1.1 is available now via the package manager or as a standalone binary on our <a href="https://github.com/KetiveeAI/Reox/releases/tag/v1.1.1" className="text-primary hover:underline">GitHub Releases page</a>. 
            </p>
          </div>
        </article>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#020205]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 grayscale opacity-50">
              <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
            </div>
            <span className="text-gray-500 font-semibold">Reox</span>
          </div>
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} NeolyxOS Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
