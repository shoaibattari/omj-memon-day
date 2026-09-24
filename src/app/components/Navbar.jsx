"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ showBack = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  // Close on Escape or screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: "About Event", href: "/#about", icon: "🏛️" },
    { label: "Keynote Speaker", href: "/#speaker", icon: "🎤" },
    { label: "Special Features", href: "/#special-activity", icon: "✨" },
    { label: "Q&A Session", href: "/#qa-session", icon: "❓" },
    { label: "Venue & Details", href: "/#venue", icon: "📍" },
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          height: "60px",
          background: scrolled || open ? "rgba(3, 11, 30, 0.98)" : "rgba(3, 11, 30, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled || open
            ? "1px solid rgba(255, 219, 21, 0.35)"
            : "1px solid rgba(56, 189, 248, 0.18)",
          boxShadow: scrolled || open ? "0 8px 30px rgba(0, 0, 0, 0.7)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            height: "100%",
            margin: "0 auto",
            padding: "0 clamp(10px, 3vw, 22px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* Brand - Scaled for 320px+ Mobile Screens */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(6px, 2vw, 10px)",
              textDecoration: "none",
              minWidth: 0,
              flex: "1 1 auto",
              maxWidth: "calc(100% - 48px)",
            }}
          >
            {/* OMJ Crest Icon */}
            <div
              style={{
                width: "clamp(32px, 8.5vw, 42px)",
                height: "clamp(32px, 8.5vw, 42px)",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1.5px solid rgba(255, 219, 21, 0.75)",
                background: "#ffffff",
                position: "relative",
                flexShrink: 0,
                boxShadow: "0 0 12px rgba(37, 99, 235, 0.4)",
              }}
            >
              <Image
                src="/omj-logo.png"
                fill
                sizes="42px"
                alt="OMJ"
                style={{ objectFit: "contain", padding: 2 }}
                priority
              />
            </div>

            {/* Typography */}
            <div style={{ minWidth: 0, overflow: "hidden", flex: "1 1 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "clamp(0.52rem, 1.8vw, 0.65rem)",
                    fontWeight: 700,
                    color: "rgba(224, 242, 254, 0.75)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  The Okhai Memon Jamat
                </span>
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#ffdb15",
                    boxShadow: "0 0 6px #ffdb15",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(0.78rem, 3.2vw, 1.05rem)",
                  fontWeight: 700,
                  color: "#ffdb15",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  lineHeight: 1.15,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Karachi Youth Talk 2026
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible on Laptop, Hidden on Mobile) */}
          {!showBack && (
            <nav
              className="hidden lg:flex nav-desktop"
              style={{ alignItems: "center", gap: "clamp(12px, 1.8vw, 22px)" }}
              aria-label="Desktop Navigation"
            >
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "rgba(240, 246, 255, 0.82)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    padding: "6px 2px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffdb15")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(240, 246, 255, 0.82)")
                  }
                >
                  {item.label}
                </a>
              ))}

              <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)" }} />

              <Link
                href="/pass"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#38bdf8",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  padding: "5px 11px",
                  borderRadius: "7px",
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  transition: "all 0.2s ease",
                }}
              >
                🎫 Pass
              </Link>

              <Link
                href="/dp"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#e879f9",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  padding: "5px 11px",
                  borderRadius: "7px",
                  background: "rgba(232, 121, 249, 0.12)",
                  border: "1px solid rgba(232, 121, 249, 0.3)",
                  transition: "all 0.2s ease",
                }}
              >
                🖼️ DP Maker
              </Link>

              <a
                id="nav-register-btn"
                href="https://forms.gle/5DPXQKVufUGSsJ3T6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gold"
                style={{
                  padding: "8px 18px",
                  fontSize: "0.84rem",
                  letterSpacing: "0.06em",
                }}
              >
                Register Free
              </a>
            </nav>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {showBack && (
              <Link
                href="/"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.84rem",
                  fontWeight: 700,
                  color: "#ffdb15",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "5px 12px",
                  borderRadius: 7,
                  background: "rgba(255, 219, 21, 0.12)",
                  border: "1px solid rgba(255, 219, 21, 0.3)",
                  flexShrink: 0,
                }}
              >
                ← Back
              </Link>
            )}

            {/* Responsive Mobile Hamburger Button (Visible on Mobile, Hidden on Laptop) */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              className="flex lg:hidden flex-col items-center justify-center nav-mobile-toggle"
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                border: open
                  ? "1.5px solid rgba(255, 219, 21, 0.85)"
                  : "1.5px solid rgba(255, 219, 21, 0.4)",
                background: open
                  ? "rgba(255, 219, 21, 0.22)"
                  : "rgba(37, 99, 235, 0.22)",
                cursor: "pointer",
                gap: 4.5,
                padding: 0,
                flexShrink: 0,
                transition: "all 0.2s ease",
                boxShadow: open
                  ? "0 0 12px rgba(255, 219, 21, 0.4)"
                  : "0 0 6px rgba(37, 99, 235, 0.25)",
              }}
            >
              {/* 3 Animated Bars */}
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2.2,
                  borderRadius: 2,
                  background: "#ffdb15",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: open ? "translateY(6.7px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2.2,
                  borderRadius: 2,
                  background: "#ffdb15",
                  transition: "all 0.2s ease",
                  opacity: open ? 0 : 1,
                  transform: open ? "scale(0)" : "scale(1)",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2.2,
                  borderRadius: 2,
                  background: "#ffdb15",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: open ? "translateY(-6.7px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Dimmed Touch Backdrop */}
      {open && (
        <div
          id="mobile-nav-backdrop"
          onClick={() => setOpen(false)}
          className="block lg:hidden nav-mobile-backdrop"
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            zIndex: 9998,
          }}
        />
      )}

      {/* Small-Mobile Friendly Drawer */}
      {open && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          className="flex lg:hidden flex-col justify-between nav-mobile-drawer anim-drawer-in"
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            bottom: 0,
            height: "calc(100dvh - 60px)",
            maxHeight: "calc(100dvh - 60px)",
            background: "rgba(2, 8, 24, 0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "2px solid rgba(255, 219, 21, 0.3)",
            padding: "16px 16px 28px",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            zIndex: 9999,
          }}
        >
          {/* Nav Links & Quick Tools */}
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.64rem",
                fontWeight: 700,
                color: "rgba(224, 242, 254, 0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                marginBottom: 2,
                paddingLeft: 4,
              }}
            >
              Event Sections
            </p>

            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "rgba(37, 99, 235, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.16)",
                  transition: "all 0.15s ease",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                <span style={{ color: "#ffdb15", fontSize: "1rem" }}>→</span>
              </a>
            ))}

            {/* Event Quick Tools Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 7,
                marginTop: 6,
              }}
            >
              <Link
                href="/pass"
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  color: "#38bdf8",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  padding: "10px 6px",
                  borderRadius: 10,
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.28)",
                }}
              >
                <span>🎫</span> Pass
              </Link>

              <Link
                href="/dp"
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  color: "#e879f9",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  padding: "10px 6px",
                  borderRadius: 10,
                  background: "rgba(232, 121, 249, 0.12)",
                  border: "1px solid rgba(232, 121, 249, 0.28)",
                }}
              >
                <span>🖼️</span> DP Maker
              </Link>
            </div>
          </div>

          {/* Mobile Bottom Action Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginTop: 14,
              paddingTop: 12,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <a
              id="mobile-drawer-reg-btn"
              href="https://forms.gle/5DPXQKVufUGSsJ3T6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gold flex items-center"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "12px 14px",
                fontSize: "0.92rem",
                borderRadius: 10,
              }}
              onClick={() => setOpen(false)}
            >
              📋 Register Now — Free Entry
            </a>

            <a
              id="mobile-drawer-wa-btn"
              href="https://chat.whatsapp.com/DcwjPcGJEKP8x5fUgd6fFi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-modern flex items-center"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "11px 14px",
                fontSize: "0.88rem",
                borderRadius: 10,
              }}
              onClick={() => setOpen(false)}
            >
              💬 Join WhatsApp Community
            </a>

            {/* Quick Contact Card */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "rgba(3, 11, 30, 0.8)",
                borderRadius: 9,
                padding: "7px 10px",
                border: "1px solid rgba(255, 219, 21, 0.2)",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.58rem",
                    color: "rgba(224, 242, 254, 0.6)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Inquiries
                </p>
                <p
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.8rem",
                    color: "#ffdb15",
                    fontWeight: 700,
                  }}
                >
                  Imran Pasta
                </p>
              </div>
              <a
                href="https://wa.me/923212305259"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.76rem",
                  color: "#25d366",
                  textDecoration: "none",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                💬 0321 2305259
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}