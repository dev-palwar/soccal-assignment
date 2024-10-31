"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SliderProps {
  images: string[];
}

export function BannerSlider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, nextSlide]);

  return (
    <div className="relative overflow-hidden w-full ">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="responsive"
              width={1920}
              height={1080}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
