"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

export function BannerSlider() {
  const banners = [
    "/placeholder.svg?height=307&width=400",
    "/placeholder.svg?height=307&width=400",
    "/placeholder.svg?height=307&width=400",
    "/placeholder.svg?height=307&width=400",
    "/placeholder.svg?height=307&width=400",
  ];

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  return (
    <Carousel ref={emblaRef} className="w-full max-w-5xl mx-auto">
      <CarouselContent className="-ml-2 md:-ml-4">
        {banners.map((banner, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="relative h-[307px] w-full overflow-hidden rounded-lg">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
