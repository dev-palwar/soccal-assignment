interface BaseContent {
  id: string;
  genre: string;
  poster_path: string;
}

export interface Movie extends BaseContent {
  title: string;
}

export interface Tv extends BaseContent {
  name: string;
}

// export type Content = (Movie | Tv) & { title?: string; name?: string };
