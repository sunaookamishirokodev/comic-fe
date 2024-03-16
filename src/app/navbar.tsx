"use client";
import Search from "./search";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function Navbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav className="absolute right-4 top-2 z-50 flex gap-3">
      <Search />
      <BiCategoryAlt
        onClick={() => setIsOpen(!isOpen)}
        className="my-auto cursor-pointer text-3xl text-white/90 hover:text-white/90 sm:text-white/80"
      />
      <Link href={"/login"}>
        <FaRegCircleUser className="hover:text-white/9 my-auto cursor-pointer text-3xl text-white/90 sm:text-white/80" />
      </Link>
    </nav>
  );
}
