import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-pink-100 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mb-12">
          {/* Brand/Collaboration Section */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src="./omj-logo.png" className="h-12 w-auto" alt="OMJ Logo" />
              <div className="h-8 w-[2px] bg-pink-200"></div>
              <p className="text-pink-600 font-black text-xl italic leading-none">
                HEALTH
              </p>
            </div>
            <p className="text-slate-500 font-medium max-w-xs text-sm sm:text-base">
              Providing medical awareness and support through the OMJ Health
              Committee.
            </p>
          </div>

          {/* Health Committee Credits - Updated from Event Poster */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-12 w-full lg:w-auto">
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-black text-pink-600 uppercase tracking-widest mb-1">
                Chairman Health
              </p>
              <p className="text-sm font-bold text-slate-700">
                Shahid Hussain Gatta
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-black text-pink-600 uppercase tracking-widest mb-1">
                Hon. Gen. Secretary
              </p>
              <p className="text-sm font-bold text-slate-700 leading-tight">
                Muhammad Arif Suriya
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-black text-pink-600 uppercase tracking-widest mb-1">
                Program Coordinator
              </p>
              <p className="text-sm font-bold text-slate-700 leading-tight">
                Mrs. Shehnaz Shahid Gatta
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-black text-pink-600 uppercase tracking-widest mb-1">
                Guest Speaker
              </p>
              <p className="text-sm font-bold text-slate-700">Dr. Saima Awan</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Balanced Mobile Layout */}
        <div className="border-t border-pink-50 pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Dev Credit */}
            <Link
              href="https://wa.me/923313416850?text=Hello%20Shoaib,%20I%20saw%20your%20work%20and%20want%20to%20hire%20you!"
              className="text-slate-900 font-black text-base sm:text-lg tracking-tight hover:text-pink-600 transition-colors"
            >
              App Sponsor:{" "}
              <span className="text-pink-600">Shoaib Abdul Sattar Khosa</span>
            </Link>

            <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black text-pink-400 uppercase italic tracking-widest">
              <span>#Awareness</span>
              <span>#HealthFirst</span>
              <span>#CommunitySupport</span>
            </div>

            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
              © {currentYear} Okhai Memon Jamat Health Committee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
