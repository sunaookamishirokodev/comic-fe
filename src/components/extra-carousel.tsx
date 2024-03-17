"use client";
import { Comic } from "@/typings/endpoints";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function ExtraCarousel({
  data,
  title,
}: {
  data: Comic[];
  title: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <section className="mt-4 divide-y-8 divide-transparent pl-4">
      <span className="text-2xl font-bold text-white/80">{title}</span>
      <div className="relative w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-[0.9rem] flex max-h-[70vh] max-w-full touch-pan-y [backface-visibility:hidden]">
            {data.map(({ thumbnail, name }, i) => {
              return (
                <div className="group relative ml-[0.9rem] w-36" key={i}>
                  <Image
                    src={thumbnail}
                    alt={name + " thumbnail"}
                    width={0}
                    height={0}
                    className="aspect-[9/14] w-full"
                    sizes="100vw"
                  />
                  <div className="absolute left-0 top-0 flex size-full cursor-pointer bg-gradient-to-b from-black/0 to-black/100 transition-all group-hover:bg-black/40 sm:bg-black/0">
                    <span className="mx-auto mt-auto text-center text-[9px]">
                      {name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
