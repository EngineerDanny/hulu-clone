import ReactPlayer from "react-player/lazy";
import screenfull from "screenfull";

export default function Watch() {
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
        wrapper={<div className="relative bg-black  w-full h-full" />}
      />
    </div>
  );
}
