"use client";
import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { toast } from "react-toastify";
import Image from "next/image";
import Navbar from "../components/Navbar";
import GeneratorForm from "../components/GeneratorForm";
import Footer from "../components/Footer";

export default function DPPage() {
  const [formData, setFormData] = useState({
    name: "",
    community: "Okhai Memon",
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
    const loadId = toast.loading("Generating your High-Res DP...");
    try {
      const dataUrl = await toPng(dpRef.current, {
        pixelRatio: 3,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.download = `MemonDay-DP-${formData.name || "User"}.png`;
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
        render: "Error generating DP",
        type: "error",
        isLoading: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navbar showBack />

      <main className="flex-grow max-w-6xl mx-auto py-12 px-6 grid lg:grid-cols-2 gap-12 items-center">
        <GeneratorForm
          title="Social DP Maker"
          formData={formData}
          setFormData={setFormData}
          handleImageChange={handleImageChange}
          onDownload={onDownload}
        />

        {/* --- BANNER INSPIRED DP PREVIEW --- */}
        <div className="flex justify-center">
          <div
            ref={dpRef}
            className="w-[400px] h-[400px] relative overflow-hidden shadow-2xl border-[12px] border-white bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 flex flex-col items-center justify-between p-6 text-center"
          >
            {/* Background Texture Inspired by Banner */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

            {/* Top Branding Header */}
            <div className="relative z-10 w-full flex justify-between items-center px-4">
              <Image
                src="/omj-logo.png"
                width={50}
                height={50}
                alt="OMJ"
                className="drop-shadow-md"
              />
              <div className="text-white">
                <p className="text-[10px] font-black tracking-tighter uppercase leading-none">
                  The Okhai Memon Jamat Presents
                </p>
                <p className="text-[12px] font-bold text-orange-400 italic">
                  WORLD MEMON DAY 2026
                </p>
                <p className="text-[12px] font-bold text-white italic">
                  With Special Persons
                </p>
              </div>
              <Image
                src="/wmd-logo.jpeg"
                width={50}
                height={50}
                alt="WMD"
                className="rounded-full border-2 border-white shadow-sm"
              />
            </div>

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full border-4 border-orange-400 overflow-hidden shadow-2xl">
                  <img
                    src={userImage || "/wmd-logo.jpeg"}
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                </div>
                {/* Decorative Badge */}
                <div className="absolute -bottom-2 -right-2 bg-red-600 text-white text-[8px] font-black px-2 py-1 rounded-full border-2 border-white uppercase shadow-lg">
                  Celebration 2026
                </div>
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight drop-shadow-lg leading-none">
                {formData.name || "YOUR NAME HERE"}
              </h3>
              <p className="text-orange-400 italic font-bold text-[10px] tracking-[0.3em] uppercase mt-1">
                I AM {formData.community}
              </p>
            </div>

            {/* Footer Text Inspired by Banner */}
            <div className="relative z-10 w-full bg-white/10 backdrop-blur-sm py-2 rounded-xl border border-white/20">
              <p className="text-[14px] font-black text-white italic tracking-widest uppercase leading-none">
                WORLD MEMON DAY
              </p>
              <p className="text-[8px] text-blue-100 font-bold uppercase mt-1">
                H.E.F Family Park, Huseinabad, Karachi
              </p>
              <p className="text-[8px] text-blue-100 font-bold uppercase mt-1">
                On Sunday 12 April, 2026 AT 6 PM
              </p>
            </div>

            <p className="w-full text-[6px] opacity-50 text-right font-bold text-orange-100">
              App Developer: Shoaib Memon
            </p>
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-400/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
