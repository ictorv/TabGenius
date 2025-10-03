"use client";

export function BrowserButtons() {
  const handleChromeInstall = () => {
    window.open(
      "https://chromewebstore.google.com/detail/tabgenius/YOUR_CHROME_EXTENSION_ID", // Replace with real ID
      "_blank"
    );
  };

  const handleFirefoxInstall = () => {
    window.open(
      "https://addons.mozilla.org/en-US/firefox/addon/tabgenius/",
      "_blank"
    );
  };

  const handleEdgeInstall = () => {
    window.open(
      "https://microsoftedge.microsoft.com/addons/detail/tabgenius/hlnpfidolhmcgjgobmnnigdckhjpeibi",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* Chrome */}
      <button
        onClick={handleChromeInstall}
        className="
          group flex items-center gap-3 w-full sm:w-auto
          bg-white border border-zinc-100 rounded-xl px-6 py-4 shadow-md
          hover:shadow-lg hover:border-emerald-300 transition-all duration-200
          hover:-translate-y-0.5
          focus:outline-none focus:ring-2 focus:ring-blue-100
        "
        aria-label="Add TabGenius to Chrome"
      >
        <div className="w-9 h-9 bg-zinc-50 rounded-lg flex items-center justify-center shadow-sm">
          {/* Chrome SVG: true multi-color, not just circles */}
          <svg width="22" height="22" viewBox="0 0 512 512" fill="none" aria-hidden="true">
            <circle cx="256" cy="256" r="256" fill="#F2F2F2"/>
            <path d="M478.5 187H266V297h120c-18.7 51.8-67.9 88-124 88-67.4 0-122-54.6-122-122 0-22 5.8-42.6 16-60.3l-52-89.8C60.9 157.3 38 204.5 38 256c0 120.8 97.2 218 218 218 106.9 0 196.6-77.3 214.6-179l-52-89.8a121.6 121.6 0 0 0-22.1-18.2z" fill="#34A853"/>
            <path d="M266 38c49.5 0 95.2 16.2 132 43.1L378.1 140C354 124.7 326.2 115 297 115c-56 0-105.3 36.2-124 88H73.5C104.2 91.8 186.1 38 266 38z" fill="#EA4335"/>
            <path d="M482.7 355l-52-89.8C420.2 264.3 427 241.1 427 216c0-45.1-38.9-82-89-87V38.1c87.8 6.3 154 82.3 154 177.9 0 40.1-13.2 77.1-36.3 106.1z" fill="#FBBC05"/>
            <circle cx="266" cy="256" r="63" fill="#4285F4"/>
            <circle cx="266" cy="256" r="35" fill="#fff"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-zinc-900 font-semibold text-base">
            Add to Chrome
          </div>
          <div className="text-zinc-600 text-sm">
            Free&nbsp;•&nbsp;2M+ users
          </div>
        </div>
      </button>

      {/* Firefox */}
      <button
        onClick={handleFirefoxInstall}
        className="
          group flex items-center gap-3 w-full sm:w-auto
          bg-white border border-zinc-100 rounded-xl px-6 py-4 shadow-md
          hover:shadow-lg hover:border-emerald-300 transition-all duration-200
          hover:-translate-y-0.5
          focus:outline-none focus:ring-2 focus:ring-orange-100
        "
        aria-label="Add TabGenius to Firefox"
      >
        <div className="w-9 h-9 bg-zinc-50 rounded-lg flex items-center justify-center shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {/* More stylized, modern fox */}
            <circle cx="12" cy="12" r="12" fill="#fff6ef"/>
            <path
              d="M4.5 14.5c-.05 3.5 3.5 5.8 6.8 5.7 3.7-.04 6.4-2.6 7-5.3-.9 1.1-2.1 2.1-4.3 2.2 2.3-1.3 3.6-3.6 3.5-6.1-1.6-1.7-3.9-2.5-6.1-2-2 .4-3.5 2-4.2 3.7 1-.6 2-.8 2-.8-.6.7-.8 1.5-.6 2.1z"
              fill="url(#firefox-orange-gradient)"
            />
            <defs>
              <linearGradient id="firefox-orange-gradient" x1="0" y1="0" x2="18" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9500"/>
                <stop offset="1" stopColor="#FF6611"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-zinc-900 font-semibold text-base">
            Add to Firefox
          </div>
          <div className="text-zinc-600 text-sm">
            Free&nbsp;•&nbsp;500K+ users
          </div>
        </div>
      </button>

      {/* Edge */}
      <button
        onClick={handleEdgeInstall}
        className="
          group flex items-center gap-3 w-full sm:w-auto
          bg-white border border-zinc-100 rounded-xl px-6 py-4 shadow-md
          hover:shadow-lg hover:border-emerald-300 transition-all duration-200
          hover:-translate-y-0.5
          focus:outline-none focus:ring-2 focus:ring-cyan-100
        "
        aria-label="Add TabGenius to Edge"
      >
        <div className="w-9 h-9 bg-zinc-50 rounded-lg flex items-center justify-center shadow-sm">
          {/* Modern Edge logo */}
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="#e6f7fa"/>
            <path
              d="M8 19c1.4 4.5 7.2 6.6 12 3.5-2.2 1-5.2.8-7.4-1.2 4 .2 7.2-2.8 6.2-8C15.2 11.3 11.7 12.8 10 16c0-4.2 4.8-7.6 9.8-6.4A10 10 0 008 19Z"
              fill="url(#edge-gradient)"
            />
            <defs>
              <linearGradient id="edge-gradient" x1="8" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#40E0D0"/>
                <stop offset="1" stopColor="#0078D4"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-zinc-900 font-semibold text-base">
            Add to Edge
          </div>
          <div className="text-zinc-600 text-sm">
            Free&nbsp;•&nbsp;100K+ users
          </div>
        </div>
      </button>
    </div>
  );
}
