"use client";
import { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<null | HTMLInputElement>(null);

  return (
    <div
      className="flex cursor-pointer rounded-lg bg-secondary/60 px-1.5 py-1"
      onClick={() => {
        if (isFocus) return;
        setIsFocus(true);
        if (inputRef.current) inputRef.current.focus();
      }}
    >
      <div className="pointer-events-none my-auto">
        <IoSearchOutline
          className={`text-xl ${isFocus ? "text-white" : "text-white/50"}`}
        />
      </div>
      <input
        ref={inputRef}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        type="text"
        placeholder="Nhập từ khóa"
        className={`my-auto bg-transparent outline-none transition-all duration-200 ${isFocus ? "w-[250px] pl-2  text-white" : "w-0 pl-0 text-white/50"}`}
      />{" "}
    </div>
  );
}
