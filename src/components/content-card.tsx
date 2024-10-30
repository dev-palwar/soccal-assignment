import useGenres from "@/hooks/generes";
import { BaseContent } from "@/types";
import Image from "next/image";

export const ContentCard = (props: BaseContent) => {
  const genreMapping = useGenres();
  const getGenreNameById = (id: number) => genreMapping["movie"][id];

  return (
    <div className=" overflow-hidden">
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt={`${props.title ?? props.name} poster`}
          height={100}
          width={100}
          className="h-[100%] w-[100%] object-cover rounded-xl"
        />
      </div>
      <div className="p-2">
        <h3 className="font-semibold text-lg truncate">{props.title}</h3>
        <div className="flex gap-2 flex-wrap max-h-[40px] overflow-hidden">
          {props.genre_ids.slice(0, 3).map((value, index) => (
            <p key={index} className="text-sm text-muted-foreground ">
              {getGenreNameById(value)}
              {index < props.genre_ids.slice(0, 3).length - 1 && ", "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
