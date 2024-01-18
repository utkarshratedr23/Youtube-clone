"use client"
import React, { useEffect, useState } from 'react'
import IconButton from '../../shared/Navigation/IconButton';
import { MdOutlineContentCopy } from 'react-icons/md';
import toast, { Toast } from 'react-hot-toast';
interface VideoPreviewProps{
videoId:string
videoSrc:string;
}
const VideoPreview:React.FC<VideoPreviewProps> = ({videoId,videoSrc}) => {
    const [videoLink,setVideoLink]=useState("");
    useEffect(()=>{
        setVideoLink(`${window.location.host}/video/${videoId}`)
    },[videoId])
    const copyLink=()=>{
        navigator.clipboard.writeText(videoLink).then(()=>{
            toast.success("Link copied to clipboard")
        })
    }
  return (
    <div className='w-full md:w-2/5 flex flex-col overflow-hidden rounded-md'>
      <iframe src={videoSrc}></iframe>
      <div className='bg-stone-900 md:w-2/5 flex items-center justify-center'>
        <div className='text-sm text-zinc-400'>
        Video Link
        </div>
        <a href={videoSrc} className='text-sky-500'>
            {videoLink}
        </a>
        <IconButton onClick={copyLink}>
            <MdOutlineContentCopy className="cursor-pointer"/>
        </IconButton>
      </div>
    </div>
  )
}

export default VideoPreview
