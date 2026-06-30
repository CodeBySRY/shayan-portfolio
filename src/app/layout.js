import "./globals.css";
import Navbar from "../components/Navbar"; // (or ./components/Navbar depending on your path)

export const metadata = {
  title: "Shayan Yazdanie | Computer Engineering",
  description: "Portfolio and projects by Shayan Rizwan Yazdanie.",
};

// This specifically forces mobile browsers to render at their actual device width
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* overflow-x-hidden acts as a strict boundary. 
        If an animation or grid pushes past the screen edge, it clips it rather than breaking the layout! 
      */}
      <body className="antialiased overflow-x-hidden w-full max-w-[100vw]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}