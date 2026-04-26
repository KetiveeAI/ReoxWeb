"use client";

import { useState } from "react";
import Image from "next/image";

type CodeExample = {
  id: string;
  name: string;
  code: string;
};

const examples: CodeExample[] = [
  {
    id: "ui",
    name: "UI (Declarative)",
    code: `window Calculator {
    title: "Calculator"
    size: (400, 300)

    @Bind result: string = "0"

    view {
        vstack(gap: 12) {
            text(result)
                .font_size(32)
                .color(0xFFFFFF)

            hstack(gap: 8) {
                button("7").on_click(action { append("7") })
                button("8").on_click(action { append("8") })
                button("9").on_click(action { append("9") })
            }
        }
    }
}`
  },
  {
    id: "async",
    name: "Async Data",
    code: `async fn fetch_user_data(id: int) -> Result<User, Error> {
    // Await non-blocking network I/O
    let response = await net::http::get("https://api.example.com/users/\(id)");
    
    if response.status == 200 {
        return Ok(json::parse<User>(response.body));
    } else {
        return Err(Error::Network("Failed to fetch user"));
    }
}

// Spawns a lightweight coroutine
spawn {
    match await fetch_user_data(42) {
        Ok(user) => print("Fetched user: \(user.name)"),
        Err(e) => print("Error: \(e)"),
    }
}`
  },
  {
    id: "pattern",
    name: "Pattern Match",
    code: `variant Action {
    Quit,
    Move { x: int, y: int },
    Write(string),
    ChangeColor(int, int, int),
}

fn process_action(action: Action) {
    match action {
        Action::Quit => exit(0),
        Action::Move { x, y } => print("Moving to \(x), \(y)"),
        Action::Write(text) => print("Writing: \(text)"),
        Action::ChangeColor(r, g, b) => {
            set_theme_color(r, g, b);
            print("Color updated");
        }
    }
}`
  },
  {
    id: "ffi",
    name: "C FFI",
    code: `// Zero-overhead C interop
extern "C" {
    fn malloc(size: uint) -> ptr<void>;
    fn free(p: ptr<void>);
    fn printf(format: ptr<char>, ...) -> int;
}

fn main() {
    unsafe {
        // Direct memory allocation bypassing GC
        let buffer = malloc(1024);
        
        let msg = c"Hello from Reox to C!\n";
        printf(msg.as_ptr());
        
        free(buffer);
    }
}`
  }
];

export default function TabbedCode() {
  const [activeTab, setActiveTab] = useState(examples[0].id);

  const activeExample = examples.find((ex) => ex.id === activeTab) || examples[0];

  return (
    <div className="w-full max-w-5xl my-16 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
      <div className="flex overflow-x-auto gap-2 mb-4 pb-2 scrollbar-hide">
        {examples.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setActiveTab(ex.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === ex.id
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200"
            }`}
          >
            {ex.name}
          </button>
        ))}
      </div>

      <div className="glass rounded-xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-500">
        <div className="bg-[#0f111a] px-4 py-3 flex justify-between items-center border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-gray-500 font-mono">example.rx</span>
          <div className="flex gap-2 opacity-70">
            <Image src="/logo.svg" alt="Reox" width={14} height={14} className="grayscale" />
          </div>
        </div>
        <div className="p-6 md:p-8 overflow-x-auto bg-[#0a0a0f] min-h-[350px]">
          <pre className="font-mono text-sm md:text-base leading-relaxed text-gray-300">
            <code>
              {/* Basic syntax highlighting simulation */}
              {activeExample.code.split('\\n').map((line, i) => {
                let highlighted = line
                  .replace(/\\b(window|view|button|text|vstack|hstack|fn|let|async|await|match|variant|unsafe|extern|return|if|else)\\b/g, '<span class="text-purple-400">$1</span>')
                  .replace(/\\b(string|int|uint|void|ptr|Result|Error|Action)\\b/g, '<span class="text-cyan-300">$1</span>')
                  .replace(/\\b(Ok|Err|Quit|Move|Write|ChangeColor)\\b/g, '<span class="text-yellow-300">$1</span>')
                  .replace(/("[^"]*")/g, '<span class="text-green-400">$1</span>')
                  .replace(/\\b(\\d+)\\b/g, '<span class="text-orange-400">$1</span>')
                  .replace(/(@Bind)/g, '<span class="text-secondary">$1</span>')
                  .replace(new RegExp("(\\\\/\\\\/.*)", "g"), '<span class="text-gray-500">$1</span>');
                
                return <div key={i} dangerouslySetInnerHTML={{ __html: highlighted || ' ' }} />;
              })}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
