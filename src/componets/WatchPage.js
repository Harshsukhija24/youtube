import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { classMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from "./commentsContainer";
import LIveChat from './LIveChat';

const WatchPage = () => {

    const[searchParam ]=useSearchParams();
      const dispatch=useDispatch();
      
      useEffect(()=>{
        dispatch(classMenu());
      });
  return (
    <div className=' w-full'>
    <div className=" w-full flex ">
    <div className='px-5 flex flex-col '>
    <iframe 
    width="900"
     height="500"
      src={"https://www.youtube.com/embed/"+searchParam.get("v")} 
      title="YouTube video player" 
      frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen
       >
       </iframe>
    </div>
    
    <LIveChat/>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage; 