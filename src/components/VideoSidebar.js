import React, { useState } from 'react'
import "../css/VideoSidebar.css"
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function VideoSidebar({likes,comments,shares}) {
    const [liked,setLike]=useState(false);
  return (
    <div className='videoSidebar'>
        <div className="sidebuttons">
            {liked ? (
                <FavoriteIcon onClick={(e)=>{setLike(!liked)}} className='heart' fontSize='large'/>
            ):(
                    <FavoriteBorderIcon onClick={(e)=>{setLike(!liked)}} className='heart' fontSize='large'/>
            )}
        
        <p>{liked?likes+1:likes}</p>
        </div>
        <div className="sidebuttons">
        <CommentIcon className='comment' fontSize='large'/>
        <p>{comments}</p>
        </div>
        <div className="sidebuttons">
        <ShareIcon className='share' fontSize='large'/>
        <p>{shares}</p>
        </div>
    </div>
  )
}
