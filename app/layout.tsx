import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: { default: "LensLabs", template: "%s · LensLabs" },
  description: "AI-powered apps that give you clarity — on your health and your portfolio.",
  metadataBase: new URL("https://lenslabs.app"),
  openGraph: {
    siteName: "LensLabs",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
