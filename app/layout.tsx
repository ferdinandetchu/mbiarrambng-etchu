import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Logo from "./components/Logo/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mbiarrambng Etchu Ferdinand | Front-End Developer",
  description: "Experienced front-end developer transforming designs into engaging web experiences. Proven ability to deliver high-quality code and collaborate effectively.",
  openGraph: {
    images: '/img/Ferdinand-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Logo />
        {children}
        <Script src="https://js-na1.hs-scripts.com/49371839.js" />
      </body>
    </html>
  );
}
