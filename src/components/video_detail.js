import React from 'react';

const VideoDetail = ({ video }) => {
  if (video == null) {
    return <div>Loading...</div>;
  }
  const { videoId } = video.id; // will give linting error - read it and decide for yourself
  // {videoId} = video.id // is example of destructuring
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title="video-detail" />
      </div>
      <div className="details">
        <div className="details-thing1">{video.snippet.title}</div>
        <div className="details-thing2">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
