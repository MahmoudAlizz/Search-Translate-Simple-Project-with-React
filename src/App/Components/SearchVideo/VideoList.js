import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onChangeSelected, onChangeVideos }) => {
  const RenderVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onChangeVideos={onChangeVideos}
        onChangeSelected={onChangeSelected}
        video={video}

      />
    );
  });
  return RenderVideos;
};
export default VideoList;
