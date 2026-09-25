"use client";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { toPng } from "html-to-image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCamera, FaDownload, FaUser, FaIdBadge, FaWhatsapp, FaTrashAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EXPORT_WIDTH = 1080;
const MAX_ZOOM = 2.5;

// Stable pass number derived from the name, so the same person always gets the same pass
const passNumberFor = (name) => {
  let h = 0;
  for (const ch of name.trim().toUpperCase()) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return `KYT26-${String(h % 100000).padStart(5, "0")}`;
};

// Decorative barcode bar widths generated from the pass number
const barsFor = (code) =>
  Array.from({ length: 42 }, (_, i) => {
    const c = code.charCodeAt(i % code.length) + i * 7;
    return { w: (c % 3) + 1, gap: ((c >> 2) % 2) + 1 };
  });

export default function PassPage() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const passRef = useRef(null);
  const photoRef = useRef(null);
  const fileInputRef = useRef(null);
  const dragRef = useRef({ startX: 0, startY: 0, posX: 0, posY: 0, limit: 0 });

  const passNo = useMemo(() => (name.trim() ? passNumberFor(name) : "KYT26-00000"), [name]);
  const bars = useMemo(() => barsFor(passNo), [passNo]);

  // Max pan so the zoomed photo always covers the circle
  const panLimit = (z) => ((photoRef.current?.offsetWidth || 0) * (z - 1)) / 2;
  const clamp = (v, limit) => Math.max(-limit, Math.min(limit, v));

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Photo must be under 10MB");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserImage(reader.result);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setUserImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleZoom = (z) => {
    setZoom(z);
    const limit = panLimit(z);
    setPosition((p) => ({ x: clamp(p.x, limit), y: clamp(p.y, limit) }));
  };

  // Drag to reposition (mouse + touch via pointer events)
  const startDrag = (e) => {
    if (!userImage) return;
    dragRef.current = { startX: e.clientX, startY: e.clientY, posX: position.x, posY: position.y, limit: panLimit(zoom) };
    setIsDragging(true);
  };

  const onDrag = useCallback((e) => {
    const d = dragRef.current;
    setPosition({
      x: clamp(d.posX + e.clientX - d.startX, d.limit),
      y: clamp(d.posY + e.clientY - d.startY, d.limit),
    });
  }, []);

  const endDrag = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener("pointermove", onDrag);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    return () => {
      window.removeEventListener("pointermove", onDrag);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, [isDragging, onDrag, endDrag]);

  const onDownload = async () => {
    if (!name.trim()) {
      toast.warn("Please enter your name first");
      return;
    }
    if (!passRef.current) return;

    // Render synchronously so the OMJ logo fallback is in the DOM before capture
    flushSync(() => setIsGenerating(true));
    const loadId = toast.loading("Generating your Entry Pass...");
    try {
      const node = passRef.current;
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: EXPORT_WIDTH / node.offsetWidth,
        backgroundColor: "#020713",
      });
      const link = document.createElement("a");
      const cleanName = name.trim().replace(/[^a-zA-Z0-9]+/g, "-");
      link.download = `Karachi-Youth-Talk-2026-Pass-${cleanName}.png`;
      link.href = dataUrl;
      link.click();
      toast.update(loadId, { render: "Pass downloaded! 🎟️", type: "success", isLoading: false, autoClose: 3000 });
    } catch (err) {
      console.error(err);
      toast.update(loadId, { render: "Download failed. Please try again.", type: "error", isLoading: false, autoClose: 3000 });
    } finally {
      setIsGenerating(false);
    }
  };

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(
      `🎟️ I've got my Entry Pass for *Karachi Youth Talk 2026* with Keynote Speaker *Soban Attari*!\n\n📅 Sunday, 27 September 2026 • 7:00 PM\n📍 H.E. Sports Complex, Hussainabad, Karachi\n\nGet your pass: ${window.location.origin}/pass\nRegister Free: https://forms.gle/5DPXQKVufUGSsJ3T6`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full pl-11 pr-4 py-3.5 bg-[#020817]/80 border border-white/15 rounded-xl text-white text-[15px] placeholder-slate-500 focus:outline-none focus:border-[#ffdb15] focus:ring-2 focus:ring-[#ffdb15]/20 transition-all font-semibold";

  const infoCells = [
    { label: "Date", value: "Sun, 27 Sep" },
    { label: "Time", value: "7:00 PM" },
    { label: "Entry", value: "Free" },
  ];

  return (
    <div className="min-h-screen bg-[#020713] text-[#f0f6ff] flex flex-col overflow-x-clip">
      <Navbar showBack />
      <ToastContainer position="top-center" theme="dark" autoClose={2500} hideProgressBar />

      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1
            style={{ fontFamily: "Oswald, sans-serif" }}
            className="text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide"
          >
            Get Your <span className="grad-gold">Entry Pass</span>
          </h1>
          <p className="text-sm text-slate-400 mt-2">Add your photo and name — then download your personal pass.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ---------- PREVIEW ---------- */}
          <div className="w-full max-w-[380px] mx-auto lg:sticky lg:top-24" style={{ containerType: "inline-size" }}>
            <div
              ref={passRef}
              className="relative w-full overflow-hidden flex flex-col select-none"
              style={{
                aspectRatio: "2 / 3",
                borderRadius: "6cqw",
                border: "0.8cqw solid rgba(255, 219, 21, 0.85)",
                background: [
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 1.4cqw, transparent 1.4cqw 2.8cqw)",
                  "radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.25) 0%, transparent 55%)",
                  "radial-gradient(circle at 50% 35%, #0d3180 0%, #041030 60%, #020713 100%)",
                ].join(", "),
              }}
            >
              {/* Light beams */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "-12cqw",
                  left: "50%",
                  width: "140cqw",
                  height: "90cqw",
                  transform: "translateX(-50%)",
                  background: "conic-gradient(from 180deg at 50% 0%, transparent 150deg, rgba(255,219,21,0.10) 165deg, transparent 172deg, rgba(56,189,248,0.10) 188deg, transparent 195deg, rgba(255,219,21,0.10) 205deg, transparent 212deg)",
                }}
              />

              {/* ===== Main section ===== */}
              <div className="relative flex-1 flex flex-col items-center" style={{ padding: "6cqw 6cqw 0" }}>
                {/* Branding */}
                <div className="flex items-center w-full" style={{ gap: "3cqw" }}>
                  <Image
                    src="/omj-logo.png"
                    alt="OMJ"
                    width={160}
                    height={160}
                    preload
                    className="rounded-full bg-white object-contain shrink-0"
                    style={{ width: "13cqw", height: "13cqw", padding: "0.6cqw", border: "0.6cqw solid #ffdb15" }}
                  />
                  <div className="flex-1" style={{ lineHeight: 1.1 }}>
                    <p
                      style={{ fontFamily: "Oswald, sans-serif", fontSize: "3.2cqw", letterSpacing: "0.12em" }}
                      className="font-bold uppercase text-sky-100/85"
                    >
                      The Okhai Memon Jamat
                    </p>
                    <p style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "7cqw", letterSpacing: "0.04em" }} className="text-[#ffdb15]">
                      Karachi Youth Talk 2026
                    </p>
                  </div>
                </div>

                {/* Pass title */}
                <div
                  className="flex items-center justify-center w-full"
                  style={{ gap: "3cqw", marginTop: "5cqw" }}
                >
                  <span style={{ flex: 1, height: "0.4cqw", background: "linear-gradient(90deg, transparent, #ffdb15)" }} />
                  <p
                    className="uppercase text-white"
                    style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "9cqw", letterSpacing: "0.18em", lineHeight: 1 }}
                  >
                    Entry Pass
                  </p>
                  <span style={{ flex: 1, height: "0.4cqw", background: "linear-gradient(90deg, #ffdb15, transparent)" }} />
                </div>

                {/* Photo */}
                <div className="relative" style={{ marginTop: "5cqw", marginBottom: "5cqw" }}>
                  <div
                    className="absolute pointer-events-none rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: "70cqw",
                      height: "70cqw",
                      transform: "translate(-50%, -50%)",
                      background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 65%)",
                    }}
                  />
                  <div
                    ref={photoRef}
                    onPointerDown={startDrag}
                    className="relative rounded-full overflow-hidden flex items-center justify-center"
                    style={{
                      width: "40cqw",
                      height: "40cqw",
                      border: "1.1cqw solid #ffdb15",
                      background: "radial-gradient(circle, #0c245c 0%, #030b1e 100%)",
                      boxShadow: "0 0 8cqw rgba(255, 219, 21, 0.45)",
                      cursor: userImage ? (isDragging ? "grabbing" : "grab") : "pointer",
                      touchAction: userImage ? "none" : "auto",
                    }}
                    onClick={() => !userImage && fileInputRef.current?.click()}
                  >
                    {userImage ? (
                      <Image
                        src={userImage}
                        alt="Your photo"
                        fill
                        unoptimized
                        draggable={false}
                        className="object-cover pointer-events-none"
                        style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})` }}
                      />
                    ) : isGenerating ? (
                      <Image
                        src="/omj-logo.png"
                        alt="OMJ"
                        fill
                        sizes="400px"
                        loading="eager"
                        draggable={false}
                        className="object-contain bg-white pointer-events-none"
                        style={{ padding: "5cqw" }}
                      />
                    ) : (
                      <div className="flex flex-col items-center text-[#ffdb15]/80">
                        <FaCamera style={{ width: "8cqw", height: "8cqw" }} />
                        <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "3.6cqw" }} className="font-bold uppercase mt-1">
                          Add Photo
                        </span>
                      </div>
                    )}
                  </div>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full font-black uppercase text-[#030b1e]"
                    style={{
                      bottom: "-3cqw",
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "3.4cqw",
                      letterSpacing: "0.1em",
                      padding: "1cqw 4cqw",
                      background: "linear-gradient(90deg, #ffdb15, #f59e0b)",
                      border: "0.45cqw solid #fff",
                    }}
                  >
                    ★ Attendee ★
                  </div>
                </div>

                {/* Name */}
                <h2
                  className="text-white font-extrabold uppercase text-center truncate max-w-full"
                  style={{ fontFamily: "Oswald, sans-serif", fontSize: "8cqw", lineHeight: 1.15, textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
                >
                  {name.trim() || "Your Name"}
                </h2>
                <p
                  className="text-sky-400 font-bold uppercase text-center truncate max-w-full"
                  style={{ fontFamily: "Oswald, sans-serif", fontSize: "4cqw", letterSpacing: "0.12em", marginTop: "1cqw" }}
                >
                  {designation.trim() || "Your Designation"}
                </p>

                {/* Info cells */}
                <div className="grid grid-cols-3 w-full" style={{ gap: "2.5cqw", marginTop: "6cqw" }}>
                  {infoCells.map((c) => (
                    <div
                      key={c.label}
                      className="text-center border border-sky-400/30 bg-[#0b2152]/70"
                      style={{ borderRadius: "3cqw", padding: "2.2cqw 1cqw" }}
                    >
                      <p className="uppercase text-sky-300/80 font-bold" style={{ fontFamily: "Oswald, sans-serif", fontSize: "2.6cqw", letterSpacing: "0.14em" }}>
                        {c.label}
                      </p>
                      <p className="uppercase text-white font-bold" style={{ fontFamily: "Oswald, sans-serif", fontSize: "4cqw", lineHeight: 1.2 }}>
                        {c.value}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="uppercase text-slate-200 font-semibold text-center"
                  style={{ fontFamily: "Oswald, sans-serif", fontSize: "3.3cqw", letterSpacing: "0.05em", marginTop: "3cqw" }}
                >
                  📍 H.E. Sports Complex, Hussainabad, Karachi
                </p>
              </div>

              {/* ===== Perforation ===== */}
              <div className="relative flex items-center" style={{ height: "10cqw" }}>
                <span
                  className="absolute rounded-full bg-[#020713]"
                  style={{ left: "-5.8cqw", width: "10cqw", height: "10cqw", border: "0.8cqw solid rgba(255, 219, 21, 0.85)" }}
                />
                <span
                  className="w-full"
                  style={{ margin: "0 7cqw", borderTop: "0.6cqw dashed rgba(255, 219, 21, 0.5)" }}
                />
                <span
                  className="absolute rounded-full bg-[#020713]"
                  style={{ right: "-5.8cqw", width: "10cqw", height: "10cqw", border: "0.8cqw solid rgba(255, 219, 21, 0.85)" }}
                />
              </div>

              {/* ===== Stub ===== */}
              <div className="relative flex items-center justify-between" style={{ padding: "0 7cqw 6cqw", gap: "4cqw" }}>
                {/* Keynote */}
                <div className="flex items-center" style={{ gap: "2.5cqw" }}>
                  <div
                    className="relative rounded-full overflow-hidden shrink-0"
                    style={{
                      width: "14cqw",
                      height: "14cqw",
                      border: "0.7cqw solid #38bdf8",
                      boxShadow: "0 0 4cqw rgba(56, 189, 248, 0.5)",
                      background: "#0c245c",
                    }}
                  >
                    <Image
                      src="/speaker-soban.jpeg"
                      alt="Soban Attari"
                      fill
                      sizes="200px"
                      draggable={false}
                      className="object-cover pointer-events-none"
                      style={{ objectPosition: "top center" }}
                    />
                  </div>
                  <div style={{ fontFamily: "Oswald, sans-serif", lineHeight: 1.15 }}>
                    <p className="uppercase text-sky-300 font-bold" style={{ fontSize: "2.6cqw", letterSpacing: "0.14em" }}>
                      Keynote
                    </p>
                    <p className="uppercase text-white font-bold" style={{ fontSize: "4cqw" }}>
                      Soban Attari
                    </p>
                  </div>
                </div>

                {/* Barcode + pass no */}
                <div className="flex flex-col items-end">
                  <div className="flex items-stretch bg-white" style={{ height: "9cqw", padding: "1cqw 1.5cqw", borderRadius: "1cqw" }}>
                    {bars.map((b, i) => (
                      <span
                        key={i}
                        className="bg-[#030b1e]"
                        style={{ width: `${b.w * 0.28}cqw`, marginRight: `${b.gap * 0.28}cqw` }}
                      />
                    ))}
                  </div>
                  <p className="font-mono font-bold text-[#ffdb15]" style={{ fontSize: "2.8cqw", letterSpacing: "0.1em", marginTop: "1cqw" }}>
                    {passNo}
                  </p>
                </div>
              </div>
            </div>

            {userImage && (
              <p className="text-xs text-slate-400 text-center mt-3">👆 Zoom in, then drag the photo to adjust</p>
            )}
          </div>

          {/* ---------- FORM ---------- */}
          <div className="w-full max-w-[440px] mx-auto lg:mx-0 bg-gradient-to-b from-[#0a193f]/95 to-[#020718]/95 border border-white/10 border-t-2 border-t-[#ffdb15]/70 rounded-3xl p-6 sm:p-8 space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <div className="pb-5 border-b border-white/10">
              <h2 className="text-lg font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
                Your Details
              </h2>
              <p className="text-xs text-slate-400 mt-1">Preview updates as you type.</p>
            </div>

            {/* Photo */}
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            {!userImage ? (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-3 py-4 border-2 border-dashed border-white/20 hover:border-[#ffdb15] hover:bg-[#ffdb15]/5 rounded-xl text-sm font-bold text-white transition-colors"
              >
                <FaCamera className="text-[#ffdb15]" /> Upload Your Photo
              </button>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/25 hover:bg-sky-500/20 transition-colors"
                  >
                    <FaCamera /> Change Photo
                  </button>
                  <button
                    type="button"
                    onClick={removePhoto}
                    aria-label="Remove photo"
                    className="px-4 py-2.5 rounded-xl text-rose-400 bg-rose-500/10 border border-rose-500/25 hover:bg-rose-500/20 transition-colors"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
                <label className="flex items-center gap-3 text-xs text-slate-300">
                  <span className="shrink-0 font-semibold">Zoom</span>
                  <input
                    type="range"
                    min="1"
                    max={MAX_ZOOM}
                    step="0.05"
                    value={zoom}
                    onChange={(e) => handleZoom(parseFloat(e.target.value))}
                    className="w-full accent-[#ffdb15] cursor-pointer"
                  />
                  <span className="w-10 text-right font-mono text-[#ffdb15]">{Math.round(zoom * 100)}%</span>
                </label>
              </div>
            )}

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="pass-name" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                <input
                  id="pass-name"
                  type="text"
                  maxLength={24}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Muhammad Shoaib"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <label htmlFor="pass-designation" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                Designation
              </label>
              <div className="relative">
                <FaIdBadge className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                <input
                  id="pass-designation"
                  type="text"
                  maxLength={30}
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="e.g. Student, Software Engineer"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-3">
              <button
                type="button"
                onClick={onDownload}
                disabled={isGenerating || !name.trim()}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-[#ffdb15] to-[#f59e0b] text-[#030b1e] text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#ffdb15]/20 hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaDownload /> {isGenerating ? "Generating..." : "Download Pass"}
              </button>
              <button
                type="button"
                onClick={shareToWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white text-sm font-bold transition-colors"
              >
                <FaWhatsapp size={16} /> Share on WhatsApp
              </button>
              <p className="text-center text-[11px] text-slate-500">🔒 Your photo stays on your device.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
