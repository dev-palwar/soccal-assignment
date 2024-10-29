import Image from "next/image";

export const MovieCard = ({
  title,
  genre,
  poster,
}: {
  title: string;
  genre: string;
  poster: string;
}) => (
  <div className=" overflow-hidden">
    <div className="relative aspect-[2/3] w-full">
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={`${title} poster`}
        height={100}
        width={100}
        className="h-[100%] w-[100%] object-cover"
      />
    </div>
    <div className="p-2">
      <h3 className="font-semibold text-lg truncate">{title}</h3>
      <p className="text-sm text-muted-foreground">{genre}</p>
    </div>
  </div>
);
