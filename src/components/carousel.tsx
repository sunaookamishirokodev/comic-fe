"use client";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import comics from "../data/comic";
import Link from "next/link";
import lodash from "lodash";
import Navbar from "./navbar";

const options: EmblaOptionsType = {
  loop: true,
};

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      delay: 5000,
      playOnInit: true,
    }),
  ]);

  return (
    <section className="embla relative">
      <Navbar />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {comics.map(
            (
              { banner, thumbnail, category, aliases, description, name },
              index,
            ) => (
              <div className="embla__slide relative" key={index}>
                <div className="relative flex">
                  <Image
                    src={banner}
                    alt={name + " banner"}
                    width={0}
                    height={0}
                    className="mx-auto h-full w-auto opacity-40 blur-[0.5px]"
                    sizes="100vw"
                  />
                  <div className="bg-linear-primary absolute left-0 top-0 h-full w-full" />
                </div>

                <div className="absolute bottom-8 left-8 top-8 flex w-[90%] gap-5">
                  <Image
                    src={thumbnail}
                    alt={name + " thumbnail"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="mb-auto w-[220px] rounded-md"
                  />
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-col">
                      <span className="text-5xl font-bold">{name}</span>
                      <span className="text-md">{aliases}</span>
                    </div>
                    <ul className="flex gap-2 text-sm">
                      {category.map((v, _i) => {
                        return (
                          <li
                            className="rounded-full bg-white/30 px-1.5 py-1 hover:bg-white/50"
                            key={_i}
                          >
                            <Link href={`/category/${v.toLowerCase()}`}>
                              {v}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="line-clamp-5">{description}</div>
                    <div className="mt-2 flex gap-2">
                      <button className="flex gap-1.5 rounded-xl bg-white/80 px-5 py-2 text-black hover:bg-white">
                        <Image
                          src={"/read.svg"}
                          alt="Read Icon"
                          width={30}
                          height={30}
                        />
                        <span className="my-auto text-lg font-semibold">
                          Read now
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
                          More info
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
