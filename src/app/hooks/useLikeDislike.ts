import { useContext, useMemo } from "react"
import { CurrentUserContext } from "../context/CurrentUserContext"
import { useRouter } from "next/router";

interface UseLikeDislikeProps{
    videoId:string
}
export enum LikeDislikeStatus{
    liked=1,
    disliked=2,
    None=3
}
const UseLikeDislike=({videoId}:UseLikeDislikeProps)=>{
const currentUser=useContext(CurrentUserContext);
const router=useRouter();
const likeDislikeStatus=useMemo(()=>{
    if(!currentUser || !videoId) return false;
    const likedVideoIds=currentUser.likedVideoIds;
    const dislikedVideoIds=currentUser.dislikedVideoIds;
    if(likedVideoIds.includes(videoId)){
        return LikeDislikeStatus.liked;
    }
    else if(dislikedVideoIds.includes(videoId)){
        return LikeDislikeStatus.disliked;
    }
    else{
        return likeDislikeStatus.None;
    }
},[currentUser,videoId])
}