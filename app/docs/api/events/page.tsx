export default function EventsApiDocs() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-6">Event System</h1>
        <p className="text-xl text-gray-400 mb-8">
          Handling user interactions with declarative event listeners.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Event Handlers</h2>
        <p className="text-gray-400">
          Events are attached to widgets using setter functions that accept a callback ID.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2 mb-4">
            <li><code>button_set_on_click(view, id)</code> - Triggered when a button is clicked.</li>
            <li><code>input_set_on_change(view, id)</code> - Triggered when an input value changes.</li>
            <li><code>input_set_on_submit(view, id)</code> - Triggered when the user submits input.</li>
        </ul>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold text-gray-200">Callback Registration</h2>
        <p className="text-gray-400">
          Callbacks are typically registered in the application state management or via extern definitions.
        </p>
        <div className="glass bg-[#0d0f16] p-4 rounded-lg border border-white/10 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300">
            <code>
              <span className="text-purple-400">let</span> <span className="text-blue-300">btn</span>: <span className="text-yellow-300">View</span> = <span className="text-yellow-300">button_view</span>(<span className="text-green-400">"Save"</span>);{"\n"}
              <span className="text-purple-400">let</span> <span className="text-blue-300">callback_id</span>: <span className="text-cyan-300">int</span> = <span className="text-orange-400">101</span>; <span className="text-gray-500">// Handle to registered function</span>{"\n"}
              <span className="text-yellow-300">button_set_on_click</span>(btn, callback_id);
            </code>
          </pre>
        </div>
      </section>

      <div className="pt-8 flex justify-between border-t border-white/5 mt-8">
        <a href="/docs/api/widgets" className="text-primary hover:text-blue-400 font-medium">← Back to Widgets</a>
        <a href="/docs" className="text-primary hover:text-blue-400 font-medium">Back to Home</a>
      </div>
    </div>
  );
}
