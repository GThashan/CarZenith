import type { Metadata } from "next";
import { Inter } from 'next/font/google'; 
import "./globals.css";
import { Footer, Navbar } from "@/Components";


const inter = Inter({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "CARZENITH",
  description: "Find your future dream vehicle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
