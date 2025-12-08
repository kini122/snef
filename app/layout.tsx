import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import "./globals-overrides.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WhatsAppButton from "@/components/whatsapp-button"
import SafeFetchProvider from "@/components/safe-fetch-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CAPTAINS BRIDGE - Maritime Training Institute in Kochi | Merchant Navy Courses",
  description:
    "Premier maritime training institute in Kochi offering merchant navy certification courses, BOSIET, HUET, H2S, and placement assistance. DG Shipping approved training center.",
  keywords: "maritime training, merchant navy courses, BOSIET, H2S training, maritime academy Kochi, shipping courses, seafarer training",
  metadataBase: new URL("https://captainsbridge.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://captainsbridge.com",
    title: "CAPTAINS BRIDGE - Maritime Training Institute in Kochi",
    description: "Premier maritime training institute offering DG Shipping approved courses and merchant navy certification.",
    siteName: "CAPTAINS BRIDGE",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAPTAINS BRIDGE - Maritime Training Institute",
    description: "Professional maritime training and certification courses in Kochi, Kerala.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CAPTAINS BRIDGE",
    alternateName: "Captains Bridge Maritime Training Institute",
    url: "https://captainsbridge.com",
    logo: "https://captainsbridge.com/logo.svg",
    description: "Premier maritime training institute offering merchant navy courses, DG Shipping approved certifications, and professional seafarer training.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aditya Complex, Kochupally road, Next to Anjali Marriage hall, Thoppumpady",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682005",
      addressCountry: "IN",
    },
    telephone: ["+91-6238730195", "+91-9400937300", "+91-9495145500", "+91-0484-4851500"],
    email: "snefindiaglobal@gmail.com",
    foundingYear: 2000,
    sameAs: ["https://www.facebook.com/captainsbridge", "https://twitter.com/captainsbridge", "https://linkedin.com/company/captains-bridge"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <SiteHeader />
        <SafeFetchProvider />
        <main className="min-h-[60vh] pt-24">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  )
}
