"use client";

import { BannerSlider } from "@/components/banner-slider";
import { CardCarousel } from "@/components/card-carousel";
import { useSearchTerm } from "@/context/BookShowContext";
import { useApi } from "@/hooks/useApi";
import { BaseContent } from "@/types";
import { useEffect, useState } from "react";

const images = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1730272341674_maroon5webshowcase1240x300.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1727710500223_lollapaloozaindia2025web.jpg",
];

export default function Home() {
  const [content, setContent] = useState<BaseContent[]>([]);
  const { searchTerm, contentType } = useSearchTerm();

  const { data, loading, error } = useApi<{ results: BaseContent[] }>({
    url: searchTerm
      ? `/search/${contentType}?query=${searchTerm}`
      : `/discover/${contentType}`,
  });

  useEffect(() => {
    if (data) {
      setContent(data.results);
    }
  }, [data]);

  return (
    <div>
      <BannerSlider images={images} />
      <div>
        <CardCarousel
          loading={loading}
          error={error}
          content={content}
          searchTerm={searchTerm}
          contentType={contentType}
        />
      </div>
    </div>
  );
}
