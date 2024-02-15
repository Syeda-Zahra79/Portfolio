"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({src} :any) => {

  return (
    <div className="w-full drop-shadow-lg">
      <ReactPlayer
        width="w-full"
        height="h-fit"
        url={src}
        playing={true}
        muted={true}
        loop={true} 
      />
      <source src={src} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;