"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 3000 })]);

  return (
    <div className="embla overflow-hidden relative w-full xl:h-[80vh] sm:h-[50vh]" ref={emblaRef}>
      {/* Embla Container */}
      <div className="embla__container flex h-full">
        {/* Slide 1 */}
        <div className="embla__slide flex-[0_0_100%] h-full">
          <Image
            src="/banner6.png"
            alt="banner"
            width={2000}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Slide 2 */}
        <div className="embla__slide flex-[0_0_100%] h-full">
          <Image
            src="/banner8.png"
            alt="banner"
            width={2000}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Slide 3 */}
        <div className="embla__slide flex-[0_0_100%] h-full">
          <Image
            src="/banner.png"
            alt="banner"
            width={2000}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        {/* <div className="embla__slide flex-[0_0_100%] h-full">
          <Image
            src="/banner3.png"
            alt="banner"
            width={2000}
            height={600}
            className="object-cover w-full h-full"
          />
        </div> */}
      </div>
    </div>
  );
}
