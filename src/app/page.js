import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";

const THEMES = [
  {
    number: "01",
    icon: "🎓",
    title: "Skills & Opportunities",
    desc: "Equipping today's youth with modern market-driven capabilities, freelance opportunities, and digital career tracks.",
    tag: "High Demand",
  },
  {
    number: "02",
    icon: "📅",
    title: "Future Planning",
    desc: "Actionable blueprints for financial stability, continuous education, and strategic 5-year goal mapping.",
    tag: "Strategic",
  },
  {
    number: "03",
    icon: "🧠",
    title: "Confidence & Growth",
    desc: "Overcoming self-doubt, public speaking anxiety, and imposter syndrome to build unshakeable leadership mindset.",
    tag: "Mindset",
  },
  {
    number: "04",
    icon: "📈",
    title: "Career Clarity",
    desc: "Cut through confusion. Discover which career fits your strengths, passions, and long-term economic goals.",
    tag: "Guidance",
  },
  {
    number: "05",
    icon: "🕌",
    title: "Deen & Modern Life",
    desc: "Striking the ideal harmony between religious ethics, moral grounding, and ambition in a fast-evolving society.",
    tag: "Values",
  },
  {
    number: "06",
    icon: "🚀",
    title: "Threats To Opportunities",
    desc: "How Karachi's youth can transform economic challenges, AI disruption, and job shifts into monumental breakthroughs.",
    tag: "Flagship Theme",
  },
];

const LOGISTICS = [
  {
    icon: "📅",
    title: "Date",
    main: "Sunday, 27 September 2026",
    sub: "Mark your calendar",
  },
  {
    icon: "🕖",
    title: "Time",
    main: "7:00 PM – 9:00 PM",
    sub: "Sharp after Namaz-e-Maghrib",
  },
  {
    icon: "📍",
    title: "Venue",
    main: "Husein Ebrahim Sports Complex",
    sub: "Block 3, Hussainabad, Federal B Area, Karachi",
  },
  {
    icon: "👥",
    title: "Eligibility",
    main: "Open for Everyone",
    sub: "Male & Female | Memon & Non-Memon",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "#030b1e", minHeight: "100vh", color: "#f0f6ff" }}>
      <Navbar showBack={false} />

      {/* ======================================================== */}
      {/* HERO SECTION — ROYAL BLUE & ELECTRIC GOLD */}
      {/* ======================================================== */}
      <section
        id="about"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(40px, 7vw, 100px) clamp(12px, 3.5vw, 24px) clamp(40px, 6vw, 80px)",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          background: "radial-gradient(ellipse at 75% 25%, rgba(37, 99, 235, 0.45) 0%, rgba(6, 22, 60, 0.7) 45%, #030b1e 85%)",
        }}
      >
        {/* Electric Blue & Cyan Ambient Glow Spheres */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-15%",
            right: "5%",
            width: "clamp(260px, 50vw, 750px)",
            height: "clamp(260px, 50vw, 750px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(37, 99, 235, 0.15) 45%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(70px)",
            maxWidth: "100vw",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "5%",
            width: "clamp(240px, 40vw, 550px)",
            height: "clamp(240px, 40vw, 550px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 219, 21, 0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(60px)",
            maxWidth: "100vw",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gap: "clamp(30px, 6vw, 70px)",
            alignItems: "center",
          }}
          className="lg:grid-cols-12"
        >
          {/* Left Column: Heading, Badges, and CTAs */}
          <div className="lg:col-span-7 anim-fade-left" style={{ zIndex: 10 }}>
            {/* Live Indicator Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(37, 99, 235, 0.25)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                borderRadius: 50,
                padding: "7px clamp(12px, 3vw, 20px)",
                marginBottom: 20,
                maxWidth: "100%",
              }}
            >
              <span
                className="anim-live"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#ffdb15",
                  boxShadow: "0 0 12px #ffdb15",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(0.68rem, 2vw, 0.76rem)",
                  fontWeight: 700,
                  color: "#38bdf8",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Official Event Registration • Free Entry
              </span>
            </div>

            {/* Sub-label */}
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(0.82rem, 2vw, 1.15rem)",
                fontWeight: 600,
                color: "#ffdb15",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: 8,
              }}
            >
              The Okhai Memon Jamat Presents
            </p>

            {/* Main Title */}
            <h1
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "clamp(2.3rem, 9.5vw, 6.8rem)",
                lineHeight: 0.98,
                letterSpacing: "0.02em",
                color: "#ffffff",
                marginBottom: 14,
                textShadow: "0 4px 30px rgba(0, 0, 0, 0.8)",
                wordBreak: "break-word",
              }}
            >
              KARACHI <span className="grad-gold">YOUTH TALK</span> 2026
            </h1>

            {/* Theme Tagline */}
            <div
              style={{
                borderLeft: "4px solid #ffdb15",
                paddingLeft: 18,
                marginBottom: 32,
              }}
            >
              <p
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.1rem, 2.4vw, 1.45rem)",
                  color: "#ffffff",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                The Future of Youth: From Threats to Opportunities
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(224, 242, 254, 0.75)",
                  lineHeight: 1.6,
                }}
              >
                Karachi ke naujawanon ke liye ek tareekhi shaam! Gain clear direction, ask personal questions directly to Soban Attari, and plan your career with confidence.
              </p>
            </div>

            {/* Key Highlights Pill Row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 38,
              }}
            >
              {[
                { icon: "📅", text: "Sun, 27 Sept 2026" },
                { icon: "🕖", text: "7:00 PM – 9:00 PM" },
                { icon: "📍", text: "Hussainabad, Karachi" },
                { icon: "👥", text: "Open For All (Male & Female)" },
              ].map((pill) => (
                <div
                  key={pill.text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "9px 18px",
                    borderRadius: 50,
                    background: "rgba(11, 33, 82, 0.6)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "rgba(240, 246, 255, 0.95)",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span>{pill.icon}</span>
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>

            {/* Call To Actions */}
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <a
                id="hero-register-primary-btn"
                href="https://forms.gle/5DPXQKVufUGSsJ3T6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gold"
              >
                <span>📋 Register Free on Google Form</span>
                <span>→</span>
              </a>

              <a
                id="hero-whatsapp-btn"
                href="https://chat.whatsapp.com/DcwjPcGJEKP8x5fUgd6fFi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-modern"
              >
                <span>💬 Join WhatsApp Community</span>
              </a>
            </div>

            {/* Urgency caption */}
            <p
              style={{
                marginTop: 18,
                fontSize: "0.82rem",
                color: "rgba(224, 242, 254, 0.6)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "#ffdb15" }}>★</span>
              <span>100% Free Entry • Limited Hall Capacity • First Come First Served</span>
            </p>
          </div>

          {/* Right Column: Keynote Speaker Card */}
          <div className="lg:col-span-5 anim-fade-right" style={{ zIndex: 10 }}>
            <div
              style={{
                position: "relative",
                maxWidth: 430,
                margin: "0 auto",
              }}
            >
              {/* Outer Blue Aura Glow */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -14,
                  borderRadius: 36,
                  background: "radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(255, 219, 21, 0.25) 50%, transparent 80%)",
                  filter: "blur(25px)",
                  zIndex: 0,
                }}
              />

              {/* Main Card Container */}
              <div
                className="glass-panel"
                style={{
                  position: "relative",
                  borderRadius: 28,
                  padding: 24,
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  zIndex: 1,
                  background: "rgba(7, 24, 62, 0.8)",
                }}
              >
                {/* Yellow Brush Header Badge from Poster */}
                <div style={{ textAlign: "center", marginBottom: 14 }}>
                  <div
                    style={{
                      background: "linear-gradient(90deg, #ffdb15, #ffcc00)",
                      color: "#030b1e",
                      fontFamily: "Oswald, sans-serif",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "6px 20px",
                      borderRadius: 50,
                      display: "inline-block",
                      boxShadow: "0 4px 15px rgba(255, 219, 21, 0.4)",
                    }}
                  >
                    🎤 KEY NOTE SPEAKER
                  </div>
                </div>

                {/* Speaker Avatar Frame */}
                <div
                  className="speaker-avatar-frame"
                  style={{
                    width: "100%",
                    height: "clamp(250px, 62vw, 380px)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/speaker-soban.jpeg"
                    fill
                    sizes="(max-width: 768px) 100vw, 430px"
                    alt="Soban Attari - Keynote Motivational Speaker"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    priority
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay at bottom of image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(3, 11, 30, 0.85) 0%, transparent 50%)",
                    }}
                  />
                </div>

                {/* Speaker Info Details */}
                <div style={{ textAlign: "center", marginTop: 14 }}>
                  <h3
                    style={{
                      fontFamily: "Bebas Neue, sans-serif",
                      fontSize: "clamp(1.9rem, 6vw, 2.5rem)",
                      color: "#ffffff",
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    SOBAN ATTARI
                  </h3>
                  <p
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#ffdb15",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      marginBottom: 12,
                    }}
                  >
                    MOTIVATIONAL SPEAKER
                  </p>
                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "rgba(224, 242, 254, 0.8)",
                      lineHeight: 1.5,
                      marginBottom: 18,
                    }}
                  >
                    &ldquo;Karachi Kay Naujawan Badlein Ge Kismat! Soban Attari khud stage par aapke sawalat ke jawab denge.&rdquo;
                  </p>

                  {/* Micro stats inside card */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 10,
                      paddingTop: 14,
                      borderTop: "1px solid rgba(56, 189, 248, 0.2)",
                    }}
                  >
                    <div style={{ background: "rgba(3, 11, 30, 0.6)", borderRadius: 10, padding: "8px 10px", border: "1px solid rgba(56, 189, 248, 0.25)" }}>
                      <p style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "1.2rem", color: "#38bdf8", lineHeight: 1 }}>
                        LIVE STAGE
                      </p>
                      <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.65rem", color: "rgba(224, 242, 254, 0.7)", textTransform: "uppercase" }}>
                        Q&amp;A Session
                      </p>
                    </div>
                    <div style={{ background: "rgba(3, 11, 30, 0.6)", borderRadius: 10, padding: "8px 10px", border: "1px solid rgba(255, 219, 21, 0.25)" }}>
                      <p style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "1.2rem", color: "#ffdb15", lineHeight: 1 }}>
                        WORKSHOP
                      </p>
                      <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.65rem", color: "rgba(224, 242, 254, 0.7)", textTransform: "uppercase" }}>
                        Notebook &amp; Pen Activity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* COUNTDOWN & URGENCY BAR */}
      {/* ======================================================== */}
      <section
        style={{
          background: "linear-gradient(180deg, #071942 0%, #0a2560 100%)",
          borderTop: "1px solid rgba(255, 219, 21, 0.3)",
          borderBottom: "1px solid rgba(255, 219, 21, 0.3)",
          padding: "36px 24px",
          position: "relative",
          zIndex: 20,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: "1.2rem" }}>⏳</span>
              <p
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: "#ffdb15",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Countdown To Grand Summit
              </p>
            </div>

            <Countdown />

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                padding: "6px 20px",
                borderRadius: 50,
                marginTop: 6,
              }}
            >
              <span style={{ color: "#ef4444", fontSize: "0.85rem" }}>⏱</span>
              <p
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#fca5a5",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                HURRY UP! JALDI SE REGISTRATION FORM FILL KRLE — LIMITED SEATS!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SPECIAL POSTER HIGHLIGHTS: ACTIVITY & SURPRISE GIFT */}
      {/* ======================================================== */}
      <section
        id="special-activity"
        style={{
          padding: "clamp(50px, 8vw, 90px) clamp(12px, 3.5vw, 24px)",
          background: "#030b1e",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 50px" }}>
            <span className="section-accent-bar" />
            <h2
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "#ffffff",
                letterSpacing: "0.03em",
                marginBottom: 12,
              }}
            >
              SPECIAL FEATURES <span className="grad-gold">OF THE EVENT</span>
            </h2>
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                color: "rgba(224, 242, 254, 0.7)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Direct highlights straight from the official announcement flyer
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "clamp(16px, 3vw, 28px)",
            }}
          >
            {/* Card 1: Special Activity */}
            <div
              className="glass-card"
              style={{
                borderRadius: 24,
                padding: "36px 30px",
                position: "relative",
                border: "2px solid rgba(255, 219, 21, 0.4)",
                background: "linear-gradient(145deg, rgba(14, 38, 98, 0.6) 0%, rgba(4, 14, 38, 0.8) 100%)",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(90deg, #ffdb15, #ffcc00)",
                  color: "#030b1e",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "8px 18px",
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 20,
                  boxShadow: "0 4px 15px rgba(255, 219, 21, 0.4)",
                }}
              >
                <span>📢</span>
                <span>SPECIAL ACTIVITY HOGI EVENT ME</span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                <span style={{ fontSize: "2.4rem", flexShrink: 0 }}>📓</span>
                <div>
                  <h3
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Notebook and Pen Zaroori Layega
                  </h3>
                  <p style={{ color: "rgba(224, 242, 254, 0.8)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    So tamam participants apne sath <strong>Notebook and Pen</strong> layega. Session me practical exercise aur live planning exercise karwayi jayegi jo aapke career ke liye turning point hogi!
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Surprise Gift */}
            <div
              className="surprise-box"
              style={{
                borderRadius: 24,
                padding: "36px 30px",
                position: "relative",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(90deg, #ffdb15, #ffcc00)",
                  color: "#030b1e",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "8px 18px",
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 20,
                  boxShadow: "0 4px 15px rgba(255, 219, 21, 0.4)",
                }}
              >
                <span>🎁</span>
                <span>KUCH SPECIAL APE SUB K LIYE</span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                <span style={{ fontSize: "2.4rem", flexShrink: 0 }}>✨</span>
                <div>
                  <h3
                    style={{
                      fontFamily: "Bebas Neue, sans-serif",
                      fontSize: "1.9rem",
                      color: "#ffdb15",
                      letterSpacing: "0.04em",
                      lineHeight: 1.1,
                      marginBottom: 6,
                    }}
                  >
                    SURPRISE HOGA KUCH MIL BHI SAKTA HAI!
                  </h3>
                  <p style={{ color: "rgba(224, 242, 254, 0.8)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    The Okhai Memon Jamat has arranged an exclusive surprise for attendees present at Husein Ebrahim Sports Complex. Don&apos;t miss this golden opportunity!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SUMMIT PILLARS & THEMES */}
      {/* ======================================================== */}
      <section id="themes" style={{ padding: "clamp(50px, 8vw, 90px) clamp(12px, 3.5vw, 24px)", background: "linear-gradient(180deg, #030b1e 0%, #06183d 100%)", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 50px" }}>
            <span className="section-accent-bar" />
            <h2
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "#ffffff",
                letterSpacing: "0.03em",
                marginBottom: 12,
              }}
            >
              WHAT WILL BE <span className="grad-gold">DISCUSSED?</span>
            </h2>
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                color: "rgba(224, 242, 254, 0.7)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Essential pillars designed to transform obstacles into unprecedented opportunities for Pakistani youth
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "clamp(16px, 3vw, 24px)",
            }}
          >
            {THEMES.map((item) => (
              <div
                key={item.title}
                className="glass-card"
                style={{
                  borderRadius: 22,
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top Row: Number & Tag */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Bebas Neue, sans-serif",
                      fontSize: "1.8rem",
                      color: "rgba(255, 219, 21, 0.65)",
                      lineHeight: 1,
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    style={{
                      background: "rgba(37, 99, 235, 0.25)",
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      borderRadius: 50,
                      padding: "4px 12px",
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "#38bdf8",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Icon & Title */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 14,
                      background: "rgba(37, 99, 235, 0.25)",
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(224, 242, 254, 0.75)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SPECIAL INTERACTIVE Q&A HIGHLIGHT */}
      {/* ======================================================== */}
      <section
        id="qa-session"
        style={{
          padding: "clamp(50px, 8vw, 90px) clamp(12px, 3.5vw, 24px)",
          background: "linear-gradient(135deg, #030b1e 0%, #092357 50%, #030b1e 100%)",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(56, 189, 248, 0.2)",
          borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gap: "clamp(24px, 5vw, 50px)",
              alignItems: "center",
            }}
            className="lg:grid-cols-12"
          >
            {/* Left Content (Cols 7) */}
            <div className="lg:col-span-7">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255, 219, 21, 0.12)",
                  border: "1px solid rgba(255, 219, 21, 0.35)",
                  borderRadius: 50,
                  padding: "6px 16px",
                  marginBottom: 16,
                  maxWidth: "100%",
                }}
              >
                <span style={{ color: "#ffdb15", fontSize: "0.85rem" }}>💬</span>
                <span
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#ffdb15",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                  }}
                >
                  Interactive Q&amp;A Opportunity
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "Bebas Neue, sans-serif",
                  fontSize: "clamp(2.1rem, 6.5vw, 4.4rem)",
                  color: "#ffffff",
                  lineHeight: 1.05,
                  letterSpacing: "0.02em",
                  marginBottom: 16,
                  wordBreak: "break-word",
                }}
              >
                EK AAP KA <span className="grad-gold">SAWAL</span>
                <br />
                OR SOBAN ATTARI K JAWAB!
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(224, 242, 254, 0.85)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                Aap apne sawal Google Form ke zariye bhejein — <strong>Career, Zindagi, Deen, Motivations, Future</strong> ya kisi bhi zati masle par. Soban Attari live stage par select kiye gaye sawalat ka tafseelan jawab denge!
              </p>

              {/* Question Category Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                {[
                  "💼 Career Ambitions",
                  "🕌 Deen & Morality",
                  "💡 Personal Motivations",
                  "🎯 Future Clarity",
                  "🤝 Mental Resilience",
                  "📈 Freelance & Business",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(37, 99, 235, 0.18)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      borderRadius: 10,
                      padding: "8px 14px",
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "#ffffff",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                id="qa-section-form-btn"
                href="https://forms.gle/5DPXQKVufUGSsJ3T6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gold"
              >
                <span>✍️ Submit Your Question via Google Form</span>
                <span>→</span>
              </a>
            </div>

            {/* Right Card Callout (Cols 5) */}
            <div className="lg:col-span-5">
              <div
                className="glass-panel"
                style={{
                  borderRadius: 24,
                  padding: "36px 30px",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 18,
                    background: "rgba(255, 219, 21, 0.15)",
                    border: "1px solid rgba(255, 219, 21, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: 20,
                  }}
                >
                  📋
                </div>

                <h3
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    marginBottom: 12,
                  }}
                >
                  How To Ask Your Question?
                </h3>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 24px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {[
                    "Click on the Google Form registration link.",
                    "Fill in your name & select your topic of concern.",
                    "Type your honest question for Soban Attari.",
                    "Attend on 27th September at Husein Ebrahim Sports Complex to hear your answer live!",
                  ].map((step, idx) => (
                    <li
                      key={step}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        fontSize: "0.88rem",
                        color: "rgba(224, 242, 254, 0.8)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "#ffdb15",
                          color: "#030b1e",
                          fontFamily: "Oswald, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.35)",
                    borderRadius: 12,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>⚠️</span>
                  <p
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#fca5a5",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Question collection window closes soon. Jaldi fill karen!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* KEYNOTE SPEAKER SPOTLIGHT */}
      {/* ======================================================== */}
      <section id="speaker" style={{ padding: "clamp(50px, 8vw, 90px) clamp(12px, 3.5vw, 24px)", background: "#030b1e" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 50px" }}>
            <span className="section-accent-bar" />
            <h2
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                color: "#ffffff",
                letterSpacing: "0.03em",
                marginBottom: 10,
              }}
            >
              MEET YOUR <span className="grad-gold">KEYNOTE SPEAKER</span>
            </h2>
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(0.85rem, 2vw, 0.98rem)",
                color: "rgba(224, 242, 254, 0.65)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Direct inspiration, wisdom, and actionable life roadmaps
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "clamp(24px, 5vw, 50px)",
              alignItems: "center",
            }}
            className="lg:grid-cols-12"
          >
            {/* Speaker Large Image */}
            <div className="lg:col-span-5" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: 390 }}>
                <div
                  className="speaker-avatar-frame"
                  style={{
                    width: "100%",
                    height: "clamp(280px, 75vw, 470px)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/speaker-soban.jpeg"
                    fill
                    sizes="(max-width: 768px) 100vw, 390px"
                    alt="Soban Attari"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #ffdb15 0%, #ffcc00 100%)",
                    color: "#030b1e",
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(0.72rem, 2.2vw, 0.85rem)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "7px clamp(12px, 3vw, 24px)",
                    borderRadius: 50,
                    whiteSpace: "nowrap",
                    maxWidth: "92%",
                    textAlign: "center",
                    boxShadow: "0 8px 25px rgba(255, 219, 21, 0.5)",
                    zIndex: 2,
                  }}
                >
                  🎤 Keynote Speaker • Soban Attari
                </div>
              </div>
            </div>

            {/* Speaker Bio & Details */}
            <div className="lg:col-span-7" style={{ marginTop: 20 }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 18px",
                  borderRadius: 50,
                  background: "rgba(255, 219, 21, 0.15)",
                  border: "1px solid rgba(255, 219, 21, 0.4)",
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#ffdb15",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Renowned Motivational Speaker
              </div>

              <h3
                style={{
                  fontFamily: "Bebas Neue, sans-serif",
                  fontSize: "clamp(2.8rem, 6vw, 4.4rem)",
                  color: "#ffffff",
                  lineHeight: 1,
                  letterSpacing: "0.03em",
                  marginBottom: 8,
                }}
              >
                SOBAN ATTARI
              </h3>
              <p
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#38bdf8",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 20,
                }}
              >
                Motivational Speaker &amp; Youth Advocate
              </p>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "rgba(224, 242, 254, 0.8)",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                Soban Attari is widely revered across Pakistan for his profound, relatable, and heart-touching sessions that connect Islamic wisdom with real-world professional growth. His dynamic storytelling and sincere guidance have helped thousands of young minds conquer confusion, find purposeful careers, and build resilient lives.
              </p>

              {/* Special Activity Notice Box from poster */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(14, 42, 107, 0.45) 100%)",
                  border: "1.5px solid rgba(255, 219, 21, 0.4)",
                  borderRadius: 18,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  marginBottom: 30,
                }}
              >
                <span style={{ fontSize: "2rem", flexShrink: 0 }}>📓</span>
                <div>
                  <p
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#ffdb15",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 4,
                    }}
                  >
                    Special Activity Alert — Bring Notebook &amp; Pen!
                  </p>
                  <p style={{ fontSize: "0.86rem", color: "rgba(224, 242, 254, 0.8)", lineHeight: 1.5 }}>
                    So tamam participants apne sath <strong>Notebook and Pen</strong> zaroor layein. Session ke doran ek practical life-mapping exercise karwayi jayegi!
                  </p>
                </div>
              </div>

              {/* Speaker CTAs */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="https://forms.gle/5DPXQKVufUGSsJ3T6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gold"
                >
                  <span>📋 Register To Attend Session</span>
                  <span>→</span>
                </a>
                <a
                  href="https://chat.whatsapp.com/DcwjPcGJEKP8x5fUgd6fFi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-modern"
                >
                  <span>💬 Join Community</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* EVENT LOGISTICS & VENUE */}
      {/* ======================================================== */}
      <section
        id="venue"
        style={{
          padding: "clamp(50px, 8vw, 90px) clamp(12px, 3.5vw, 24px)",
          background: "linear-gradient(180deg, #030b1e 0%, #061942 100%)",
          borderTop: "1px solid rgba(56, 189, 248, 0.2)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 50px" }}>
            <span className="section-accent-bar" />
            <h2
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                color: "#ffffff",
                letterSpacing: "0.03em",
                marginBottom: 10,
              }}
            >
              EVENT <span className="grad-gold">BLUEPRINT &amp; VENUE</span>
            </h2>
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                color: "rgba(224, 242, 254, 0.65)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              All the key details you need to reach comfortably and on time
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "clamp(14px, 3vw, 22px)",
              marginBottom: 40,
            }}
          >
            {LOGISTICS.map((item) => (
              <div
                key={item.title}
                className="glass-card"
                style={{
                  borderRadius: 20,
                  padding: "30px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "rgba(37, 99, 235, 0.25)",
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.6rem",
                      marginBottom: 16,
                    }}
                  >
                    {item.icon}
                  </div>
                  <p
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      color: "#ffdb15",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </p>
                  <h4
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.3,
                      marginBottom: 6,
                    }}
                  >
                    {item.main}
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(224, 242, 254, 0.7)",
                    lineHeight: 1.4,
                    marginTop: 10,
                  }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Location Map / Directions Callout */}
          <div
            className="glass-panel"
            style={{
              borderRadius: 22,
              padding: "32px 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 24,
              border: "1px solid rgba(255, 219, 21, 0.3)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: "1.3rem" }}>🏛️</span>
                <h4
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  Husein Ebrahim Sports Complex &amp; Community Centre
                </h4>
              </div>
              <p style={{ fontSize: "0.92rem", color: "rgba(224, 242, 254, 0.75)", maxWidth: 650 }}>
                Block 3, Hussainabad, Federal B Area, Karachi. Convenient parking and comfortable seating available for all participants.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Husein+Ebrahim+Sports+Complex+Hussainabad+Karachi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              📍 Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FINAL HIGH-CONVERSION CTA & INQUIRIES */}
      {/* ======================================================== */}
      <section
        id="register"
        style={{
          padding: "clamp(50px, 8vw, 100px) clamp(12px, 3.5vw, 24px)",
          background: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.35) 0%, #030b1e 75%)",
          position: "relative",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          {/* Urgency Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              borderRadius: 50,
              padding: "7px clamp(12px, 3vw, 20px)",
              marginBottom: 20,
              maxWidth: "100%",
            }}
          >
            <span style={{ color: "#ef4444", fontSize: "0.75rem", flexShrink: 0 }}>●</span>
            <span
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(0.68rem, 2.2vw, 0.8rem)",
                fontWeight: 700,
                color: "#fca5a5",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              HURRY UP! JALDI SE REGISTRATION FORM FILL KRLE!
            </span>
          </div>

          <span className="section-accent-bar" />

          {/* Punchy Heading */}
          <h2
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              fontSize: "clamp(2.1rem, 7vw, 5.2rem)",
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              marginBottom: 16,
              wordBreak: "break-word",
            }}
          >
            APNA FUTURE <span className="grad-gold">BACHANA HAI?</span>
          </h2>

          <p
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 500,
              color: "rgba(224, 242, 254, 0.85)",
              letterSpacing: "0.04em",
              marginBottom: 40,
            }}
          >
            To is session me zaroori aana hai. Fill Google form &amp; confirm your seat today!
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 50,
            }}
          >
            <a
              id="cta-form-btn"
              href="https://forms.gle/5DPXQKVufUGSsJ3T6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gold anim-glow"
              style={{ fontSize: "1.1rem", padding: "18px 38px" }}
            >
              <span>📋 Register Free on Google Form</span>
              <span>→</span>
            </a>

            <a
              id="cta-wa-btn"
              href="https://chat.whatsapp.com/DcwjPcGJEKP8x5fUgd6fFi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-modern"
              style={{ fontSize: "1.1rem", padding: "18px 36px" }}
            >
              <span>💬 Join WhatsApp Community</span>
            </a>
          </div>

          {/* Contact Person Inquiry Card */}
          <div
            className="glass-panel"
            style={{
              borderRadius: 24,
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
              maxWidth: 520,
              margin: "0 auto",
              border: "1px solid rgba(255, 219, 21, 0.35)",
            }}
          >
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.76rem",
                fontWeight: 700,
                color: "rgba(224, 242, 254, 0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              CONTACT PERSON / INQUIRIES
            </p>
            <p
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "2.3rem",
                color: "#ffdb15",
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              IMRAN PASTA
            </p>
            <p style={{ fontSize: "0.9rem", color: "rgba(224, 242, 254, 0.75)" }}>
              Have any queries about timing, passes, or registration?
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 4 }}>
              <a
                href="https://wa.me/923212305259"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-modern"
                style={{ padding: "10px 22px", fontSize: "0.9rem" }}
              >
                💬 WhatsApp: 0321 2305259
              </a>
              <a
                href="tel:+923212305259"
                className="btn-outline-gold"
                style={{ padding: "10px 22px", fontSize: "0.9rem" }}
              >
                📞 Call Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ORGANIZERS & LEADERSHIP CREDITS */}
      {/* ======================================================== */}
      <section
        style={{
          background: "linear-gradient(90deg, #040e24 0%, #082152 50%, #040e24 100%)",
          padding: "44px 24px",
          borderTop: "1px solid rgba(56, 189, 248, 0.2)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 26,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "rgba(224, 242, 254, 0.6)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                marginBottom: 4,
              }}
            >
              Organized By
            </p>
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#ffffff",
              }}
            >
              Social Welfare Committee — The Okhai Memon Jamat (OMJ)
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
            {[
              { role: "Event Coordinator", name: "Muhammad Sohail Duroodwala" },
              { role: "Chairman, Social Welfare & Joint Sec.", name: "Shahid Adam Kath" },
              { role: "Hon. General Secretary", name: "Muhammad Arif Tayyab Suriya" },
            ].map((lead) => (
              <div key={lead.name}>
                <p
                  style={{
                    fontSize: "0.64rem",
                    fontWeight: 700,
                    color: "rgba(224, 242, 254, 0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 2,
                  }}
                >
                  {lead.role}
                </p>
                <p
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "#ffffff",
                  }}
                >
                  {lead.name}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "rgba(37, 99, 235, 0.2)",
              border: "1px solid rgba(255, 219, 21, 0.4)",
              borderRadius: 14,
              padding: "12px 22px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "1.3rem",
                color: "#ffdb15",
                letterSpacing: "0.08em",
                lineHeight: 1,
                marginBottom: 2,
              }}
            >
              Sunday 27 Sept 2026
            </p>
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.68rem",
                color: "rgba(224, 242, 254, 0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              Hussainabad, Karachi
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
