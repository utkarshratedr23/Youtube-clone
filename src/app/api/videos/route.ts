import getCurrentChannel from "@/app/actions/getCurrentChannel";
import { NextResponse } from "next/server";
import prisma from "../../../../vendor/db";
export async function POST(request:Request){
    const currentChannel=getCurrentChannel();
    if(!currentChannel){
        return NextResponse.error();
    }
    
        const {id,title,description,videoSrc,thumbnailSrc}=await request.json()
   
    const video=await prisma.video.create({
        data:{
            title,
            description,
            videoSrc,
            id,
            thumbnailSrc,
            channelId:currentChannel?.id,
        },
    })
    return NextResponse.json(video)
}