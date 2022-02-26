import ReactPlayer from "react-player";

export const Player = ({ url }) => {
  return (
    <div>
      <ReactPlayer
        className=""
        url={url}
        width="100%"
        height="500px"
        controls={true}
        playing={false}     
      />
    </div>
  );
};
