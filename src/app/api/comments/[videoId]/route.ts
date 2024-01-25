import { NextResponse } from "next/server";
import prisma from "../../../../../vendor/db";

interface Params{
    videoId?:string
}
export async function POST(request:Request,{params}:{params:Params}){
    const {videoId}=params;
    const {text,channelId}=await request.json();
    if(!videoId || ! channelId || !text){
        return NextResponse.error();
    }
    const comment=await prisma.comment.create({
        data:{
            videoId,
            channelId,
            text
        }
    })
    return NextResponse.json({comment});
}