"use client";

export function BrowserButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <a
        href="#chrome"
        className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-white font-semibold">Add to Chrome</div>
          <div className="text-gray-400 text-sm">Free • 2M+ users</div>
        </div>
      </a>
      
      <a
        href="#firefox"
        className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-white font-semibold">Add to Firefox</div>
          <div className="text-gray-400 text-sm">Free • 500K+ users</div>
        </div>
      </a>
    </div>
  );
}
