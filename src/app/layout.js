import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Shayan Yazdanie | Computer Engineering",
  description: "Portfolio and projects by Shayan Rizwan Yazdanie.",
};

export default function RootLayout({ children }) {
  return (
    // 'scroll-smooth' ensures that when you click a link like #projects, it glides down smoothly
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}