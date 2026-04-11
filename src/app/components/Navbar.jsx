import Link from "next/link";
import Image from "next/image";

export default function Navbar({ showBack = false }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/omj-logo.png"
            width={80}
            height={80}
            alt="Logo"
            className="h-12 w-auto"
          />
          <div className="leading-tight">
            <p className="font-black text-blue-900 text-sm uppercase">
              Okhai Memon Jamat
            </p>
            <p className="text-[10px] font-bold text-red-600 tracking-widest uppercase">
              Memon Day 2026
            </p>
          </div>
        </Link>
        {showBack && (
          <Link
            href="/"
            className="text-sm font-black text-slate-500 hover:text-blue-900"
          >
            ← BACK TO HOME
          </Link>
        )}
      </div>
    </nav>
  );
}
