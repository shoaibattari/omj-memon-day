"use client";

import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { toast } from "react-toastify";
import { FaCalendarAlt, FaMapMarkerAlt, FaIdBadge } from "react-icons/fa";
import Navbar from "../components/Navbar";
import GeneratorForm from "../components/GeneratorForm";
import Footer from "../components/Footer";

export default function PassPage() {
  const [formData, setFormData] = useState({
    name: "",
    community: "Okhai Memon",
  });
  const [userImage, setUserImage] = useState(null);
  const passRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUserImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onDownload = async () => {
    const loadId = toast.loading("Generating high-resolution pass...");
    try {
      const dataUrl = await toPng(passRef.current, {
        pixelRatio: 3,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.download = `MemonDay-Pass-${formData.name || "Entry"}.png`;
      link.href = dataUrl;
      link.click();
      toast.update(loadId, {
        render: "Pass Saved!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (err) {
      toast.update(loadId, {
        render: "Generation failed",
        type: "error",
        isLoading: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar showBack />

      <main className="flex-grow max-w-6xl mx-auto py-12 px-6 grid lg:grid-cols-2 gap-12 items-start">
        <GeneratorForm
          title="Entry Pass"
          formData={formData}
          setFormData={setFormData}
          handleImageChange={handleImageChange}
          onDownload={onDownload}
        />

        {/* --- BANNER INSPIRED PASS PREVIEW --- */}
        <div className="flex justify-center sticky top-24">
          <div
            ref={passRef}
            className="w-[350px] h-[580px] bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-950 rounded-[2.5rem] shadow-2xl overflow-hidden relative border-[8px] border-white"
          >
            {/* Background Accent Circle (Similar to Banner Starburst) */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>

            {/* Header: Dual Logos */}
            <div className="relative z-10 px-6 pt-8 pb-4 flex justify-between items-center">
              <img
                src="/omj-logo.png"
                className="h-12 w-auto drop-shadow-md"
                alt="OMJ Logo"
              />
              <div>
                <p className="text-[8px] text-white/80 font-black uppercase tracking-tighter">
                  Okhai Memon Jamat
                </p>
                <p className="text-[10px] text-center text-orange-400 font-bold italic">
                  Presents
                </p>
              </div>
              <img
                src="/wmd-logo.jpeg"
                className="h-12 w-auto rounded-full border-2 border-white shadow-lg"
                alt="WMD Logo"
              />
            </div>

            {/* Event Title */}
            <div className="relative z-10 text-center px-4 mb-4">
              <h2 className="text-white font-black text-xl leading-tight tracking-tight uppercase">
                World Memon Day
              </h2>
              <div className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-0.5 rounded-full mt-1 uppercase tracking-widest shadow-lg">
                Celebration 2026
              </div>
              <p className="text-sm text-center text-orange-400 font-bold mt-1 italic">
                WITH SPECIAL PERSONS
              </p>
            </div>

            <div className="relative z-10 text-center px-8 flex flex-col items-center">
              {/* Profile Image with Golden Border */}
              <div className="w-32 h-32 rounded-full border-4 border-orange-400 overflow-hidden bg-slate-200 shadow-2xl mb-4">
                <img
                  src={userImage || "wmd-logo.jpeg"}
                  className="w-full h-full object-cover"
                  alt="User"
                />
              </div>

              {/* User Info */}
              <h3 className="text-2xl font-black text-white uppercase tracking-tight drop-shadow-md mb-1">
                {formData.name || "MEMBER NAME"}
              </h3>
              <p className="text-orange-400 font-bold text-xs uppercase tracking-[0.2em] mb-6">
                {formData.community}
              </p>

              {/* Details Section (Boxed like Banner elements) */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl w-full border border-white/20 shadow-inner">
                <p className="text-[14px] font-black text-white italic mb-3 tracking-widest border-b border-white/10 pb-2">
                  MEMON POWER SHOW
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-3 text-blue-100">
                    <FaCalendarAlt className="text-orange-400 size-3" />
                    <p className="text-[10px] font-bold uppercase">
                      Sunday, April 12, 2026 | 6:00 PM
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <FaMapMarkerAlt className="text-orange-400 size-3" />
                    <p className="text-[10px] font-bold uppercase truncate">
                      H.E.F Family Park, Karachi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 w-full h-3 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
            <p className="w-full text-[6px] opacity-50 text-center mt-3 font-bold text-orange-100">
              App Developer: Shoaib Memon
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
