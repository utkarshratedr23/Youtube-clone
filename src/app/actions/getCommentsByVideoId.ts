import { Comment } from "@prisma/client";
import prisma from "../../../vendor/db";

interface GetCommentByVideoIdParams{
    videoId?:String
}
export default async function getCommentByVideoId(params:GetCommentByVideoIdParams)
:Promise<(Comment & {channel:channel})[] | null>{
    try{
     const {videoId}=params;
     const query:any={}
     if(videoId){
        query.videoId=videoId;
     }
     const comments=await prisma.comment.findMany({
     where:query,
     include:{
        channel:true
     },
     orderBy:[
     {
        createdAt:"desc"// descending order
     }
    ],
     })
     return comments;
    }
    catch(error:any){
    throw new Error(error);
    }
}