import ReactPlayer from "react-player/lazy";
import screenfull from "screenfull";
import { useRouter } from "next/router";
import { CATEGORIES } from "../utils/constants";

export default function Watch() {
  const router = useRouter();
  const videoId = router.query.v;
  console.log(videoId);


  return (
    <div className=" bg-black  w-full !h-full">
      <ReactPlayer
        className="absolute top-0 left-0 w-full !h-full"
        url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
        onStart={() => {
          screenfull.request();
        }}
        onEnded={() => {
          screenfull.exit();
        }}
      />
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   let genre = context.query.genre;
//   //Get the url matching the genre passed from the list
//   const category = CATEGORIES.find((c) => c.genre === genre);
//   //Get the url from the category
//   const url = category.url;

//   console.log(url);

//   //Get the data from the url
//   const res = await fetch(url);
//   const { results } = await res.json();

//   return {
//     props: {
//       genre: genre,
//       movies: results,
//     },
//   };
// };
