import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok, FaThreads, FaLinkedin } from "react-icons/fa6";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/creatomationstudio", Icon: FaFacebook },
  { label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029VbD31FL5Ui2Tb7S1bK1J", Icon: FaWhatsapp },
  { label: "Instagram", href: "https://www.instagram.com/creatomationstudio", Icon: FaInstagram },
  { label: "TikTok", href: "https://www.tiktok.com/@creatomationstudio", Icon: FaTiktok },
  { label: "Threads", href: "https://www.threads.com/@creatomationstudio", Icon: FaThreads },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/creatomation-studio", Icon: FaLinkedin },
];

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

        {/* Developer Credit Card */}
        <div className="rounded-3xl border border-[#ffdb15]/20 bg-gradient-to-br from-[#0b2152]/60 via-[#071638]/50 to-[#020713]/80 p-5 sm:p-6 mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-100/40 mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
            Designed &amp; Developed By
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://shoaib-memon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white"
            >
              <Image src="/creatomation-logo.png" fill sizes="56px" alt="Creatomation Studio" className="object-contain p-1" />
            </a>
            <div className="min-w-0">
              <a
                href="https://shoaib-memon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-bold text-white hover:text-[#ffdb15] transition-colors"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Creatomation Studio
              </a>
              <a
                href="https://wa.me/923313416850"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp: 0331 3416850"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#ffdb15] hover:text-[#25D366] transition-colors"
              >
                Shoaib Abdul Sattar Khosa <FaWhatsapp size={13} />
              </a>
              <span className="block text-xs text-sky-100/50 mt-0.5">AI · Automation · Web Development · Digital Solutions</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-sky-100/80 hover:text-[#ffdb15] hover:border-[#ffdb15]/50 hover:bg-[#ffdb15]/10 hover:-translate-y-0.5 transition-all"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 22, textAlign: "center" }}>
          <p style={{ color: "rgba(224, 242, 254, 0.4)", fontSize: "0.72rem" }}>
            © {year} The Okhai Memon Jamat. All rights reserved.
          </p>
          <p style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: "0.68rem", color: "rgba(56, 189, 248, 0.6)", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: 6 }}>
            Ask · Learn · Grow | Better Youth, Brighter Future
          </p>
        </div>
      </div>
    </footer>
  );
}
