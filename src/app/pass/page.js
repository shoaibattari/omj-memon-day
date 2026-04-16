"use client";
import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { toast } from "react-toastify";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHospital,
  FaRibbon,
  FaHeartbeat
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import GeneratorForm from "../components/GeneratorForm";
import Footer from "../components/Footer";

export default function PassPage() {
  const [formData, setFormData] = useState({
    name: "",
    community: "General Participant",
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
    const loadId = toast.loading("Generating your Seminar Pass...");
    try {
      const dataUrl = await toPng(passRef.current, {
        pixelRatio: 3,
        backgroundColor: "#db2777", 
      });
      const link = document.createElement("a");
      link.download = `HealthSeminar-Pass-${formData.name || "Entry"}.png`;
      link.href = dataUrl;
      link.click();
      toast.update(loadId, {
        render: "Pass Saved Successfully!",
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
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <Navbar showBack />

      <main className="flex-grow max-w-6xl mx-auto py-12 px-6 grid lg:grid-cols-2 gap-12 items-start">
        <GeneratorForm
          title="Seminar Pass"
          formData={formData}
          setFormData={setFormData}
          handleImageChange={handleImageChange}
          userImage={userImage}
          onDownload={onDownload}
        />

        {/* --- THEMED FULL PINK PASS PREVIEW --- */}
        <div className="flex justify-center sticky top-24">
          <div
            ref={passRef}
            className="w-[350px] h-[580px] bg-pink-600 rounded-[2.5rem] shadow-2xl overflow-hidden relative border-[10px] border-white"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500 to-pink-700 opacity-95"></div>
            <div className="absolute -top-10 -right-10 opacity-10 rotate-12 text-white">
               <FaRibbon size={150} />
            </div>

            {/* Header: Collaboration Branding */}
            <div className="relative z-10 px-6 pt-8 pb-4">
              <div className="flex justify-between items-center mb-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                <img
                  src="./omj-logo.png"
                  className="h-10 w-auto"
                  alt="OMJ Logo"
                />
                <div className="h-8 w-[1px] bg-white/30 mx-2"></div>
                <p className="text-[10px] text-white font-black leading-tight uppercase text-right">
                  Memon Medical <br /> Institute Hospital
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-white font-black text-2xl leading-tight tracking-tight uppercase drop-shadow-md">
                  Breast Cancer
                </h2>
                <div className="inline-block bg-white text-pink-600 text-[10px] font-black px-4 py-0.5 rounded-full mt-1 uppercase tracking-widest shadow-lg">
                  Awareness Program
                </div>
              </div>
            </div>

            {/* Profile Section */}
            <div className="relative z-10 text-center px-4 flex flex-col items-center mt-2">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full border-[5px] border-white overflow-hidden bg-pink-400 shadow-2xl relative z-10">
                  <img
                    src={userImage || "./omj-logo.png"} 
                    className={`w-full h-full object-cover ${!userImage && "p-6 opacity-30"}`}
                    alt="User"
                  />
                </div>
                {/* Attending Badge (Matches DP Style) */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-pink-600 px-4 py-1 rounded-full text-[10px] font-black uppercase shadow-xl border-2 border-pink-500 z-20 whitespace-nowrap">
                  ATTENDING 2026
                </div>
              </div>

              {/* User Info */}
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1 truncate w-full drop-shadow-md">
                {formData.name || "PARTICIPANT NAME"}
              </h3>
              <p className="text-pink-100 font-bold text-[10px] italic uppercase tracking-[0.2em] mb-4">
                I Am Supporting Awareness
              </p>

              {/* Details Box (White Theme for readability) */}
              <div className="bg-white text-slate-800 p-5 rounded-[2rem] w-full shadow-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-pink-600" size={16} />
                  <p className="text-[11px] font-black uppercase tracking-tighter">
                    Saturday, April 18, 2026 | 4:00 PM
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-pink-600" size={16} />
                  <p className="text-[10px] font-black uppercase leading-tight text-left">
                    Husein Ebrahim Sports Complex, Karachi
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-pink-100 pt-3 mt-2 text-pink-600 font-black">
                  <FaHeartbeat className="animate-pulse" size={16} />
                  <p className="text-[10px] uppercase">
                    Free Breast Examination Included
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 w-full h-3 bg-white"></div>
          </div>

          {/* Watermark */}
          <p className="absolute -bottom-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Developed by Shoaib Memon
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}