import type { Metadata, Viewport } from "next";
import { Inter, Dancing_Script, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ExtensionErrorSuppressor from "@/components/ui/ExtensionErrorSuppressor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aadya Agrawal | Software Engineer & Developer",
  description:
    "Explore Aadya Agrawal's software projects, competitive programming achievements, open-source contributions, and interests in web and backend engineering.",
  keywords: [
    "Aadya Agrawal",
    "IIIT Lucknow",
    "Software Engineer",
    "Full-Stack Developer",
    "Competitive Programming",
    "Web3",
    "React",
    "Next.js",
    "Solidity",
  ],
  authors: [{ name: "Aadya Agrawal" }],
  openGraph: {
    title: "Aadya Agrawal | Software Engineer & Developer",
    description:
      "Explore Aadya Agrawal's software projects, competitive programming achievements, open-source contributions, and interests in web and backend engineering.",
    url: "https://aadyaagrawal.dev",
    siteName: "Aadya Agrawal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadya Agrawal | Software Engineer & Developer",
    description:
      "Explore Aadya Agrawal's software projects, competitive programming achievements, open-source contributions, and interests in web and backend engineering.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111116",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancingScript.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#111116] text-[#F7F4F0] font-sans antialiased selection:bg-[#E52332]/30 selection:text-[#F7F4F0] overflow-x-hidden">
        <ExtensionErrorSuppressor />
        <CustomCursor />
        <Navbar />
        <main className="w-full flex flex-col">{children}</main>
      </body>
    </html>
  );
}
