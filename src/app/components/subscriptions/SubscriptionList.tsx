"use client"
import { useProtectedRoute } from '@/app/hooks/useProtectedRoute';
import { Channel, Video } from '@prisma/client'
import React from 'react'
import VideoCard from '../channel/VideoCard';
import { channel } from 'diagnostics_channel';
interface SubscriptionsListProps{
    videos:(Video &{channel:Channel})[];
}

const SubscriptionList:React.FC<SubscriptionsListProps> = ({videos}) => {
    useProtectedRoute({checkChannel:false})
  return (
    <div className='mx-12 sm:mx-24 py-8 grid grid-cols-1 sm:grid-cols-2
     md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
    {videos.map(video=><VideoCard key={video.id} video={video} channel={video.channel}
    channelAvatar/>)}
     </div>
  )
}

export default SubscriptionList