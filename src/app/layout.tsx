import type { Metadata } from "next";
import { Turret_Road, Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const turretRoad = Turret_Road({
  variable: "--font-turret-road",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '700', '800']
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "ALTF4",
  description: "By Harsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="https://res.cloudinary.com/drynqkitl/image/upload/v1742749040/logo_k02j56.webp" type="image/x-icon" />
      <body
        className={`${turretRoad.variable} ${unbounded.variable} antialiased dark`}
      >
        <Navbar />
        <div className="h-24 w-full" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
