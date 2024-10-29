"use client";

import { CardCarousel } from "@/components/card-carousel";
import { useSearchTerm } from "@/context/BookShowContext";
import { useApi } from "@/hooks/useApi";
import { Movie, Tv } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState<Movie[] | Tv[]>([]);
  const { searchTerm, searchType } = useSearchTerm();

  const { data, loading, error } = useApi<{ results: Movie[] | Tv[] }>({
    url: searchTerm
      ? `/search/${searchType}?query=${searchTerm}`
      : `/discover/${searchType}`,
  });

  useEffect(() => {
    if (data) {
      setContent(data.results);
      console.log(data.results);
    }
  }, [data]);

  return (
    <div>
      <CardCarousel loading={loading} error={error} content={content} />
      {/* <BannerSlider /> */}
    </div>
  );
}
