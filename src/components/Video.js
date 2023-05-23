import React, { useRef, useState } from 'react'
import "../css/Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


export default function Video(props) {
  const [isPlaying,setPlaying]=useState(false);
  const videoPress=useRef(null);
  const handlePlay=()=>{
      if(isPlaying){
        videoPress.current.pause();
        setPlaying(false);
      }
      else{
        videoPress.current.play();
        setPlaying(true);
      }
  }
  return (
    <div className='video'>
        <video
        autoPlay
        onClick={handlePlay}
        loop
        ref={videoPress} 
        className="video-files" src={props.video}></video>
        <VideoFooter Name={props.Name} Description={props.Description} songName={props.songName}/>
        <VideoSidebar likes={props.likes} comments={props.comments} shares={props.shares}/>
        {/* video sidebars */}
    </div>
  )
}
