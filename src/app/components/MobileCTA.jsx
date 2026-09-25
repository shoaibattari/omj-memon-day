"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const REGISTER_URL = "https://forms.gle/5DPXQKVufUGSsJ3T6";

// Sticky bottom action bar on mobile, shown once the hero has scrolled away
export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-[90] px-3 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 bg-gradient-to-t from-[#020713] via-[#020713]/90 to-transparent transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex gap-2">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="flex-[2] flex items-center justify-center gap-2 h-12 rounded-full text-sm font-extrabold uppercase tracking-wide text-[#030b1e] bg-gradient-to-r from-[#ffdb15] to-[#f59e0b] shadow-[0_4px_20px_rgba(255,219,21,0.4)]"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          📋 Register Free
        </a>
        <Link
          href="/pass"
          tabIndex={visible ? 0 : -1}
          className="flex-1 flex items-center justify-center gap-1.5 h-12 rounded-full text-sm font-bold uppercase tracking-wide text-white bg-[#0b2152]/90 border border-sky-400/40 backdrop-blur-md"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          🎟️ Pass
        </Link>
      </div>
    </div>
  );
}
