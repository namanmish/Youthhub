import React from 'react'

const VideoCard = ({info}) => {
    const { snippet, statistics} = info
    const {channelTitle, title, thumbnails} = snippet


  return (
    <div className='p-2 m-2 w-80 h-70 shadow-lg'>
        <img className="rounded-lg" alt='thumbnail' src={thumbnails.high.url}/>
        <ul>
            <li className='font-bold break-words'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>

        </ul>
    </div>
  )
}

export default VideoCard