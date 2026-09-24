import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "linear-gradient(180deg, #040e24 0%, #020713 100%)", borderTop: "1px solid rgba(255, 219, 21, 0.25)", padding: "60px 24px 30px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255, 219, 21, 0.5)", background: "#ffffff", position: "relative", flexShrink: 0 }}>
                <Image src="/omj-logo.png" fill sizes="50px" alt="OMJ" style={{ objectFit: "contain", padding: 3 }} />
              </div>
              <div>
                <p style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#ffdb15", textTransform: "uppercase" }}>The Okhai Memon Jamat</p>
                <p style={{ fontSize: "0.68rem", color: "rgba(224, 242, 254, 0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Unity · Service · Progress</p>
              </div>
            </div>
            <p style={{ color: "rgba(224, 242, 254, 0.65)", fontSize: "0.83rem", lineHeight: 1.7, maxWidth: 260 }}>
              Empowering the youth of Karachi through knowledge, motivation, and leadership. Ask. Learn. Grow.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              {["#AskLearnGrow", "#KarachiYouthTalk", "#OMJ2026"].map(t => (
                <span key={t} style={{ background: "rgba(37, 99, 235, 0.2)", border: "1px solid rgba(56, 189, 248, 0.3)", color: "#38bdf8", fontSize: "0.64rem", fontFamily: "Oswald, sans-serif", fontWeight: 700, letterSpacing: "0.05em", padding: "4px 10px", borderRadius: 20 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Event Info */}
          <div>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#ffdb15", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Event Info</h3>
            {[
              { label: "Date", val: "Sunday, 27 September 2026" },
              { label: "Time", val: "7:00 PM – 9:00 PM (After Maghrib)" },
              { label: "Venue", val: "Husein Ebrahim Sports Complex, Block 3, Hussainabad, Federal B Area, Karachi" },
            ].map(r => (
              <div key={r.label} style={{ marginBottom: 12 }}>
                <p style={{ fontSize: "0.62rem", fontWeight: 700, color: "rgba(255, 219, 21, 0.8)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 2 }}>{r.label}</p>
                <p style={{ color: "rgba(224, 242, 254, 0.8)", fontSize: "0.82rem", lineHeight: 1.5 }}>{r.val}</p>
              </div>
            ))}
          </div>

          {/* Organizers */}
          <div>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#ffdb15", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Organizers</h3>
            {[
              { role: "Event Coordinator",       name: "Muhammad Sohail Duroodwala" },
              { role: "Chairman, Social Welfare & Joint Sec.", name: "Shahid Adam Kath" },
              { role: "Hon. General Secretary",  name: "Muhammad Arif Tayyab Suriya" },
            ].map(r => (
              <div key={r.name} style={{ marginBottom: 12 }}>
                <p style={{ fontSize: "0.62rem", fontWeight: 700, color: "rgba(56, 189, 248, 0.85)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{r.role}</p>
                <p style={{ color: "rgba(240, 246, 255, 0.9)", fontSize: "0.82rem", fontWeight: 600 }}>{r.name}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#ffdb15", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Contact Person</h3>
            <a href="https://wa.me/923212305259" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(37, 211, 102, 0.15)", border: "1px solid rgba(37, 211, 102, 0.4)", borderRadius: 10, padding: "10px 14px", textDecoration: "none", marginBottom: 10 }}>
              <span style={{ fontSize: "1.2rem" }}>💬</span>
              <div>
                <p style={{ fontSize: "0.62rem", color: "rgba(224, 242, 254, 0.7)", fontWeight: 600 }}>WhatsApp Inquiry</p>
                <p style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 700 }}>Imran Pasta (0321 2305259)</p>
              </div>
            </a>
            <a href="tel:+923212305259"
              style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(37, 99, 235, 0.18)", border: "1px solid rgba(56, 189, 248, 0.3)", borderRadius: 10, padding: "10px 14px", textDecoration: "none" }}>
              <span style={{ fontSize: "1rem", color: "#ffdb15" }}>📞</span>
              <p style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 700 }}>+92 321 2305259</p>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 22, textAlign: "center" }}>
          <p style={{ color: "rgba(224, 242, 254, 0.4)", fontSize: "0.72rem" }}>
            {year} The Okhai Memon Jamat. App by{" "}
            <Link href="https://wa.me/923313416850" target="_blank" rel="noopener noreferrer"
              style={{ color: "#ffdb15", textDecoration: "none", fontWeight: 700 }}>
              Shoaib Abdul Sattar Khosa
            </Link>
          </p>
          <p style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.68rem", color: "rgba(56, 189, 248, 0.6)", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: 6 }}>
            Ask · Learn · Grow | Better Youth, Brighter Future
          </p>
        </div>
      </div>
    </footer>
  );
}
