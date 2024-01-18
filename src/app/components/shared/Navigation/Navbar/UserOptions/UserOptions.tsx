"use client"
import React, { useContext, useState } from 'react'
import SignIn from './SignIn'
import { CurrentUserContext } from '@/app/context/CurrentUserContext'
import IconButton from '../../IconButton'
import { MdOutlineVideoCall } from 'react-icons/md'
import Avatar, { AvatarSize } from '../../../Avatar'
import UserMenu from './UserMenu'
import { CurrentChannelContext } from '@/app/context/CreateChannelContext'
import { CreateChannelModalContext } from '@/app/context/CreateChannelModalContext'
import { useRouter } from 'next/navigation'

const UserOptions = () => {
 const currentUser=useContext(CurrentUserContext);
 const currentChannel=useContext(CurrentChannelContext)
 const createChannelModal=useContext(CreateChannelModalContext);
 const [menuOpen,setMenuOpen]=useState(false);
 const router=useRouter()
 const handleUploadClick=()=>{
    if(!currentChannel){
   createChannelModal?.onOpen()
    }
    else{
   router.push(`/studio/upload`);
    }
 }
  return currentUser?(
    <>
    <div className='flex items-center gap-4 mr-4'>
    <IconButton onClick={handleUploadClick}>
     <MdOutlineVideoCall className='h-7 w-7'/>
    </IconButton>
    <Avatar size={AvatarSize.small} imageSrc={currentUser.image} onClick={()=>setMenuOpen(true)}/>
    </div>
    {menuOpen? <UserMenu onClose={()=>setMenuOpen(false)}/>: null}
    </>
  ):(
    
    <SignIn/>
    
  )
}

export default UserOptions
