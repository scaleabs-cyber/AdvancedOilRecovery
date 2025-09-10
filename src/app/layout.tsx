import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advanced Oil Recovery | Used Oil Collection & Environmental Services in NY, NJ, PA",
  description: "Trusted for over 35 years, Advanced Oil Recovery provides reliable used oil collection, tank services, and 24/7 spill response across New York, New Jersey, and Pennsylvania.",
  keywords: "used oil collection, oil recovery, tank services, spill response, environmental services, New York, New Jersey, Pennsylvania",
  authors: [{ name: "Advanced Oil Recovery" }],
  openGraph: {
    title: "Advanced Oil Recovery | Used Oil Collection & Environmental Services",
    description: "Trusted for over 35 years, Advanced Oil Recovery provides reliable used oil collection, tank services, and 24/7 spill response across NY, NJ, and PA.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Advanced Oil Recovery",
              "description": "Used oil collection, tank services, and 24/7 spill response across New York, New Jersey, and Pennsylvania",
              "url": "https://advancedoilrecovery.com",
              "telephone": "+1-800-OIL-RECOVERY",
              "email": "info@advancedoilrecovery.com",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": ["NY", "NJ", "PA"],
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "New York"
                },
                {
                  "@type": "State", 
                  "name": "New Jersey"
                },
                {
                  "@type": "State",
                  "name": "Pennsylvania"
                }
              ],
              "serviceType": [
                "Used Oil Collection",
                "Tank Services",
                "Spill Response",
                "Environmental Services"
              ],
              "foundingDate": "1989",
              "numberOfEmployees": "50-100"
            })
          }}
        />
      </head>
      <body
        className={`${oswald.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
