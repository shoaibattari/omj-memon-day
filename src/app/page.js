import Link from "next/link";
import Image from "next/image";
import {
  FaTicketAlt,
  FaCamera,
  FaStar,
  FaBirthdayCake,
  FaGift,
  FaUsers,
} from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 py-12 lg:py-12 px-6 text-white text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex justify-center gap-4">
            <img
              src="/omj-logo.png"
              className="h-16 md:h-20 w-auto drop-shadow-2xl"
              alt="OMJ Logo"
            />
            <img
              src="/wmd-logo.jpeg"
              className="h-16 md:h-20 w-auto rounded-full border-2 border-white shadow-2xl"
              alt="WMD Logo"
            />
          </div>

          <p className="text-orange-400 font-black tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            The Okhai Memon Jamat Presents
          </p>

          <h1 className="text-5xl md:text-8xl font-black mb-4 leading-tight">
            WORLD MEMON DAY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 italic">
              Celebration 2026
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-bold text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            With Special Persons of All Memon Community. Join us for the biggest{" "}
            <span className="text-orange-400">Memon Power Show!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pass"
              className="bg-red-600 hover:bg-red-700 transition-all px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1"
            >
              <FaTicketAlt /> GENERATE ENTRY PASS
            </Link>
            <Link
              href="/dp"
              className="bg-white text-blue-900 hover:bg-blue-50 transition-all px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1"
            >
              <FaCamera /> CREATE SOCIAL DP
            </Link>
          </div>
        </div>
      </header>
      <div className="flex justify-center items-center w-full mt-3">
        <Image src="/event-post.jpeg" alt="event" width={350} height={500} className="w-auto object-contain" />
      </div>

      {/* --- EVENT HIGHLIGHTS SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 uppercase">
            Lots of Activities & Gifts
          </h2>
          <div className="h-1.5 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-b-8 border-orange-400 text-center hover:shadow-2xl transition-shadow">
            <div className="bg-orange-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FaBirthdayCake className="text-orange-500 text-4xl" />
            </div>
            <h3 className="text-2xl font-black text-blue-900 mb-3">
              CAKE CUTTING
            </h3>
            <p className="text-slate-500 font-medium">
              A grand ceremony to celebrate our global heritage and unity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-b-8 border-blue-900 text-center hover:shadow-2xl transition-shadow">
            <div className="bg-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FaGift className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-2xl font-black text-blue-900 mb-3">
              FUN & GIFTS
            </h3>
            <p className="text-slate-500 font-medium">
              Exciting activities and special gifts curated for our special
              guests.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-b-8 border-red-600 text-center hover:shadow-2xl transition-shadow">
            <div className="bg-red-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FaUsers className="text-red-600 text-4xl" />
            </div>
            <h3 className="text-2xl font-black text-blue-900 mb-3">
              FAMILY GATHERING
            </h3>
            <p className="text-slate-500 font-medium">
              A special invitation for all Memon families to be part of this
              gathering.
            </p>
          </div>
        </div>
      </section>

      {/* --- INFO BANNER --- */}
      <section className="bg-blue-900 py-16 px-6 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">
              Save The Date
            </h3>
            <p className="text-blue-200 text-lg font-bold">
              Sunday, April 12, 2026 | 6:00 PM
            </p>
            <p className="text-orange-400 font-black mt-1">
              H.E.F Family Park, Huseinabad, Karachi
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20">
              <p className="text-xs font-black uppercase tracking-widest text-center">
                Program Lead
              </p>
              <p className="text-xl font-black text-orange-400 uppercase">
                Kawish Parekh
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
