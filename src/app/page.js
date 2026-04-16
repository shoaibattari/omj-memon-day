import Link from "next/link";
import Image from "next/image";
import {
  FaTicketAlt,
  FaCamera,
  FaFilePrescription,
  FaRibbon,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar showBack={false} />

      {/* --- HERO SECTION --- */}
      <header className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 py-20 px-6 text-white text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex justify-center gap-6 mb-8 items-center bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
            <img
              src="/omj-logo.png"
              className="h-12 md:h-16 w-auto"
              alt="OMJ Logo"
            />
            <div className="h-10 w-[2px] bg-white/40"></div>
            <p className="text-sm font-bold leading-tight max-w-[150px]">
              Memon Medical Institute Hospital
            </p>
          </div>

          <p className="text-white font-black tracking-[0.3em] uppercase mb-4 text-sm md:text-base bg-white/20 px-6 py-2 rounded-full">
            In Collaboration with Memon Medical Institute Hospital
          </p>

          <h1 className="text-5xl md:text-8xl font-black mb-4 leading-tight">
            BREAST CANCER <br />
            <span className="text-white italic drop-shadow-lg">
              Awareness Program
            </span>
          </h1>

          <p className="text-xl md:text-3xl font-black text-white max-w-3xl mx-auto mb-10 leading-relaxed uppercase tracking-tight">
            HEALTH SEMINAR{" "}
            <span className="text-sm font-medium tracking-normal">
              (Breast Examination)
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pass"
              className="bg-white text-pink-600 hover:bg-pink-50 transition-all px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <FaTicketAlt className="size-5" /> GET FREE ENTRY PASS
            </Link>
            <Link
              href="/dp"
              className="bg-white text-pink-600 hover:bg-pink-50 transition-all px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <FaTicketAlt className="size-5" /> CREATE DP
            </Link>
          </div>
        </div>
      </header>

      {/* --- EVENT POSTER / FLYER --- */}
      <div className="flex justify-center items-center w-full mt-[-50px] relative z-20 px-4">
        <Image
          src="/event-post.jpeg" // New event poster
          alt="Health Seminar"
          width={400}
          height={600}
          className="w-auto object-contain rounded-3xl shadow-2xl border-4 border-white"
        />
      </div>

      {/* --- EVENT HIGHLIGHTS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
        <div className="text-center mb-16">
          <p className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-2">
            Collaboration Program
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">
            Special Free Medical Support
          </h2>
          <div className="h-1.5 w-24 bg-pink-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Awareness */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 text-center hover:shadow-2xl hover:border-pink-100 transition-all">
            <div className="bg-pink-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <FaRibbon className="text-pink-500 text-4xl" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-3">
              AWARENESS & EDUCATION
            </h3>
            <p className="text-slate-500 font-medium text-sm sm:text-base">
              Vital information about early detection and breast cancer
              prevention methods.
            </p>
          </div>

          {/* Card 2: Checkup */}
          <div className="bg-pink-500 p-8 rounded-[2.5rem] shadow-xl text-center hover:shadow-2xl transition-all text-white scale-105">
            <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <FaFilePrescription className="text-pink-500 text-4xl" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">
              FREE CHECKUP
            </h3>
            <p className="text-pink-100 font-medium text-sm sm:text-base">
              Note: Free Breast Examination Checkup included for all
              participants.
            </p>
          </div>

          {/* Card 3: Dr. Saima Awan */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 text-center hover:shadow-2xl hover:border-pink-100 transition-all">
            <div className="w-24 h-24 rounded-full border-4 border-pink-500 overflow-hidden mx-auto mb-6 shadow-xl">
              <img
                src="./speaker.jpeg"
                className="w-full h-full object-cover"
                alt="Dr. Saima"
              />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-2 leading-tight">
              DR. SAIMA AWAN
            </h3>
            <div className="bg-pink-100 text-pink-700 text-[10px] font-black px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-widest">
              Guest Speaker
            </div>
            <p className="text-slate-500 font-medium text-sm">
              General and Breast Surgeon, Memon Medical Institute Hospital
              (MMI).
            </p>
          </div>
        </div>
      </section>

      {/* --- INFO BANNER (Details according to banner) --- */}
      <section className="bg-pink-500 py-16 px-6 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex gap-2 items-center mb-4 bg-white/20 px-4 py-1.5 rounded-full border border-white/30">
              <FaCheckCircle className="text-white size-4" />
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                Confirmed Event Details
              </p>
            </div>
            <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">
              Seminar Schedule
            </h3>
            <p className="text-pink-100 text-xl font-bold uppercase tracking-wide mb-1">
              Saturday, 18 April | 4:00 PM
            </p>
            <p className="text-white text-sm font-bold">
              Husein Ebrahim Sports Complex & Community Centre, Karachi
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/20 text-center">
              <p className="text-xs font-black uppercase tracking-widest text-pink-100">
                Chairman, Health Committee
              </p>
              <p className="text-2xl font-black text-white uppercase">
                Shahid Hussain Gatta
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
