import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll"; // Imported our scroll provider
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naveed Ahmed M | AI & Software Systems Architect",
  description: "Engineering robust full-stack software architectures, asynchronous multi-agent networks, and real-time interactive 3D WebGL environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-black text-white selection:bg-amber-500/20 selection:text-amber-400">
        <SmoothScroll>
          <main className="w-full flex flex-col">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}