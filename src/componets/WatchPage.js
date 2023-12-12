import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { classMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './commentsContainer';
import LiveChat from './LIveChat'; // Corrected the component name to match the filename

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(classMenu());
  }, [dispatch]);

  return (
    <div className='w-full'>
      <div className='w-full flex'>
        <div className='px-5 flex flex-col'>
          <iframe
            width='900'
            height='500'
            src={`https://www.youtube.com/embed/${searchParam.get('v')}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>

        <LiveChat />
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
