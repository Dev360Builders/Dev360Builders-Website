import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";


const outFit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Dev360 Builders | Innovative Software Solutions",
  description: "Meet the Dev360 Builders team. We are passionate experts in software, blockchain, and AI, dedicated to turning your vision into reality.",
  keywords: [
    "Dev360 Builders",
    "Software Development",
    "Blockchain",
    "AI",
    "Team",
    "Web Development",
    "Innovation",
    "About Us"
  ],
  openGraph: {
    title: "Dev360 Builders | Meet Our Dream Team",
    description: "Discover the passionate experts behind Dev360 Builders. We deliver innovative software, blockchain, and AI solutions.",
    url: "https://dev360builders.tech/about",
    images: [
      {
        url: "https://dev360builders.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dev360 Builders Team"
      }
    ],
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outFit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
