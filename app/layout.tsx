import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RegistrationBanner from "./components/RegistrationBanner";
import LoadingProvider from "./components/LoadingProvider";
import LenisProvider from "./components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loop - 24 Hours National Level Hackathon",
  description: "Loop is a 24-hour National Level Hackathon focused on depth over speed. Build. Break. Refine. Join us on 20th February 2026 at Bharati Vidyapeeth College of Engineering, Navi Mumbai.",
  keywords: ["hackathon", "loop", "coding", "innovation", "technology", "navi mumbai", "bharati vidyapeeth"],
  authors: [{ name: "Innovation & Robotics Lab" }],
  openGraph: {
    title: "Loop - 24 Hours National Level Hackathon",
    description: "Build. Break. Refine. Join us for 24 hours of innovation and coding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <LenisProvider>
          <LoadingProvider minimumLoadingTime={2500}>
            <RegistrationBanner />
            <div className="pt-12">
              {children}
            </div>
          </LoadingProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
