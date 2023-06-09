import React, { useEffect, useState } from 'react'
import { MY_API_KEY, YOUTUBE_DATA_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useTheme } from '../utils/helper'

const VideoContainer = () => {
const [videos, setVideos] = useState([]);
const { darkMode, toggleDarkMode } = useTheme();

//let i=0
  useEffect(()=>{
    getVideos()
  },[])

  const getVideos=async ()=>{
    const data = await fetch(YOUTUBE_DATA_API+MY_API_KEY);
    const json = await data.json();
    setVideos(json.items)
    //console.log(videos, i++)
  }

  //if(!videos?.length) return <h1>No response from API</h1>;

  return (
    <div className={`flex flex-wrap ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
    {videos && videos.length !==0 && videos.map((video)=><Link to={"/watch?v="+video.id} key={video.id}><div><VideoCard info={video}/></div></Link>)}
    </div>
    
  )
}

export default VideoContainer