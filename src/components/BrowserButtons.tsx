"use client";

export function BrowserButtons() {
  const handleChromeInstall = () => {
    window.open("https://chromewebstore.google.com/detail/tabgenius/YOUR_CHROME_EXTENSION_ID", "_blank");
  };

  const handleFirefoxInstall = () => {
    window.open("https://addons.mozilla.org/en-US/firefox/addon/tabgenius/", "_blank");
  };

  const handleEdgeInstall = () => {
    window.open("https://microsoftedge.microsoft.com/addons/detail/tabgenius/YOUR_EDGE_EXTENSION_ID", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <button
        onClick={handleChromeInstall}
        className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#4285F4"/>
            <circle cx="12" cy="12" r="6" fill="#34A853"/>
            <circle cx="12" cy="12" r="3" fill="#FBBC05"/>
            <path d="M12 6a6 6 0 0 0-5.2 3h10.4A6 6 0 0 0 12 6z" fill="#EA4335"/>
            <path d="M6.8 15a6 6 0 0 0 5.2 3 6 6 0 0 0 5.2-3H6.8z" fill="#34A853"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-white font-semibold">Add to Chrome</div>
          <div className="text-gray-400 text-sm">Free • 2M+ users</div>
        </div>
      </button>
      
      <button
        onClick={handleFirefoxInstall}
        className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#FF6611"/>
            <path d="M17 8c-1-2-3-3-5-3-3 0-5 2-5 5s2 5 5 5c2 0 4-1 5-3" fill="#FF9500"/>
            <path d="M12 9c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z" fill="#FF6611"/>
            <circle cx="12" cy="12" r="1.5" fill="#FFA500"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-white font-semibold">Add to Firefox</div>
          <div className="text-gray-400 text-sm">Free • 500K+ users</div>
        </div>
      </button>

      <button
        onClick={handleEdgeInstall}
        className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#0078D4"/>
            <path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4V8z" fill="#40E0D0"/>
            <path d="M12 6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2z" fill="#0078D4"/>
            <circle cx="12" cy="10" r="1" fill="#FFFFFF"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-white font-semibold">Add to Edge</div>
          <div className="text-gray-400 text-sm">Free • 100K+ users</div>
        </div>
      </button>
    </div>
  );
}
