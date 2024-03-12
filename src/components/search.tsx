"use client";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <div className="flex rounded-lg bg-secondary/60 px-1.5 py-1">
      <div className="pointer-events-none my-auto">
        <IoSearchOutline
          className={`text-xl ${isFocus ? "text-white" : "text-white/50"}`}
        />
      </div>
      <input
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        type="text"
        placeholder="Nhập từ khóa"
        className={`my-auto w-[250px] bg-transparent pl-2 outline-none ${isFocus ? "text-white" : "text-white/50"}`}
      />{" "}
    </div>
  );
}
