import React from 'react';

const VideoCards = ({ info }) => {
  console.log(info);

  // Check if info is not undefined
  if (!info) {
    return <div>No video information available</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72'>
      <img className=' rounded-lg' alt='videos' src={thumbnails.medium.url} />
      <ul>
        <li className=' font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        {/* You can't directly display the 'statistics' object */}
        {/* Display individual statistics properties */}
        <li>Views: {statistics.viewCount}</li>
        <li>Likes: {statistics.likeCount}</li>
      </ul>
    </div>
  );
};

export default VideoCards;
