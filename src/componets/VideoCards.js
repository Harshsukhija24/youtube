import React from 'react';

const VideoCards = ({ info }) => {
  // Check if info is not undefined
  if (!info) {
    return <div className="p-2 m-2 w-72 bg-gray-200 rounded-lg">No video information available</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72 bg-white rounded-lg shadow-md'>
      <img className='rounded-lg' alt='videos' src={thumbnails.medium.url} />
      <div className='mt-2'>
        <p className='font-semibold text-gray-800'>{title}</p>
        <p className='text-gray-600'>{channelTitle}</p>
        {/* You can't directly display the 'statistics' object */}
        {/* Display individual statistics properties */}
        <p className='text-gray-600'>Views: {statistics.viewCount}</p>
        <p className='text-gray-600'>Likes: {statistics.likeCount}</p>
      </div>
    </div>
  );
};

export default VideoCards;
