"use client";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import { Comic } from "@/typings/endpoints";

const options: EmblaOptionsType = {
  loop: true,
};

export default function MainCarousel({ comics }: { comics: Comic[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      delay: 5000,
      playOnInit: true,
    }),
  ]);

  return (
    <section className="relative h-[70vh] w-full">
      <Navbar />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex max-h-[70vh] w-full touch-pan-y [backface-visibility:hidden]">
          {comics.map(({ thumbnail, genre, description, name }, index) => (
            <div className="relative flex-[0_0_100%]" key={index}>
              <div className="relative flex">
                <Image
                  src={thumbnail}
                  alt={name + " banner"}
                  width={0}
                  height={0}
                  className="mx-auto w-full opacity-40 blur-[0.5px]"
                  sizes="100vw"
                />
                <div className="bg-linear-primary absolute left-0 top-0 h-full w-full" />
              </div>

              <div className="absolute bottom-9 left-8 top-9 flex w-[90%] gap-5">
                <Image
                  src={thumbnail}
                  alt={name + " thumbnail"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mb-auto aspect-[9/13] max-h-full w-full rounded-md"
                />
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-col">
                    <span className="text-5xl font-bold">{name}</span>
                  </div>
                  <ul className="flex gap-2 text-sm">
                    {genre.map((v, _i) => {
                      return (
                        <li
                          className="rounded-full bg-white/30 px-1.5 py-1 first-letter:uppercase hover:bg-white/50"
                          key={_i}
                        >
                          <Link href={`/genre/${v.toString().toLowerCase()}`}>
                            {v.toLowerCase()}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box]">
                    {description}
                  </div>
                  <div className="flex gap-2 pt-3">
                    <button className="flex gap-1.5 rounded-xl bg-white/80 px-5 py-2 text-black hover:bg-white">
                      <Image
                        src={"/read.svg"}
                        alt="Read Icon"
                        width={30}
                        height={30}
                      />
                      <span className="my-auto text-lg font-semibold">
                        Đọc ngay
                      </span>
                    </button>
                    <button className="flex gap-1.5 rounded-xl bg-black/20 px-5 py-2 hover:bg-black/50">
                      <Image
                        src={"/info.svg"}
                        alt="Information Icon"
                        width={30}
                        height={30}
                      />
                      <span className="my-auto text-lg font-semibold">
                        Thông tin
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
