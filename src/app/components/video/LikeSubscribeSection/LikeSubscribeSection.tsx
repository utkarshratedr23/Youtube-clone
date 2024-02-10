"use client"
import React, { useContext } from 'react'
import { Channel, Video } from '@prisma/client';
import { CurrentUserContext } from '@/app/context/CurrentUserContext';
import Link from 'next/link';
import Avatar, { AvatarSize } from '../../shared/Avatar';
import { compactNumberFormat } from '@/app/utils/numUtils';
import Button from '../../shared/Button';
import SubscribedButton from '../../shared/SubscribedButton';
import LikeDislikeButton from './LikeDislikeButton';
interface LikeSubscribeSectionProps{
    channel:Channel;
    video:Video;
}
const LikeSubscribeSection:React.FC<LikeSubscribeSectionProps> = ({video,channel}) => {
    const currentUser=useContext(CurrentUserContext);
  return (
    <div className='flex justify-between items-center'>
    <div className='flex gap-3 items-center'>
        <Link href={`/channel/${channel.id}`}>
            <Avatar size={AvatarSize.medium} imageSrc={channel.imageSrc}/>
        </Link>
        <div className='flex flex-col justify-between mr-2'>
            <Link href={`/channel/${channel.id}`}>
                <h2 className='text-lg'>{channel.name}</h2>
            </Link>
            <p className='text-sm text-neutral-400'>
                {compactNumberFormat(channel.subscriberCount)} subscribers
            </p>
        </div>
        {channel.userId===currentUser?.id?(
            <Link href="/studio">
                <Button type='rounded-dark'>Manage Videos</Button>
            </Link>
        ):(<SubscribedButton channelId={channel.id}/>)}
    </div>
    <LikeDislikeButton video={video} />
    </div>
  )
}

export default LikeSubscribeSection