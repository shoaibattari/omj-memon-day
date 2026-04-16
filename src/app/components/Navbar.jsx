import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaHeartbeat } from "react-icons/fa";

export default function Navbar({ showBack = false }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-pink-100 py-3 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/omj-logo.png"
              width={50}
              height={50}
              alt="OMJ Logo"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </div>

          <div className="leading-tight border-l-2 border-slate-100 pl-3">
            <p className="font-black text-slate-800 text-xs md:text-sm uppercase tracking-tight">
              Okhai Memon Jamat
            </p>
            <div className="flex items-center gap-1">
              <FaHeartbeat className="text-pink-500 text-[10px]" />
              <p className="text-[9px] md:text-[10px] font-bold text-pink-600 tracking-wider uppercase">
                Health Committee
              </p>
            </div>
          </div>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4">
          {showBack ? (
            <Link
              href="/"
              className="flex items-center gap-2 text-[11px] font-black text-slate-500 hover:text-pink-600 transition-colors uppercase tracking-widest"
            >
              <FaChevronLeft size={10} /> Back to Home
            </Link>
          ) : (
            <div className="hidden md:block">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                Awareness Program 2026
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
