"use client";
import { FormEvent, useRef, useState } from "react";

export default function Contact() {
  const [isEmailFocus, setIsEmailFocus] = useState<boolean>(false);
  const [isContentFocus, setIsContentFocus] = useState<boolean>(false);

  const emailRef = useRef<null | HTMLInputElement>(null);
  const contentRef = useRef<null | HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
  };

  return (
    <form>
      {[
        {
          name: "email",
          label: "Email",
          type: "email",
          setFuncs: setIsEmailFocus,
          is: isEmailFocus,
          ref: emailRef,
        },
        {
          name: "content",
          label: "Nội dung",
          type: "text",
          setFuncs: setIsContentFocus,
          is: isContentFocus,
          ref: contentRef,
        },
      ].map(({ name, label, type, setFuncs, is, ref }, i) => {
        return (
          <label
            key={i}
            htmlFor={name}
            className="relative mt-4 block cursor-text"
          >
            <input
              id={name}
              name={name}
              onFocus={() => setFuncs(true)}
              onBlur={() => setFuncs(false)}
              className="h-8 w-full rounded-lg border-2 bg-primary px-1.5 outline-none"
              type={type}
              ref={ref}
              autoComplete="off"
            />
            <span
              className={`absolute mx-0.5 bg-primary transition-all ${!is && ref.current?.value === "" ? "left-2.5 top-[3px] text-white/80" : "-top-2.5 left-1.5 text-sm"}`}
            >
              {label}
            </span>
          </label>
        );
      })}
      <div className="float-right mt-2 flex gap-2">
        <button type="reset">Reset</button>
        <button type="submit" onSubmit={handleSubmit}>Gửi</button>
      </div>
    </form>
  );
}
