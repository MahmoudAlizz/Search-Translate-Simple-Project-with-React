import React from "react";

const VideoItem = ({ video, onChangeSelected , onChangeVideos }) => {
  return (
    <div style={{cursor:"pointer"}}
      onClick={() => {
        onChangeSelected(video);
      }}
      className="d-flex my-2"
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        className="img-fluid w-25 "
        alt=""
      />
     <div className="p-3">
        <p className="font-weight-bold">{video.snippet.title}</p>
        <p className="my-2 ">{video.snippet.channelTitle}</p>
        <small>{video.snippet.publishTime}</small>
     </div>
    </div>
  );
};

export default VideoItem;
