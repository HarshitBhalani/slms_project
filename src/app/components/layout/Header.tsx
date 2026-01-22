"use client";

import { useState } from "react";
import NavLinks from "./NavLinks";

export default function Header() {
  const [activeRole, setActiveRole] = useState<"shipper" | "trucker">("shipper");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-bold text-orange-600 tracking-wide">
          LOGO
        </a>

        {/* Nav */}
        <div className="hidden md:block">
          <NavLinks />
        </div>

        {/* ✅ Selectable Role Buttons */}
        <div className="flex items-center gap-3">
          {/* Shipper */}
          <button
            type="button"
            onClick={() => setActiveRole("shipper")}
            className={`
              relative px-4 py-2 rounded-xl text-sm font-semibold
              border backdrop-blur-xl overflow-hidden transition-all duration-200
              active:scale-[0.98]
              ${
                activeRole === "shipper"
                  ? "bg-orange-500 text-white border-orange-500 shadow-[0_10px_24px_rgba(249,115,22,0.25)]"
                  : "bg-white/25 text-orange-700 border-orange-200 hover:bg-white/40 hover:border-orange-300 shadow-[0_8px_24px_rgba(249,115,22,0.10)]"
              }
            `}
            aria-pressed={activeRole === "shipper"}
          >
            {/* glossy highlight */}
            <span
              className="
                pointer-events-none absolute -top-6 -left-10
                w-24 h-24 rounded-full
                bg-white/60 blur-2xl opacity-70
              "
            />
            Shipper
          </button>

          {/* Trucker */}
          <button
            type="button"
            onClick={() => setActiveRole("trucker")}
            className={`
              relative px-4 py-2 rounded-xl text-sm font-semibold
              border backdrop-blur-xl overflow-hidden transition-all duration-200
              active:scale-[0.98]
              ${
                activeRole === "trucker"
                  ? "bg-orange-500 text-white border-orange-500 shadow-[0_10px_24px_rgba(249,115,22,0.25)]"
                  : "bg-white/25 text-orange-700 border-orange-200 hover:bg-white/40 hover:border-orange-300 shadow-[0_8px_24px_rgba(249,115,22,0.10)]"
              }
            `}
            aria-pressed={activeRole === "trucker"}
          >
            {/* glossy highlight */}
            <span
              className="
                pointer-events-none absolute -top-6 -left-10
                w-24 h-24 rounded-full
                bg-white/60 blur-2xl opacity-70
              "
            />
            Trucker
          </button>
        </div>
      </div>
    </header>
  );
}
