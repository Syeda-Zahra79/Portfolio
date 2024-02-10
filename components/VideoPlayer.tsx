"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({src} :any) => {
  //video path
  let videosrc = `/videos/${src}`;

  return (
    <div className="w-full drop-shadow-lg">
      <ReactPlayer
        width="w-full"
        height="h-fit"
        url={videosrc}
        playing={true}
        muted={true}
        loop={true} 
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;