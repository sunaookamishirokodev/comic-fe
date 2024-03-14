"use client";
import PrimarySideBar from "@/components/primary-sidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Be_Vietnam_Pro } from "next/font/google";
import { useState } from "react";
const font = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <body className={`${font.className} relative flex text-white`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <PrimarySideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="relative max-h-screen flex-1 overflow-x-hidden ">
        <main className="absolute right-0 top-0 w-full bg-primary">
          {children}
          <Footer />
        </main>
      </div>
    </body>
  );
}
