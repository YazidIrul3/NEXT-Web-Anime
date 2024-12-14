"use client";

import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  return <ReactPlayer width={"100%"} height={"500px"} url={url} controls />;
};

export default VideoPlayer;
