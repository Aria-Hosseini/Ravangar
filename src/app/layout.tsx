import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravangar",
  description: "developed by ARIA",
};

const vazir = localFont({
  src: '../fonts/Vazir-Medium.woff2',
  display: 'swap',
  variable: '--font-vazir',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
      </head>
      <body 
        style={{fontFamily : 'Vazirmatn'}}
        className={`${geistSans.variable} ${geistMono.variable} font-vazir antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
