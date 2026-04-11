import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mb-12">
          {/* Brand/Logo Section */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src="/omj-logo.png" className="h-12 w-auto" alt="OMJ" />
              <img
                src="/wmd-logo.jpeg"
                className="h-12 w-auto rounded-full shadow-sm"
                alt="WMD"
              />
            </div>
            <p className="text-slate-500 font-medium max-w-xs text-sm sm:text-base">
              Celebrating unity and heritage for the World Memon Day Celebration
              2026.
            </p>
          </div>

          {/* Organizing Committee Credits - Improved Grid for Mobile */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-12 w-full lg:w-auto">
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest mb-1">
                Program Lead
              </p>
              <p className="text-sm font-bold text-slate-700">Kawish Parekh</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest mb-1">
                Secretary
              </p>
              <p className="text-sm font-bold text-slate-700 leading-tight">
                M. Arif Tayyab Suriya
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest mb-1">
                Coordinator
              </p>
              <p className="text-sm font-bold text-slate-700">
                Fareed Dadwala (Laloo)
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest mb-1">
                Event Partner
              </p>
              <p className="text-sm font-bold text-slate-700">
                Okhai Memon Jamat
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Balanced Mobile Layout */}
        <div className="border-t border-slate-100 pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Dev Credit - Prominent on Mobile */}
            <Link
              href={
                "https://wa.me/923313416850?text=Hello%20Shoaib,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you!"
              }
              className="text-blue-900 font-black text-base sm:text-lg tracking-tight"
            >
              App Sponsor:{" "}
              <span className="text-red-600">Shoaib Abdul Sattar Khosa</span>
            </Link>

            <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black text-slate-400 uppercase italic tracking-widest">
              <span>#PowerShow</span>
              <span>#Unity</span>
              <span>#Heritage</span>
            </div>

            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
              © {currentYear} Okhai Memon Jamat Social Welfare Committee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
