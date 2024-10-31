import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

interface GenreMap {
  [key: number]: string;
}

interface GenreMapping {
  movie: GenreMap;
  tv: GenreMap;
}

export default function useGenres(): GenreMapping {
  const [genreMapping, setGenreMapping] = useState<GenreMapping>({
    movie: {},
    tv: {},
  });

  const { data: movieGenres } = useApi<{
    genres: { id: number; name: string }[];
  }>({
    url: "/genre/movie/list",
  });

  const { data: tvGenres } = useApi<{ genres: { id: number; name: string }[] }>(
    {
      url: "/genre/tv/list",
    }
  );

  useEffect(() => {
    if (movieGenres) {
      const movieGenreMap = movieGenres.genres.reduce<GenreMap>(
        (acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        },
        {}
      );
      setGenreMapping((prev) => ({ ...prev, movie: movieGenreMap }));
    }
  }, [movieGenres]);

  useEffect(() => {
    if (tvGenres) {
      const tvGenreMap = tvGenres.genres.reduce<GenreMap>((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      setGenreMapping((prev) => ({ ...prev, tv: tvGenreMap }));
    }
  }, [tvGenres]);

  return genreMapping;
}
