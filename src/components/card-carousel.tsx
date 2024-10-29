"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCard } from "./movie-card";
import { Movie, Tv } from "@/types";

interface Params {
  loading: boolean;
  error: string | null;
  content: Movie[] | Tv[];
}

function isMovie(type: Movie | Tv): type is Movie {
  return (type as Movie).title !== undefined;
}

export function CardCarousel({ loading, error, content }: Params) {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      {loading && <p>Loading...</p>}
      {error && <p>Error loading content: {error}</p>}
      {!loading && !error && content.length > 0 && (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {content.map((value) => (
              <CarouselItem
                key={value.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <MovieCard
                  title={isMovie(value) ? value.title : value.name}
                  genre={value.genre}
                  poster={value.poster_path}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
}
