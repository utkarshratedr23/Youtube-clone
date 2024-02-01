"use client"
import VideoCard from "@/app/components/shared/VideoCard";
import { Channel, Video } from "@prisma/client";
import axios from "axios";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SearchPage(){
    const params=useSearchParams()
    const searchQuery=params.get("searchQuery");
    const [videos,setVideos]=useState<(Video & {channel:Channel})[]>([])
    useEffect(()=>{
        axios.get("/api/videos/",{params:{searchQuery}}).then(data=>{
            setVideos(data.data as unknown as (Video & {channel:Channel})[])
        }).catch(()=>toast.error("Could not fetch Videos"))
    },[searchQuery])
    return <div className="w-4/5 mx-auto flex flex-col gap-4 items-center pb-4">
        {videos.length?videos.map((video)=>{
            return(
                <VideoCard key={video.id}
                isVertical={false}
                video={video}
                channel={video.channel}
                includeDescription
                channelAvatar />
            )
        }):null}
    </div>
}