import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Adhikar AI",
  description: "Law at your tips!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-[image:var(--texture-light)] dark:bg-[image:var(--texture-dark)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
