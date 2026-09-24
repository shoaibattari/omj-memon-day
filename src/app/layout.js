import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://omj-memon-day.vercel.app"
  ),
  title: {
    default: "Karachi Youth Talk 2026 | The Okhai Memon Jamat",
    template: "%s | Karachi Youth Talk 2026",
  },
  description:
    "Sunday 27 September 2026 | 7:00 PM to 9:00 PM | Husein Ebrahim Sports Complex, Hussainabad, Karachi. Keynote by Soban Attari: 'The Future of Youth: From Threats to Opportunities'. Free Entry - Register your pass now!",
  keywords: [
    "Karachi Youth Talk 2026",
    "Okhai Memon Jamat",
    "OMJ",
    "OMYS",
    "Soban Attari",
    "Youth Conference Karachi",
    "Husein Ebrahim Sports Complex",
    "Hussainabad",
    "Free Event Karachi",
    "Career Guidance",
    "Youth Empowerment",
  ],
  authors: [{ name: "The Okhai Memon Jamat", url: "https://omj-memon-day.vercel.app" }],
  creator: "The Okhai Memon Jamat (OMJ)",
  publisher: "The Okhai Memon Jamat (OMJ)",
  applicationName: "Karachi Youth Talk 2026",
  openGraph: {
    title: "Karachi Youth Talk 2026 | The Okhai Memon Jamat",
    description:
      "Sunday 27 September 2026 • 7:00 PM to 9:00 PM • Keynote by Soban Attari at Husein Ebrahim Sports Complex, Karachi. Free entry - Register your pass now!",
    url: "/",
    siteName: "Karachi Youth Talk 2026",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Karachi Youth Talk 2026 - The Okhai Memon Jamat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karachi Youth Talk 2026 | The Okhai Memon Jamat",
    description:
      "Sunday 27 September 2026 • Keynote by Soban Attari at Husein Ebrahim Sports Complex, Karachi. Free Entry - Register now!",
    images: ["/twitter-image"],
    creator: "@okhaimemonjamat",
  },
  icons: {
    icon: [
      { url: "/omj-logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/omj-logo.png",
    apple: [
      { url: "/omj-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/omj-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/omj-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/omj-logo.png" />
        <link rel="shortcut icon" href="/omj-logo.png" />
        <meta name="theme-color" content="#030b1e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
