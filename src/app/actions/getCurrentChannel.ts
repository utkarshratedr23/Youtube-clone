import prisma from "../../../vendor/db";
import getCurrentUser from "./getCurrentUser";
import { Channel } from "@prisma/client";
export default async function getCurrentChannel():
Promise<Channel | null>{
    try{
        const user=await getCurrentUser();
        const query:any={}
        if(user?.id){
        query.userId=user?.id
        }
        else{
            return null;
        }
        const currentChannel=await prisma.channel.
        findFirst({
            where:query
        })
        return currentChannel
    }
    catch(error:any){
        throw new Error(error);
    }
}
