import Image from "next/image";
import { BASE_IMG_ENDPOINT } from "../utils/constants";

const MovieTile = ({ movie }) => {
  return (
    <div className="flex flex-col space-y-1 mt-7 items-center w-[80vw]">
      <div className="h-64  w-full relative">
        <Image
          src={`${BASE_IMG_ENDPOINT}${
            movie.poster_path || movie.backdrop_path
          }`}
          alt=""
          objectFit="responsive"
          layout="fill"
          className=" rounded-lg"
          placeholder="blur"
          blurDataURL={`${BASE_IMG_ENDPOINT}${
            movie.poster_path || movie.backdrop_path
          }`}
        />
      </div>
      <p className="truncate w-full  tracking-wider">{movie.overview}</p>
      <h1 className="truncate w-full text-white font-bold">{movie.title}</h1>
    </div>
  );
};

export default MovieTile;
