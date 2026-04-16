"use client";
import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { toast } from "react-toastify";
import Image from "next/image";
import { FaRibbon, FaHeartbeat } from "react-icons/fa";
import Navbar from "../components/Navbar";
import GeneratorForm from "../components/GeneratorForm";
import Footer from "../components/Footer";

export default function DPPage() {
  const [formData, setFormData] = useState({
    name: "",
    community: "Awareness Participant",
  });
  const [userImage, setUserImage] = useState(null);
  const dpRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUserImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onDownload = async () => {
    const loadId = toast.loading("Generating your Attendee DP...");
    try {
      const dataUrl = await toPng(dpRef.current, {
        pixelRatio: 3,
        backgroundColor: "#db2777", 
      });
      const link = document.createElement("a");
      link.download = `BreastCancerAttendee-DP-${formData.name || "User"}.png`;
      link.href = dataUrl;
      link.click();
      toast.update(loadId, {
        render: "DP Downloaded Successfully!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (err) {
      toast.update(loadId, {
        render: "Download failed.",
        type: "error",
        isLoading: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <Navbar showBack />

      <main className="flex-grow max-w-6xl mx-auto py-12 px-6 grid lg:grid-cols-2 gap-12 items-center">
        <GeneratorForm
          title="Awareness DP Creator"
          formData={formData}
          setFormData={setFormData}
          handleImageChange={handleImageChange}
          userImage={userImage}
          onDownload={onDownload}
        />

        {/* --- FULL PINK ATTENDEE DP PREVIEW --- */}
        <div className="flex justify-center">
          <div
            ref={dpRef}
            className="w-[400px] h-[400px] relative overflow-hidden shadow-2xl border-[12px] border-white bg-pink-600 flex flex-col items-center justify-between p-5 text-center"
          >
            {/* Full Pink Background Texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500 to-pink-700 opacity-95"></div>
            
            {/* Subtle Ribbon Watermark */}
            <div className="absolute -top-10 -left-10 opacity-10 rotate-12 text-white">
               <FaRibbon size={180} />
            </div>

            {/* Header: Collaboration Branding */}
            <div className="relative z-10 w-full flex justify-between items-center px-2 py-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <Image src="/omj-logo.png" width={40} height={40} alt="OMJ" />
              <div className="text-white">
                <p className="text-lg font-black uppercase leading-none tracking-tight">Okhai Memon Jamat</p>
                <p className="text-[10px] text-pink-100 font-bold uppercase tracking-widest mt-1">
                  & MMI Hospital Collaboration
                </p>
              </div>
              <div className="bg-white/50 p-2 rounded-full">
                <FaHeartbeat className="text-white size-4 animate-pulse" />
              </div>
            </div>

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center flex-grow justify-center py-2">
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-white blur-xl opacity-20 rounded-full scale-110"></div>
                <div className="w-32 h-32 rounded-full border-[5px] border-white overflow-hidden shadow-2xl bg-pink-400 relative z-10">
                  <img
                    src={userImage || "/omj-logo.png"} 
                    className={`w-full h-full object-cover ${!userImage && 'p-6 opacity-30'}`}
                    alt="Attendee"
                  />
                </div>
                {/* Status Badge (Matches "Celebration 2026" from your image) */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-pink-600 px-3 py-0.5 rounded-full text-[10px] font-black uppercase shadow-lg border-2 border-pink-600 z-20 whitespace-nowrap">
                  ATTENDING 2026
                </div>
              </div>

              {/* Name & Support Text */}
              <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none drop-shadow-md">
                {formData.name || "YOUR NAME HERE"}
              </h3>
              
              {/* "I AM ATTENDING" Banner - Inspired by your provided reference */}
              <p className="text-white font-black text-sm uppercase italic tracking-[0.2em] mt-2 drop-shadow-sm border-t border-white/30 pt-1 w-full">
                I Am Supporting Awareness
              </p>
            </div>

            {/* Footer: Event Quick Info */}
            <div className="relative z-10 w-full bg-white text-pink-700 py-3 px-4 rounded-2xl shadow-xl">
               <p className="text-[14px] font-black italic tracking-widest uppercase leading-none mb-1">HEALTH SEMINAR</p>
               <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-tight">
                  <span>Sat, 18 April 2026</span>
                  <span className="w-1 h-1 bg-pink-700 rounded-full"></span>
                  <span>4:00 PM</span>
                  <span className="w-1 h-1 bg-pink-700 rounded-full"></span>
                  <span>H.E Sports Complex</span>
               </div>
            </div>

            {/* Signature */}
            <p className="w-full text-[6px] opacity-60 text-right font-bold text-white mt-1 uppercase tracking-widest">
              Dev: Shoaib Memon
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}