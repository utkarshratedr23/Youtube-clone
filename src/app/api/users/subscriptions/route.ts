import getCurrentUser from "@/app/actions/getCurrentUser";

import { NextResponse } from "next/server";
import prisma from "../../../../../vendor/db";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return NextResponse.error();
    }
  
    const { channelId } = await request.json();
  
    await prisma.channel.update({
      where: {
        id: channelId,
      },
      data: {
        subscriberCount: { increment: 1 },
      },
    });
  
    const subscribedChannelIds = currentUser.subscribedChannelIds;
  
    subscribedChannelIds.push(channelId);
  
    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        subscribedChannelIds,
      },
    });
  
    return NextResponse.json(updatedUser);
  }
  
  export async function DELETE(request: Request) {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return NextResponse.error();
    }
  
    const { channelId } = await request.json();
  
    await prisma.channel.update({
      where: {
        id: channelId,
      },
      data: {
        subscriberCount: { decrement: 1 },
      },
    });
  
    const subscribedChannelIds = currentUser.subscribedChannelIds.filter(
      (subscribedChannelId) => subscribedChannelId !== channelId
    );
  
    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        subscribedChannelIds,
      },
    });
  
    return NextResponse.json(updatedUser);
  }