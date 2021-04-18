import React from 'react';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.onVideoSelect(props.video)}>
      <img src={imgUrl} alt="video" className="other-video" />
      <div>{props.video.snippet.title}</div>
    </li>
  );
};

export default VideoListItem;
