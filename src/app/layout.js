import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import SystemProbe from "../components/SystemProbe";
import { SystemProvider } from "../context/SystemContext";
// Note: Ensure you create these component files next
import ExecutionLog from "../components/ExecutionLog";
import CommandPalette from "../components/CommandPalette";

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
  title: 'Shayan Rizwan Yazdanie | System Architect',
  description: 'Portfolio of a Computer Engineering Student',
  icons: {
    icon: '/icon.png', // This tells the system to use your custom icon
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
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
        <SystemProvider>
          <SystemProbe />
          <Navbar />
          {children}
          <ExecutionLog />
          <CommandPalette />
        </SystemProvider>
      </body>
    </html>
  );
}