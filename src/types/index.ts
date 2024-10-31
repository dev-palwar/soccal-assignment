export interface BaseContent {
  id: string;
  poster_path: string;
  genre_ids: number[];
  title: string;
  name?: string;
}

export enum ContentType {
  MOVIE = "movie",
  SHOW = "tv",
}
