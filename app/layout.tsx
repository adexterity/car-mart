import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Car Mart",
  description: "Discover Top-notch Vehicles Worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        
        <Footer />
        </body>
    </html>
  );
}
