"use client"
import { LikeDislikeStatus, UseLikeDislike } from '@/app/hooks/useLikeDislike'
import { compactNumberFormat } from '@/app/utils/numUtils'
import { Video } from '@prisma/client'
import React from 'react'
import { MdThumbUp,MdThumbDown,MdOutlineThumbUp,MdOutlineThumbDown } from 'react-icons/md'
interface LikeDislikeButtonProps{
    video:Video
}
const LikeDislikeButton:React.FC<LikeDislikeButtonProps> = ({video}) => {
    const {likeDislikeStatus,toggleLikeDislike}=UseLikeDislike({videoId:video.id})
  return (
    <div className='flex items-center gap-1 bg-neutral-800 rounded-full px-3 py-3
     text-white font-medium'>
        <button className='pr-3 border-r-2 border-neutral-700 flex items-center
         gap-3' onClick={()=>toggleLikeDislike("like")}>
            {likeDislikeStatus===LikeDislikeStatus.liked?<MdThumbUp className="h-6 w-6"/>
            :<MdOutlineThumbUp className="h-6 w-6"/>}
         </button>
         <p>{compactNumberFormat(video.likeCount)}</p>
         <button className='pr-3 border-r-2 border-neutral-700 flex items-center
         gap-3' onClick={()=>toggleLikeDislike("dislike")}>
            {likeDislikeStatus===LikeDislikeStatus.disliked?<MdThumbDown className="h-6 w-6"/>
            :<MdOutlineThumbDown className="h-6 w-6"/>}
         </button>
     </div>
  )
}

export default LikeDislikeButton