import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

const SITE_URL = "https://labs.edtools.co"
const REPO_URL = "https://github.com/soyandresalcedo/Edtools-labs-landing"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Edtools Labs — AI STEAM tutor for kinematics",
    template: "%s — Edtools Labs",
  },
  description:
    "Edtools Labs is an open-source AI STEAM tutor that turns any phone into an interactive physics lab. Voice, ink, and tilt sensors in one bilingual flow (EN/ES). Built with Claude Opus 4.7.",
  applicationName: "Edtools Labs",
  keywords: [
    "AI STEAM tutor",
    "AI kinematics tutor",
    "AI physics tutor",
    "interactive physics lab",
    "phone sensors physics",
    "open source education AI",
    "Claude STEAM tutor",
    "voice AI tutor",
    "Excalidraw physics",
    "tutor de IA STEAM",
    "tutor de cinemática con IA",
    "laboratorio de física con celular",
    "IA educativa de código abierto",
  ],
  authors: [{ name: "Edtools Labs", url: SITE_URL }],
  creator: "Edtools Labs",
  publisher: "Edtools Labs",
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Edtools Labs",
    title: "Edtools Labs — AI STEAM tutor for kinematics",
    description:
      "Open-source AI STEAM tutor. Turn any phone into a physics lab with voice, ink and tilt sensors. Bilingual EN/ES.",
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edtools Labs — AI STEAM tutor for kinematics",
    description:
      "Open-source AI STEAM tutor. Voice, ink and tilt sensors in one bilingual flow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      {
        url: "/icon-light-32x32.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#37322F" },
  ],
  colorScheme: "light dark",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Edtools Labs",
      url: SITE_URL,
      applicationCategory: "EducationalApplication",
      applicationSubCategory: "STEAM tutor",
      operatingSystem: "Web",
      description:
        "Open-source AI STEAM tutor that teaches kinematics with voice, an interactive canvas and the phone's tilt sensors.",
      inLanguage: ["en", "es"],
      image: `${SITE_URL}/opengraph-image`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      license: "https://www.gnu.org/licenses/gpl-3.0.html",
      codeRepository: REPO_URL,
      programmingLanguage: ["TypeScript", "React"],
      audience: {
        "@type": "EducationalAudience",
        educationalRole: ["student", "teacher"],
      },
      keywords:
        "AI STEAM tutor, AI kinematics tutor, physics, open source, bilingual, voice, sensors, Claude",
      author: { "@id": `${SITE_URL}#org` },
      publisher: { "@id": `${SITE_URL}#org` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#org`,
      name: "Edtools Labs",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-edtools.svg`,
      sameAs: [REPO_URL],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
