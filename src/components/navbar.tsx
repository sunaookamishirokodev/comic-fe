"use client";
import Image from "next/image";
import Search from "./search";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const getArrayDropdown = (isLogin: boolean) => {
  type _ = {
    name: string;
    href: string;
    icon: string;
  };

  const noLogin: _[] = [
    {
      name: "Register",
      href: "/auth?type=register",
      icon: "/register.svg",
    },
    {
      name: "Login",
      href: "/auth?type=login",
      icon: "/login.svg",
    },
  ];

  const login: _[] = [
    {
      name: "Người dùng",
      href: "/user",
      icon: "/user.svg",
    },
    {
      name: "Cài đặt",
      href: "/setting",
      icon: "/setting.svg",
    },
  ];

  return isLogin ? login : noLogin;
};

let isLogin = true;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="relative select-none">
      <div className="absolute right-2 top-2 z-50 flex gap-3">
        <Search />
        <FaRegCircleUser
          onClick={() => setIsOpen(!isOpen)}
          className="my-auto cursor-pointer text-3xl text-white/80 hover:text-white/90"
        />

        <div className="absolute right-0 top-10 overflow-hidden">
          <div
            className={`divide-y-8 divide-transparent rounded-md bg-primary p-4 transition-all duration-300 ${isOpen ? "opacity-1 translate-x-0" : "translate-x-full opacity-0"}`}
          >
            <span className="text-sm text-white/50">
              {isLogin
                ? "Tùy chỉnh trải nghiệm của bạn"
                : "Đăng nhập để tiếp tục"}
            </span>
            <ul className="divide-y-8 divide-transparent">
              {getArrayDropdown(isLogin).map(({ name, href, icon }, i) => {
                return (
                  <li key={i}>
                    <Link href={href} className="flex gap-1">
                      <Image
                        src={icon}
                        width={28.5}
                        height={28.5}
                        alt={name + " Icon"}
                      />
                      <span className="my-auto">{name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
