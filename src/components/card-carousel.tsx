"use client";

import React, { useEffect, useRef, useState } from "react";
import { ContentCard } from "./content-card";
import { BaseContent } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Params {
  loading: boolean;
  error: string | null;
  content: BaseContent[];
  searchTerm: string;
  contentType: string;
}

export function CardCarousel({
  loading,
  error,
  content,
  searchTerm,
  contentType,
}: Params) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const totalItems = content.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalItems - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalItems]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-[75rem] mx-auto py-10 overflow-hidden">
      {loading && <p>Loading...</p>}
      {error && <p>Error loading content: {error}</p>}
      {!loading && !error && content.length > 0 && (
        <>
          {!searchTerm ? (
            <h1 className="text-3xl uppercase mb-3 font-bold text-[#292929]">
              Trending {contentType === "tv" ? "Shows" : "Movies"}
            </h1>
          ) : (
            <h1 className="mb-2">
              Search results for <span className="underline">{searchTerm}</span>
            </h1>
          )}

          <div
            ref={carouselRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {content.map((value) => (
              <div
                key={value.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-2"
              >
                <ContentCard
                  title={value.name ?? value.title}
                  poster_path={value.poster_path}
                  genre_ids={value.genre_ids}
                  id={value.id}
                />
              </div>
            ))}
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <ArrowRight />
          </button>
        </>
      )}
    </div>
  );
}
