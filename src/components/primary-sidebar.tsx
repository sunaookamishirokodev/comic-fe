"use client";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import {
  MdClose,
  MdOutlineExplore,
  MdHistory,
} from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";

export default function PrimarySideBar({isOpen, setIsOpen}: {isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>>}) {
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
      </div>

      <ul className="flex flex-col gap-0.5">
        {[
          {
            title: "Khám phá",
            icon: MdOutlineExplore,
            href: "/explore",
          },
          {
            title: "Lịch sử",
            icon: MdHistory,
            href: "/history",
          },
          {
            title: "Ưa thích",
            icon: IoStarOutline,
            href: "/favourite",
          },
        ].map(({ title, icon, href }, i) => {
          const Icon = icon;
          return (
            <Link
              href={href}
              tabIndex={-1}
              key={i}
              className="relative before:absolute before:h-full before:w-0 before:cursor-pointer before:rounded-r-full before:transition-all before:duration-200 before:hover:w-full before:hover:bg-white/10"
            >
              <div className="flex gap-3 px-2 py-1.5">
                <Icon className="my-auto text-2xl" />
                <span>{title}</span>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
