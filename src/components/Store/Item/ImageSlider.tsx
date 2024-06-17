"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface Props {
  images: string[];
}

export function ImageSlider({ images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });

  return (
    <>
      <div className="relative h-[25rem] w-[35rem] lg:h-[35rem] lg:w-[50rem] xs:h-[20rem] xs:w-[30rem]">
        <div className="embla mt-[1rem] h-full max-w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex h-full gap-[1rem] first:pl-[1rem]">
            {images.map((image, idx) => (
              <div key={idx} className="embla__slide relative min-w-0 flex-[0_0_100%]">
                <Image src={image} alt={`image-${idx}`} fill className="rounded-[1rem]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-[2rem]">
        {images.map((image, idx) => (
          <div key={idx} className="relative h-[5rem] w-[7rem]">
            <button onClick={() => emblaApi?.scrollTo(idx)}>
              <Image src={image} alt={`image-${idx}`} fill className="rounded-[.5rem]" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
