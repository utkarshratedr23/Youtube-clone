import React from 'react'
import Image from 'next/image'
export enum AvatarSize{
    extraSmall=24,
    small=32,
    medium=40,
    large=128
}
interface AvatarProps{
    className?:string
    onClick?:()=>void
    size?:AvatarSize
    imageSrc?:string|null;
}
const Avatar:React.FC<AvatarProps> = ({className,onClick,imageSrc,size=AvatarSize.medium}) => {
  return (
    <div>
      <Image className=
      {`rounded-full aspect-square object-contain ${onClick && "cursor-pointer"} ${className} `}alt="Avatar"
      height={size} width={size} onClick={onClick} src={imageSrc || "/youtube-clone/public/image/avatar.png"}/>
    </div>
  )
}

export default Avatar
