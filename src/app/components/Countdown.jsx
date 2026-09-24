"use client";
import { useState, useEffect } from "react";

function pad(n) {
  return String(n).padStart(2, "0");
}

const TARGET = new Date("2026-09-27T19:00:00+05:00").getTime();

function calcTime() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0, done: false });

  useEffect(() => {
    setMounted(true);
    setTime(calcTime());
    const interval = setInterval(() => {
      setTime(calcTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", val: mounted ? time.d : 0 },
    { label: "Hours", val: mounted ? time.h : 0 },
    { label: "Minutes", val: mounted ? time.m : 0 },
    { label: "Seconds", val: mounted ? time.s : 0 },
  ];

  if (mounted && time.done) {
    return (
      <div style={{ textAlign: "center", padding: "16px" }}>
        <p
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "1.6rem",
            color: "#ffdb15",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          🎉 The Event is Live Now!
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "clamp(6px, 2vw, 16px)",
        maxWidth: 520,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          style={{
            background: "linear-gradient(145deg, rgba(16, 46, 110, 0.85) 0%, rgba(4, 14, 38, 0.95) 100%)",
            border: "1px solid rgba(255, 219, 21, 0.35)",
            borderRadius: "clamp(10px, 2.5vw, 18px)",
            padding: "clamp(10px, 2.2vw, 16px) clamp(4px, 1.2vw, 12px)",
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(56, 189, 248, 0.25)",
            backdropFilter: "blur(12px)",
            minWidth: 0,
          }}
        >
          <p
            suppressHydrationWarning
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              fontSize: "clamp(1.7rem, 5.5vw, 3.2rem)",
              color: "#ffdb15",
              lineHeight: 1,
              marginBottom: 3,
              textShadow: "0 0 20px rgba(255, 219, 21, 0.45)",
            }}
          >
            {mounted ? pad(unit.val) : "--"}
          </p>
          <span
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(0.58rem, 1.8vw, 0.7rem)",
              color: "rgba(224, 242, 254, 0.75)",
              textTransform: "uppercase",
              letterSpacing: "clamp(0.04em, 0.2vw, 0.14em)",
              fontWeight: 600,
              display: "block",
            }}
          >
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
