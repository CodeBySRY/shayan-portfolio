import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import SystemProbe from "../components/SystemProbe";

/* ─── Typography: Load engineering-grade typefaces ─── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Shayan Yazdanie | System Architect",
  description: "Portfolio and technical modules by Shayan Rizwan Yazdanie.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans overflow-x-hidden w-full max-w-[100vw] bg-paper">
        <SystemProbe />
        <Navbar />
        {children}
      </body>
    </html>
  );
}