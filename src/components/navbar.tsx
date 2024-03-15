"use client";
import Search from "./search";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLogInOutline, IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";
import { Dispatch, SetStateAction } from "react";

const getArrayDropdown = (isLogin: boolean) => {
  type _ = {
    name: string;
    href: string;
    icon: IconType;
  };

  const noLogin: _[] = [
    {
      name: "Login",
      href: "/login",
      icon: IoLogInOutline,
    },
  ];

  const login: _[] = [
    {
      name: "Người dùng",
      href: "/user",
      icon: FaUserCircle,
    },
    {
      name: "Cài đặt",
      href: "/setting",
      icon: IoSettingsOutline,
    },
  ];

  return isLogin ? login : noLogin;
};

let isLogin = true;

export default function Navbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [isLocalOpen, setIsLocalOpen] = useState<boolean>(false);

  return (
    <nav className="absolute right-4 top-2 z-50 flex gap-3">
      <Search />
      <BiCategoryAlt
        onClick={() => setIsOpen(!isOpen)}
        className="my-auto cursor-pointer text-3xl text-white/90 hover:text-white/90 sm:text-white/80"
      />
      <FaRegCircleUser
        onClick={() => setIsLocalOpen(!isLocalOpen)}
        className="hover:text-white/9 my-auto cursor-pointer text-3xl text-white/90 sm:text-white/80"
      />

      <div className="absolute right-0 top-10 w-max overflow-hidden">
        <div
          className={`divide-y-8 divide-transparent rounded-md bg-primary p-4 transition-all duration-300 ${isLocalOpen ? "opacity-1 translate-x-0" : "translate-x-full opacity-0"}`}
        >
          <span className="text-sm text-white/50">
            {isLogin ? "Trung tâm tài khoản" : "Đăng nhập để tiếp tục"}
          </span>
          <ul className="flex flex-col gap-2">
            {getArrayDropdown(isLogin).map(({ name, href, icon }, i) => {
              const Icon = icon;
              return (
                <li key={i}>
                  <Link href={href} className="flex gap-1.5">
                    <Icon className="text-2xl" />
                    <span className="my-auto text-white/80 hover:text-white/90">
                      {name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
