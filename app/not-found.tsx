import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background grid-bg px-4 text-center">
      <div className="glass p-12 rounded-2xl border border-white/5 flex flex-col items-center max-w-lg w-full">
        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          The page you are looking for has been moved, deleted, or possibly never existed.
        </p>
        
        <div className="flex gap-4">
          <Link 
            href="/"
            className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105"
          >
            Go Home
          </Link>
          <Link 
            href="/docs"
            className="glass hover:bg-white/10 text-white px-6 py-3 rounded-full font-bold transition-all"
          >
            Browse Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
