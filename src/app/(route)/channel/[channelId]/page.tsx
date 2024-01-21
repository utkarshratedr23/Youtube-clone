
import GetChannelById from "@/app/actions/getChannelById";
import GetVideosByChannelById from "@/app/actions/getVideoByChannelId";
import ChannelByHeader from "@/app/components/channel/ChannelByHeader";
import VideoCard from "@/app/components/channel/VideoCard";

interface ChannelPageProps{
    channelId?:string
}
export default async function ChannelPage({params}:{
    params:ChannelPageProps
}){
    const {channelId}=params;
    const channel=await GetChannelById({channelId})
    const videos=await GetVideosByChannelById({channelId})
    return channel? (<div className="flex flex-col">
        <ChannelByHeader channel={channel} videoCount={videos.length}/>
        <div className="border-b-2 border-b-neutral-800 capitalize">
            <div className="text-center px-6 py-2 border-b-2 border-b-neutral-400 w-24mx-auto
            md:mx-32">
                Videos
            </div>
        </div>
        <div className="mx-auto sm:mx-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
         lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {videos.map((video)=>(
                
                    <VideoCard key={video.id} video={video}/>
            
            ))}
         </div>
    </div>):
    <div className=""> Channel not Exists</div>
}