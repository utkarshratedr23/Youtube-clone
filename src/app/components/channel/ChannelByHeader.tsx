"use client"

import React, { useContext } from 'react'
import {Channel}from "@prisma/client"
import { CurrentUserContext } from '@/app/context/CurrentUserContext';
import { AvatarSize } from '../shared/Avatar';
import Avatar from '../shared/Avatar';
import { compactNumberFormat } from '@/app/utils/numUtils';
import Link from 'next/link';
import Button from '../shared/Button';
import SubscribedButton from '../shared/SubscribedButton';
interface ChannelHeaderProps{
 channel:Channel;
 videoCount:number
}
const ChannelByHeader:React.FC<ChannelHeaderProps> = ({channel,videoCount}) => {
    const currentUser=useContext(CurrentUserContext);
    return (
    <div className='flex flex-col md:flex-row gap-6 md:gap-0 px-24 py-6 
    justify-between items-center'>
      <div className='flex flex-col md:flex-row gap-0 md:gap-6 items-center md:items-start'>
     <Avatar size={AvatarSize.large} imageSrc={channel.imageSrc}/>
     <div className='text-2xl text-center md:text-start'>{channel.name}</div>
     <div className='flex flex-col md:flex-row items-center gap-1 md:gap-3
     text-stone-400'>
        <p className='font-medium'>{`@${channel.handle}`}</p>
        <p>
            {`${compactNumberFormat(channel.subscriberCount)} subscribers`}
        </p>
        <p>
            {`${compactNumberFormat(videoCount)} videos`}
        </p>
     </div>
      </div>
      {
        channel.userId===currentUser?.id?(
            <Link href="/studio">
                <Button type='rounded-dark'>Manage Videos</Button>
            </Link>
        ):(
           <SubscribedButton channelId={channel.id}/>
        )
      }
    </div>
  )
}

export default ChannelByHeader
