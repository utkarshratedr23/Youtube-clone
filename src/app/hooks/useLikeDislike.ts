import { useCallback, useContext, useMemo } from "react"
import { CurrentUserContext } from "../context/CurrentUserContext"
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "axios";

interface UseLikeDislikeProps{
    videoId:string
}
export enum LikeDislikeStatus{
    liked=1,
    disliked=2,
    None=3
}
export const UseLikeDislike=({videoId}:UseLikeDislikeProps)=>{
const currentUser=useContext(CurrentUserContext);
const router=useRouter();
const likeDislikeStatus=useMemo(()=>{
    if(!currentUser || !videoId) return false ;
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

const toggleLikeDislike=useCallback(async (action:"like" | "dislike")=>{
    if(!currentUser){
     alert("Please sign in to like Dislike")
    }
    else if(!videoId) return;
    try{
     if(action==="like"){
     switch(likeDislikeStatus){
        case LikeDislikeStatus.liked:await axios.delete(`/api/videos/${videoId}/like`);
        break;
        case LikeDislikeStatus.disliked:await axios.delete(`/api/videos/${videoId}/dislike`)
        .then(()=>axios.post(`/api/videos/${videoId}/like`));
        break;
        default:
            await axios.post(`/api/videos/${videoId}/like`);
            break;
     }
     }
     else if(action==="dislike"){
        switch(likeDislikeStatus){
            case LikeDislikeStatus.liked:await axios
            .delete(`/api/videos/${videoId}/like`)
            .then(()=>axios.post(`/api/videos/${videoId}/dislike`));
            break;
            case LikeDislikeStatus.disliked:await axios.delete(`/api/videos/${videoId}/dislike`);
            break;
            default:
                await axios.post(`/api/videos/${videoId}/like`);
                break;
     }
    }
    router.refresh();
    toast.success("success");
}
    catch(error){
        toast.error("There was an error")
    }
},[currentUser,videoId,likeDislikeStatus,router])
return{
    likeDislikeStatus,
    toggleLikeDislike
}
}