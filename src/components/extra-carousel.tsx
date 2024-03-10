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
      <span className="pl-2 text-2xl font-bold text-white/80">{title}</span>
      <div className="relative h-[70vh] w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-[0.9rem] flex max-h-[70vh] max-w-full touch-pan-y [backface-visibility:hidden]">
            {data.map(
              ({ thumbnail, description, name }, i) => {
                return (
                  <div className="flex-[0_0_15%] pl-[0.9rem]" key={i}>
                    <Image
                      src={thumbnail}
                      alt={name + " thumbnail"}
                      width={0}
                      height={0}
                      className="aspect-[9/14] w-full"
                      sizes="100vw"
                    />
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
