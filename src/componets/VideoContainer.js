import React, { useEffect, useState } from 'react'
import { Youtube_API_KEY } from '../utils/contants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  
  const[videos ,setVideos]=useState([]);

  useEffect(()=>{
    getvideo();
  },[]);



  const getvideo=async()=>{
    const data= await fetch(Youtube_API_KEY);
    const json= await data.json();
    setVideos(json.items);

  }


  return (
    <div className=' flex flex-wrap '>
    {videos.map(video=>
      <Link to={"/watch?v="+video.id}><VideoCards key={video.id} info={video}/></Link>
      
      )}

    </div>
  )
}

export default VideoContainer;