"use client";
import { useState } from "react";

export default function Search() {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <div
      className={`flex h-9 rounded-xl border-2 px-1.5 ${isFocus ? "border-white" : "border-white/50"}`}
    >
      <div className="my-auto">
        <SearchIcon
          fill={isFocus ? "rgb(255,255,255)" : "rgba(255,255,255,0.5)"}
        />
      </div>
      <input
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        type="text"
        placeholder="Nhập từ khóa cần tìm kiếm"
        className={`flex-1 bg-transparent pl-2 outline-none ${isFocus ? "text-white" : "text-white/50"}`}
      />
    </div>
  );
}

function SearchIcon({ fill }: { fill: string }) {
  return (
    <svg
      height={25}
      width={25}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
          fill={fill}
        ></path>
      </g>
    </svg>
  );
}
