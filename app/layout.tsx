import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "GoulBAM Enterprises",
  description:
    "GoulBAM Enterprises conçoit des solutions numériques modernes, développe des plateformes, propose du consulting, du design, du marketing digital et des formations via Nexium Institute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-white text-slate-900 antialiased">
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}