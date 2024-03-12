"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenuOpen } from "react-icons/md";

export default function PrimarySideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={`flex h-screen select-none flex-col gap-2 bg-secondary transition-all ${isOpen ? "w-44" : "w-0"}`}
    >
      <div className="relative">
        <Link href={"/"} tabIndex={-1} className="my-6 flex">
          <Image
            priority
            src="/logo.png"
            alt="Logo"
            width={75}
            height={75}
            className="mx-auto"
          />
        </Link>
        <MdClose
          onClick={() => setIsOpen(false)}
          className="absolute right-1 top-1 z-50 cursor-pointer text-2xl"
        />
        <div
          className={`absolute -right-8 top-0 z-40 rounded-br-xl bg-secondary p-1 transition-all delay-150 ${isOpen ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
        >
          <MdMenuOpen
            onClick={() => setIsOpen(true)}
            className="rotate-180 text-2xl"
          />
        </div>
      </div>

      <ul className="flex flex-col gap-0.5">
        {[
          {
            title: "Khám phá",
            icon: "/explore.svg",
            href: "/explore",
          },
          {
            title: "Lịch sử",
            icon: "/history.svg",
            href: "/history",
          },
          {
            title: "Ưa thích",
            icon: "/favourite.svg",
            href: "/favourite",
          },
        ].map(({ title, icon, href }, i) => {
          return (
            <Link
              href={href}
              tabIndex={-1}
              key={i}
              className="relative before:absolute before:h-full before:w-0 before:cursor-pointer before:rounded-r-full before:transition-all before:duration-200 before:hover:w-full before:hover:bg-white/10"
            >
              <div className="flex gap-3 px-2 py-1.5">
                <Image src={icon} width={25} height={25} alt={title} />
                <span>{title}</span>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
