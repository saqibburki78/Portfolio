import type { Metadata } from "next";
import "./globals.css";
import { Bowlby_One_SC } from "next/font/google";
import localFont from "next/font/local";
import SplashCursor from "@/components/SplashCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";

const bowlbyOne = Bowlby_One_SC({
  subsets: ["latin"],
  variable: "--font-bowlby-one",
  weight: "400",
});

const rubikWetPaint = localFont({
  src: "./fonts/RubikWetPaint-Regular.ttf",
  variable: "--font-rubik-wet-paint",
  weight: "100",
});

export const metadata: Metadata = {
  title: "Saqib's Portfolio",
  description:
    "This Is my Personal Portfolio Web-App Here you will Find detail Description About my skills And intrests,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlbyOne.variable} ${rubikWetPaint.variable}  antialiased mx-auto overflow-x-hidden  bg-gray-950`}
      >
        <SplashCursor />
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
