import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return;
  }
  const srcVideo = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="">
      <iframe
        className="w-100"
        height="400px"
        src={srcVideo}
        allowFullScreen
      ></iframe>
      <div className="p-3 border">
            <p className="mb-2">
                {video.snippet.title}
            </p>
            <p className="text-muted">{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
