import { useContext, useEffect } from "react"
import { CurrentUserContext } from "../context/CurrentUserContext"
import { CurrentChannelContext } from "../context/CreateChannelContext"
import { useRouter } from "next/navigation"
interface useProtectedRouteProps{
    checkChannel?:boolean
}
export const useProtectedRoute=({
    checkChannel=true
}:useProtectedRouteProps={})=>{
    const currentUser=useContext(CurrentUserContext)
    const currentChannel=useContext(CurrentChannelContext)
    const router=useRouter();
    useEffect(()=>{
        if(!currentUser || (checkChannel && !currentChannel))
            router.push('/');
    },[checkChannel,currentChannel,currentUser,router]
    )
}