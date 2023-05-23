import React from 'react'
import "../css/VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
export default function VideoFooter(props) {
  return (
    < div className='VideoFooter'>
      <div className="videoDesc">
        <h3>{props.Name}</h3>
        <p>{props.Description}</p>
        <div className="videofootTicker">
        <MusicNoteIcon fontSize='small'/>
        <p>{props.songName}</p>
        </div>
        <div className="donut"><DonutLargeIcon className='spinner' fontSize='large' /></div>
        </div>
    </div>
  )
}
