"use client";

import { useState } from "react";

export function FirefoxButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleFirefoxInstall = () => {
    window.open("https://addons.mozilla.org/en-US/firefox/addon/tabgenius/", "_blank");
  };

  return (
    <button
      aria-label="Add TabGenius to Firefox"
      onClick={handleFirefoxInstall}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={
        `group relative flex items-center justify-center gap-2
         bg-gradient-to-r from-orange-400 to-amber-600 hover:from-orange-500 hover:to-red-600
         text-white px-4 py-3 rounded-xl font-semibold shadow-md
         transition-all duration-200 
         hover:scale-[1.03] hover:shadow-lg
         focus:outline-none focus:ring-2 focus:ring-orange-300
         w-full max-w-[200px] mx-auto overflow-hidden`
      }
    >
      {/* Firefox Icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* A more detailed, modern Firefox icon SVG: */}
        <path d="M12 2C6.479 2 2 6.392 2 11.772c0 4.437 3.331 8.099 8.418 8.583l.012-.001c-.014-.001-.027-.001-.04-.002l.015-.001a9.003 9.003 0 0 1-2.248-2.175c-.217-.294-.039-.627.317-.627.137 0 .3.054.404.145a7.416 7.416 0 0 0 5.403 2.098c.1 0 .189-.007.28-.01.56-.022 1.11-.107 1.652-.24A8.097 8.097 0 0 0 22 11.772C22 6.392 17.521 2 12 2zm4.334 7.085c-.243-.385-.535-.737-.873-1.048-1.026-1.049-2.456-1.522-3.904-1.234-.471.094-.933.262-1.375.488-.438.225-.849.51-1.223.855a5.123 5.123 0 0 0-1.211 1.695c-.22.423-.343.885-.354 1.372-.013.627.169 1.256.475 1.798.514.923 1.423 1.591 2.488 1.766.35.06.701.067 1.05.023.374-.048.737-.168 1.082-.362.335-.189.638-.43.898-.713.224-.245.421-.517.564-.817a1.066 1.066 0 0 0-.041-.987c-.146-.306-.41-.506-.719-.481a.84.84 0 0 0-.612.349.662.662 0 0 1-.576.246c-.296-.03-.573-.212-.827-.451-.236-.207-.419-.504-.474-.786-.07-.352.129-.713.438-.866.524-.269 1.183-.39 1.823-.29.679.105 1.375.462 1.817 1.022.235.296.395.644.554.995zm-8.646 6.497c.023-.193.234-.308.406-.222.813.404 1.714.665 2.66.751A7.088 7.088 0 0 1 6.536 11.78a.308.308 0 0 1 .064-.323c.118-.139.334-.124.397.039.256.697.777 1.345 1.46 1.813zm5.2 4.183c.353.034.704.044 1.055.032a8.096 8.096 0 0 0 2.969-.578c.112-.046.173-.183.125-.302a.219.219 0 0 0-.246-.131c-1.324.255-2.71.201-3.94-.144a8.092 8.092 0 0 1-.002 0c-.129.24-.226.507-.23.796a.3.3 0 0 0 .269.327z" />
      </svg>

      <span className="text-base font-semibold z-10">Add to Firefox</span>

      {/* Soft white overlay on hover */}
      <div
        className={`absolute inset-0 bg-white/10 pointer-events-none transition-opacity duration-200 rounded-xl ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}
