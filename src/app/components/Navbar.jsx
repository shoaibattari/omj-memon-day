"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const REGISTER_URL = "https://forms.gle/5DPXQKVufUGSsJ3T6";

export default function Navbar({ showBack = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[100] px-3 sm:px-5 pt-3">
      <nav
        aria-label="Main"
        className={`mx-auto max-w-6xl h-14 sm:h-16 flex items-center justify-between gap-3 pl-2 pr-2 sm:pl-3 sm:pr-3 rounded-2xl sm:rounded-full border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-[#040e24]/85 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.55)]"
            : "bg-[#071638]/55 border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
        }`}
      >
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-2.5 min-w-0">
          <span className="shrink-0 rounded-full p-[2px] bg-gradient-to-br from-[#ffdb15] via-[#f59e0b] to-[#38bdf8]">
            <span className="relative block w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white">
              <Image src="/omj-logo.png" fill sizes="40px" alt="OMJ" className="object-contain p-0.5" priority />
            </span>
          </span>
          <span className="min-w-0 leading-none" style={{ fontFamily: "Oswald, sans-serif" }}>
            <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-200/60 mb-1 truncate">
              The Okhai Memon Jamat
            </span>
            <span className="block text-sm sm:text-lg font-bold uppercase tracking-wide text-white truncate">
              <span className="hidden min-[380px]:inline">Karachi </span><span className="text-[#ffdb15]">Youth Talk</span>
              <span className="hidden sm:inline"> 2026</span>
            </span>
          </span>
        </Link>

        {/* Event chip (desktop) */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-sky-100/80">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          Sun, 27 Sep · 7:00 PM
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {showBack ? (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-4 rounded-full text-sm font-semibold text-white/90 bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:text-white transition-colors"
            >
              <span aria-hidden>←</span> Home
            </Link>
          ) : (
            <>
              <Link
                href="/dp"
                className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-3 sm:px-4 rounded-full text-sm font-semibold text-white/90 hover:text-[#ffdb15] hover:bg-white/[0.06] transition-colors"
              >
                <span aria-hidden className="hidden sm:inline">🖼️</span>
                <span>
                  <span className="hidden sm:inline">Make </span>DP
                </span>
              </Link>
              <Link
                href="/pass"
                className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-3 sm:px-4 rounded-full text-sm font-semibold text-white/90 hover:text-[#ffdb15] hover:bg-white/[0.06] transition-colors"
              >
                <span aria-hidden className="hidden sm:inline">🎟️</span>
                <span>
                  <span className="hidden sm:inline">Entry </span>Pass
                </span>
              </Link>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 h-9 sm:h-10 px-4 sm:px-5 rounded-full text-sm font-bold text-[#030b1e] bg-gradient-to-r from-[#ffdb15] to-[#f59e0b] shadow-[0_4px_18px_rgba(255,219,21,0.35)] hover:shadow-[0_6px_26px_rgba(255,219,21,0.6)] transition-shadow"
              >
                Register
                <span aria-hidden className="hidden sm:inline transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
