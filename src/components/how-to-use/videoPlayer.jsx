"use client";
import React from "react";

const VideoPlayer = ({ src, poster, autoPlay = false, controls = true, loop = false }) => {
  return (
    <div className={`bg-base-200 flex flex-col items-center justify-center `}>
      <div className="rounded-none overflow-hidden shadow-[0_0_15px_5px_rgba(34,197,94,0.7)]">
        <video
          src={src}
          poster={poster}
          className="h-auto rounded-2xl lg:max-w-2xl max-w-xs md:max-w-sm"
          autoPlay={autoPlay}
          controls={controls}
          loop={loop}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
