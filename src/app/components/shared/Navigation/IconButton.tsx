"use client";
import React, { Children } from 'react'
interface IconButtonProps{
  className?:string;
  onClick?:React.MouseEventHandler<HTMLDivElement>
}
const IconButton:React.FC<React.
PropsWithChildren<IconButtonProps>> = ({children,className='',onClick}) => {
  return (
    <div>
      <div className={`cursor-pointer rounded-full p-2 
      hover:bg-neutral-800 ${className}`} onClick={onClick}>{children}</div>
    </div>
  )
}

export default IconButton
