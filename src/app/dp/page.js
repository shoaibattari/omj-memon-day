"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { toPng } from "html-to-image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaUpload,
  FaDownload,
  FaUser,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
  FaCamera,
  FaTrashAlt,
  FaSearchPlus,
  FaSearchMinus,
  FaArrowsAlt,
  FaSyncAlt,
  FaWhatsapp,
  FaShareAlt,
  FaSlidersH,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ROLES = [
  { label: "Student", icon: "🎓" },
  { label: "Professional", icon: "💼" },
  { label: "Entrepreneur", icon: "🚀" },
  { label: "Business Owner", icon: "🏢" },
  { label: "Youth Delegate", icon: "🌟" },
  { label: "OMJ Member", icon: "🏛️" },
];

export default function DPPage() {
  const [formData, setFormData] = useState({
    name: "",
    role: "Student",
  });
  const [userImage, setUserImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circlePreview, setCirclePreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });

  const dpRef = useRef(null);
  const photoContainerRef = useRef(null);
  const fileInputRef = useRef(null);

  // File Upload
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("Photo size must be under 10MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
        setZoom(1);
        setPosition({ x: 0, y: 0 });
        toast.success("Photo added! Drag photo inside frame to adjust.", { autoClose: 2000 });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setUserImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const resetPosition = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Direct Touch / Mouse Dragging for Photo Framing
  const handleMouseDown = (e) => {
    if (!userImage) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    startPosRef.current = { ...position };
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPosition({
      x: Math.max(-120, Math.min(120, startPosRef.current.x + dx)),
      y: Math.max(-120, Math.min(120, startPosRef.current.y + dy)),
    });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = (e) => {
    if (!userImage || e.touches.length !== 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    startPosRef.current = { ...position };
  };

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    const dy = e.touches[0].clientY - dragStartRef.current.y;
    setPosition({
      x: Math.max(-120, Math.min(120, startPosRef.current.x + dx)),
      y: Math.max(-120, Math.min(120, startPosRef.current.y + dy)),
    });
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // High-Res Download (Strict 1080x1080)
  const onDownload = async () => {
    if (!formData.name.trim()) {
      toast.warn("Please enter your name first!");
      return;
    }
    if (!dpRef.current) return;

    setIsGenerating(true);
    const loadId = toast.loading("Generating your 1080×1080 HD DP...");

    const wasCircle = circlePreview;
    setCirclePreview(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 200));

      const node = dpRef.current;
      const targetSize = 1080;
      const currentWidth = node.offsetWidth || 480;
      const scale = targetSize / currentWidth;

      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: scale,
        canvasWidth: targetSize,
        canvasHeight: targetSize,
        backgroundColor: "#020713",
      });

      const link = document.createElement("a");
      const cleanName = formData.name.trim().replace(/[^a-zA-Z0-9]/g, "-") || "Attendee";
      link.download = `Karachi-Youth-Talk-2026-DP-${cleanName}.png`;
      link.href = dataUrl;
      link.click();

      toast.update(loadId, {
        render: "DP Downloaded in 1080×1080 HD! Ready for WhatsApp! 🎉",
        type: "success",
        isLoading: false,
        autoClose: 3500,
      });
    } catch (err) {
      console.error(err);
      toast.update(loadId, {
        render: "Download failed. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      if (wasCircle) setCirclePreview(true);
      setIsGenerating(false);
    }
  };

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(
      `🎉 I just created my official DP for *Karachi Youth Talk 2026* with Keynote Speaker *Soban Attari*!\n\n📅 Sunday, 27 September 2026 • 7:00 PM\n📍 H.E. Sports Complex, Hussainabad, Karachi\n\nCreate your DP now: ${window.location.origin}/dp\nRegister Free: https://forms.gle/5DPXQKVufUGSsJ3T6`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#020713] text-[#f0f6ff] flex flex-col font-sans relative selection:bg-[#ffdb15] selection:text-[#020713] overflow-x-hidden">
      {/* Background Lighting */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18)_0%,_transparent_60%)] -z-10" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(255,219,21,0.06)_0%,_transparent_65%)] -z-10" />

      <Navbar showBack />
      <ToastContainer position="top-center" theme="dark" autoClose={2500} hideProgressBar />

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* Compact Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdb15]/10 border border-[#ffdb15]/30 text-[#ffdb15] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <span>✨</span> Official WhatsApp DP Maker
          </div>
          <h1
            style={{ fontFamily: "Oswald, sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-wide leading-tight"
          >
            Create Your <span className="grad-gold">Official DP</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto px-2">
            1080×1080 HD square with guaranteed WhatsApp circular safe zone.
          </p>
        </div>

        {/* Workspace Container */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-14 w-full">

          {/* ========================================================= */}
          {/* CONTROLS DOCK (FORM): Perfected Padding & Alignment       */}
          {/* ========================================================= */}
          <div className="w-full max-w-[500px] flex flex-col gap-4 z-10 mx-auto lg:mx-0">
            <div className="bg-gradient-to-b from-[#0a193f]/95 via-[#061230]/98 to-[#020718]/98 backdrop-blur-2xl border border-white/15 border-t-2 border-t-[#ffdb15]/80 rounded-[24px] sm:rounded-[32px] px-5 sm:px-8 py-6 sm:py-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-6 sm:space-y-7 w-full box-border overflow-hidden">

              {/* Form Card Header - Fixed wrap issue */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 w-full">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ffdb15]/10 border border-[#ffdb15]/30 flex items-center justify-center text-[#ffdb15] shadow-sm shrink-0">
                    <FaSlidersH size={14} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider leading-none">
                      Personalize DP
                    </h2>
                    <p className="text-[10px] sm:text-[11px] text-cyan-300/70 mt-1 leading-none">
                      Real-time live preview update
                    </p>
                  </div>
                </div>
                {/* Badge won't drop down now */}
                <span className="text-[9px] sm:text-[10px] whitespace-nowrap font-mono text-[#ffdb15] bg-[#ffdb15]/10 px-2.5 py-1 rounded-full border border-[#ffdb15]/25 font-bold tracking-wider shrink-0 ml-2">
                  1080×1080 HD
                </span>
              </div>

              {/* 1. Name Input */}
              <div className="space-y-2.5 w-full">
                <div className="flex items-center justify-between px-1">
                  <label className="text-[11px] font-extrabold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                    1. Your Full Name
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                    {formData.name.length}/26
                  </span>
                </div>
                <div className="relative group w-full">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ffdb15] transition-colors text-xs" />
                  <input
                    type="text"
                    maxLength={26}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Muhammad Shoaib"
                    className="w-full pl-10 pr-10 py-3.5 bg-[#020817]/90 border border-white/15 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#ffdb15] focus:ring-2 focus:ring-[#ffdb15]/20 transition-all font-semibold shadow-inner box-border"
                  />
                  {formData.name && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, name: "" })}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      title="Clear name"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* 2. Badge Selector */}
              <div className="space-y-2.5 w-full">
                <label className="block text-[11px] font-extrabold text-slate-300 uppercase tracking-widest px-1">
                  2. Select Role / Badge
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                  {ROLES.map((role) => {
                    const isSelected = formData.role === role.label;
                    return (
                      <button
                        key={role.label}
                        type="button"
                        onClick={() => setFormData({ ...formData, role: role.label })}
                        className={`py-3 px-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 border flex items-center justify-center gap-1.5 min-h-[44px] ${isSelected
                            ? "bg-gradient-to-r from-[#ffdb15] to-[#f59e0b] text-[#030b1e] border-[#ffdb15] shadow-lg shadow-[#ffdb15]/25 scale-[1.02]"
                            : "bg-white/[0.04] text-slate-300 border-white/10 hover:border-[#ffdb15]/40 hover:bg-white/[0.08] hover:text-white"
                          }`}
                      >
                        <span className="text-sm shrink-0">{role.icon}</span>
                        <span className="truncate">{role.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Photo Action & Interactive Fine-Tuning */}
              <div className="space-y-2.5 w-full">
                <label className="block text-[11px] font-extrabold text-slate-300 uppercase tracking-widest px-1">
                  3. Profile Photo
                </label>

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

                {!userImage ? (
                  <label
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center gap-3 w-full py-8 px-4 border-2 border-dashed border-white/20 hover:border-[#ffdb15] rounded-xl cursor-pointer bg-white/[0.02] hover:bg-[#ffdb15]/[0.05] transition-all text-center group min-h-[130px] box-border"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ffdb15] group-hover:scale-110 group-hover:bg-[#ffdb15]/10 group-hover:border-[#ffdb15]/40 transition-all shadow-lg">
                      <FaCamera size={20} />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-[#ffdb15] transition-colors">
                        Tap to Upload Photo
                      </span>
                      <span className="block text-[10px] sm:text-[11px] text-slate-400">
                        Square or portrait JPG, PNG (Max 10MB)
                      </span>
                    </div>
                  </label>
                ) : (
                  <div className="bg-[#020817]/95 border border-white/15 rounded-xl p-4 sm:p-5 space-y-4 shadow-inner w-full box-border">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full border-2 border-[#ffdb15] overflow-hidden shrink-0">
                          <img src={userImage} alt="Thumbnail" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-[11px] sm:text-xs">
                          <FaCheckCircle /> Loaded
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-cyan-300 hover:text-white text-[10px] sm:text-xs font-semibold flex items-center gap-1 bg-cyan-500/10 hover:bg-cyan-500/20 px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-lg border border-cyan-500/25 transition-colors"
                        >
                          <FaCamera size={12} /> <span className="hidden sm:inline">Change</span>
                        </button>
                        <button
                          type="button"
                          onClick={resetPosition}
                          className="text-slate-300 hover:text-white text-[10px] sm:text-xs font-semibold flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-lg border border-white/10 transition-colors"
                        >
                          <FaSyncAlt size={10} /> Reset
                        </button>
                        <button
                          type="button"
                          onClick={removePhoto}
                          className="text-rose-400 hover:text-rose-300 text-[10px] sm:text-xs font-semibold flex items-center gap-1 bg-rose-500/10 hover:bg-rose-500/20 px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-lg border border-rose-500/25 transition-colors"
                        >
                          <FaTrashAlt size={10} />
                        </button>
                      </div>
                    </div>

                    {/* Touch / Drag Gesture Tip */}
                    <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] text-sky-200/90 bg-sky-500/10 px-3 py-2 rounded-lg border border-sky-500/20">
                      <FaArrowsAlt className="text-[#ffdb15] shrink-0" size={12} />
                      <span><strong>Touch & drag</strong> photo in the preview to center your face!</span>
                    </div>

                    {/* Quick Zoom Buttons & Slider */}
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-300">
                        <span className="font-semibold flex items-center gap-1.5">
                          <FaSearchPlus size={12} className="text-[#ffdb15]" /> Zoom Scale
                        </span>
                        <div className="flex items-center gap-2 font-mono text-[#ffdb15] font-bold">
                          <button
                            type="button"
                            onClick={() => setZoom(Math.max(1, +(zoom - 0.1).toFixed(2)))}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm font-bold transition-colors"
                          >
                            -
                          </button>
                          <span className="w-10 sm:w-12 text-center bg-white/5 py-1 rounded-md border border-white/10">
                            {Math.round(zoom * 100)}%
                          </span>
                          <button
                            type="button"
                            onClick={() => setZoom(Math.min(2.5, +(zoom + 0.1).toFixed(2)))}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm font-bold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="2.5"
                        step="0.05"
                        value={zoom}
                        onChange={(e) => setZoom(parseFloat(e.target.value))}
                        className="w-full accent-[#ffdb15] h-2 bg-white/15 rounded-full cursor-pointer hover:accent-[#ffcc00] transition-all"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* 4. WhatsApp Circle Preview Toggle */}
              <div
                onClick={() => setCirclePreview(!circlePreview)}
                className={`w-full p-4 rounded-xl border cursor-pointer flex items-center justify-between gap-3 transition-all duration-200 select-none min-h-[60px] box-border ${circlePreview
                    ? "bg-emerald-950/40 border-emerald-500/50 shadow-md shadow-emerald-500/10"
                    : "bg-white/[0.04] border-white/12 hover:bg-white/[0.08]"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ${circlePreview ? "bg-emerald-500 text-white shadow-sm" : "bg-white/10 text-slate-400"
                      }`}
                  >
                    <FaWhatsapp size={18} />
                  </div>
                  <div>
                    <h3 className="text-[11px] sm:text-xs font-bold text-white leading-tight">
                      WhatsApp Safe Zone
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">
                      {circlePreview ? "Circular mode active (Safe for DP)" : "Click to preview circular crop"}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 shrink-0 ${circlePreview ? "bg-emerald-500" : "bg-white/20"
                    }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${circlePreview ? "translate-x-5" : "translate-x-0"
                      }`}
                  />
                </div>
              </div>

              {/* PRIMARY CTAs - Spaced properly */}
              <div className="w-full pt-6 mt-4 border-t border-white/10 space-y-3">
                <button
                  type="button"
                  onClick={onDownload}
                  disabled={isGenerating || !formData.name.trim()}
                  className="btn-primary-gold bg-gradient-to-r from-[#ffdb15] to-[#f59e0b] text-[#030b1e] rounded-xl w-full py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold shadow-xl shadow-[#ffdb15]/20 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 transition-all box-border"
                >
                  <FaDownload className={isGenerating ? "animate-spin" : ""} />
                  <span>{isGenerating ? "Generating HD DP..." : "Download DP Now"}</span>
                </button>

                <button
                  type="button"
                  onClick={shareToWhatsApp}
                  className="btn-whatsapp-modern bg-[#25D366] text-white rounded-xl w-full py-3 text-[11px] sm:text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:bg-[#1ebd5a] hover:scale-[1.02] active:scale-95 transition-all box-border"
                >
                  <FaShareAlt size={14} />
                  <span>Share Campaign with Friends</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium tracking-wide">
                  🔒 100% Private: Photo processed on your device only.
                </span>
              </div>
            </div>
          </div>


          {/* ========================================================= */}
          {/* LIVE DP CANVAS                                            */}
          {/* ========================================================= */}
          <div className="w-full max-w-[450px] flex flex-col items-center lg:sticky lg:top-24 z-40 mx-auto lg:mx-0">

            <div className="w-full flex items-center justify-between mb-3 px-2 text-xs">
              <span className="font-bold text-[#ffdb15] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ffdb15] animate-ping" />
                Live Preview
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-cyan-300/80 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-500/30">
                1080 × 1080 px
              </span>
            </div>

            {/* Canvas Frame Wrapper */}
            <div
              className={`w-full transition-all duration-300 relative shadow-2xl bg-black ${circlePreview ? "rounded-full" : "rounded-3xl"
                }`}
              style={{
                boxShadow: circlePreview
                  ? "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 219, 21, 0.25)"
                  : "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 50px rgba(37, 99, 235, 0.25)",
              }}
            >
              {/* THE EXPORTABLE DP ELEMENT */}
              <div
                ref={dpRef}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: circlePreview ? "50%" : "28px",
                  background: "radial-gradient(circle at 50% 38%, #081d4e 0%, #030b1e 65%, #020713 100%)",
                  border: "3px solid rgba(255, 219, 21, 0.75)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(14px, 4vw, 24px)",
                  boxSizing: "border-box",
                  userSelect: "none",
                }}
              >
                {/* Ambient Radial Lighting */}
                <div
                  style={{
                    position: "absolute",
                    top: "38%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "290px",
                    height: "290px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, transparent 68%)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "120px",
                    background: "radial-gradient(ellipse at bottom, rgba(255, 219, 21, 0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* WhatsApp Circle Safe Zone Ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "4px",
                    borderRadius: "50%",
                    border: circlePreview
                      ? "2px solid rgba(255, 219, 21, 0.9)"
                      : "1.5px dashed rgba(56, 189, 248, 0.25)",
                    pointerEvents: "none",
                    zIndex: 20,
                  }}
                />

                {/* 1. TOP HEADER */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    paddingTop: circlePreview ? "12px" : "2px",
                  }}
                >
                  <img
                    src="/omj-logo.png"
                    alt="OMJ"
                    crossOrigin="anonymous"
                    style={{
                      width: "clamp(34px, 10vw, 42px)",
                      height: "clamp(34px, 10vw, 42px)",
                      borderRadius: "50%",
                      border: "2px solid #ffdb15",
                      backgroundColor: "#ffffff",
                      padding: "2px",
                      objectFit: "contain",
                      boxShadow: "0 0 14px rgba(255, 219, 21, 0.4)",
                      flexShrink: 0,
                    }}
                  />

                  <div style={{ textAlign: "left", lineHeight: 1.15 }}>
                    <p
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "clamp(0.5rem, 1.8vw, 0.64rem)",
                        fontWeight: 700,
                        color: "rgba(224, 242, 254, 0.82)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      The Okhai Memon Jamat
                    </p>
                    <h2
                      style={{
                        fontFamily: "Bebas Neue, sans-serif",
                        fontSize: "clamp(1.1rem, 3.5vw, 1.32rem)",
                        color: "#ffdb15",
                        letterSpacing: "0.04em",
                        margin: "1px 0 0 0",
                        lineHeight: 1,
                      }}
                    >
                      Karachi Youth Talk 2026
                    </h2>
                  </div>
                </div>

                {/* 2. CENTER: Interactive Avatar */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  <div style={{ position: "relative", marginBottom: "12px" }}>
                    <div
                      ref={photoContainerRef}
                      onMouseDown={handleMouseDown}
                      onTouchStart={handleTouchStart}
                      style={{
                        width: "clamp(110px, 32vw, 154px)",
                        height: "clamp(110px, 32vw, 154px)",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "4px solid #ffdb15",
                        background: "radial-gradient(circle, #0c245c 0%, #030b1e 100%)",
                        boxShadow: "0 0 30px rgba(255, 219, 21, 0.5), inset 0 0 20px rgba(0,0,0,0.8)",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: userImage ? (isDragging ? "grabbing" : "grab") : "default",
                        touchAction: "none",
                      }}
                    >
                      {userImage ? (
                        <img
                          src={userImage}
                          alt="Attendee"
                          draggable={false}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                            transformOrigin: "center center",
                            pointerEvents: "none",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "rgba(224, 242, 254, 0.45)",
                            textAlign: "center",
                          }}
                        >
                          <FaCamera size={26} style={{ opacity: 0.7, marginBottom: 4 }} />
                          <span
                            style={{
                              fontFamily: "Oswald, sans-serif",
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              color: "#ffdb15",
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                            }}
                          >
                            Add Photo
                          </span>
                        </div>
                      )}
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        bottom: "-10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "linear-gradient(90deg, #ffdb15 0%, #ffcc00 50%, #f59e0b 100%)",
                        color: "#030b1e",
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "clamp(0.55rem, 1.8vw, 0.68rem)",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        padding: "4px 14px",
                        borderRadius: "20px",
                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 219, 21, 0.5)",
                        whiteSpace: "nowrap",
                        border: "1.5px solid #ffffff",
                        zIndex: 2,
                      }}
                    >
                      ★ {formData.role} ★
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "clamp(1.1rem, 3.8vw, 1.55rem)",
                      fontWeight: 800,
                      color: "#ffffff",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      lineHeight: 1.1,
                      marginTop: "8px",
                      textAlign: "center",
                      maxWidth: "92%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.9)",
                    }}
                  >
                    {formData.name.trim() || "YOUR NAME HERE"}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "clamp(0.6rem, 2vw, 0.72rem)",
                      fontWeight: 700,
                      color: "#38bdf8",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      marginTop: "2px",
                      lineHeight: 1,
                    }}
                  >
                    THE FUTURE OF YOUTH • KARACHI
                  </p>
                </div>

                {/* 3. BOTTOM FOOTER */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                    paddingBottom: circlePreview ? "12px" : "2px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(11, 33, 82, 0.8)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(56, 189, 248, 0.4)",
                      borderRadius: "50px",
                      padding: "4px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <span style={{ fontSize: "0.7rem", color: "#ffdb15" }}>🎤</span>
                    <span
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "clamp(0.55rem, 1.8vw, 0.7rem)",
                        fontWeight: 700,
                        color: "#ffffff",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Keynote Speaker: <strong style={{ color: "#ffdb15" }}>Soban Attari</strong>
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "clamp(0.5rem, 1.6vw, 0.62rem)",
                      fontFamily: "Oswald, sans-serif",
                      color: "rgba(224, 242, 254, 0.88)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      margin: "2px 0 0 0",
                    }}
                  >
                    📅 SUN, 27 SEP 2026 • 7:00 PM | 📍 H.E. SPORTS COMPLEX
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(0.45rem, 1.4vw, 0.52rem)",
                      color: "rgba(255, 219, 21, 0.75)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    Free Entry • Organised by The Okhai Memon Jamat
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-4 text-center bg-white/5 px-4 py-1.5 rounded-full border border-white/10 hidden lg:block">
              💡 Drag photo to position perfectly. Download from the form.
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}