"use client"
import { CurrentChannelContext } from '@/app/context/CreateChannelContext'
import { useComment } from '@/app/hooks/useComment'
import Avatar from '../../shared/Avatar'
import React, { useContext } from 'react'
import Button from '../../shared/Button'
interface CommentInputProps{
    videoId:string
}
const CommentInput:React.FC<CommentInputProps> = ({videoId}) => {
    const currentChannel=useContext(CurrentChannelContext);
    const {text,setText,submitComment}=useComment({videoId});
  return (
    <div className='flex gap-2 items-start'>
        <Avatar imageSrc={currentChannel?.imageSrc || null}/>
        <div className='flex flex-col w-full'>
            <input
            type="text"
            value={text}
            onChange={(e)=>(setText(e.target.value))}
            placeholder='Add a comment..'
            className='bg-transparent outline-none border-b border-b-neutral-400
            focus:border-b-2
            focus:border-b-neutral-200 pb-1'
            />
            {text?(
                <div className='flex justify-end gap-4 mt-2'>
                    <Button type='secondary' onClick={()=>setText("")}>
                        Cancel
                    </Button>
                    <Button type='primary' onClick={submitComment}>
                        Comment
                    </Button>
                </div>
            ):null}
        </div>
    </div>
  )
}

export default CommentInput