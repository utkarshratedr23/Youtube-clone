"use client"

import { Channel, Comment } from '@prisma/client'
import React from 'react'
import Avatar from '../../shared/Avatar';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime);

interface CommentProps{
    comment:Comment & {channel:Channel};
}
const Comment:React.FC<CommentProps> = ({comment}) => {
  return (
    <div key={comment.id} className='flex items-start'>
        <Avatar imageSrc={comment.channel.imageSrc}/>
        <div className='flex flex-col gap-1'>
            <div className='flex gap-2 items-center text-sm'>
            <p className='font-medium'>@{comment.channel.handle}</p>
            <p className='font-light text-nutral-400'>
            {dayjs(comment.createdAt)?.fromNow()}
            </p>
            </div>
            <p>{comment.text}</p>
        </div>
        </div>
  )
}

export default Comment