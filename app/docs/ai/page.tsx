export default function AIDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">AI Integration</h1>
        <p className="text-xl text-gray-400 mb-8">
          Reox makes Large Language Models a first-class citizen in your code.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">The `ai` Keyword</h2>
        <p className="text-gray-400">
          Define AI assistants directly in your application code. Reox handles the context management and API calls to the system-level LLM service.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">ai</span> <span className="text-yellow-300">assistant</span> <span className="text-white">{`{`}</span>{"\n"}
              {"    "}<span className="text-blue-300">model</span>: <span className="text-green-400">"neolyx-gpt"</span>{"\n"}
              {"    "}<span className="text-blue-300">temperature</span>: <span className="text-orange-400">0.7</span>{"\n\n"}
              {"    "}<span className="text-purple-400">fn</span> <span className="text-yellow-300">suggest_reply</span>(<span className="text-blue-300">email</span>: <span className="text-cyan-300">string</span>) {`->`} <span className="text-cyan-300">string</span> <span className="text-white">{`{`}</span>{"\n"}
              {"        "}<span className="text-purple-400">return</span> ai.prompt(<span className="text-green-400">"Draft a polite reply to: {'{email}'}"</span>);{"\n"}
              {"    "}<span className="text-white">{`}`}</span>{"\n"}
              <span className="text-white">{`}`}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Native Performance</h2>
        <p className="text-gray-400">
          Unlike calling REST APIs in other languages, Reox AI calls are optimized IPC (Inter-Process Communication) messages to the NeolyxOS Neural Engine service, ensuring low latency and privacy.
        </p>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <a href="/docs/stdlib" className="text-primary hover:text-blue-400 font-medium">← Back to Standard Library</a>
        <a href="/community" className="text-primary hover:text-blue-400 font-medium">Next: Join Community →</a>
      </div>
    </div>
  );
}
