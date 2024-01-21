"use client"
import { useSubscribe } from '@/app/hooks/useSubscribe'
import React from 'react'
import Button from './Button'
interface SubscribeButtonProps{
    channelId:string
}
const SubscribedButton:React.FC<SubscribeButtonProps> = ({channelId}) => {
    const {hasSubscribed,toggleSubscribed}=useSubscribe({channelId})
  return (
   <Button type={hasSubscribed ? "rounded-dark":"rounded"} onClick={toggleSubscribed}>
      {hasSubscribed?"Subscribed":"Subscribe"}
      </Button>
  )
}

export default SubscribedButton
