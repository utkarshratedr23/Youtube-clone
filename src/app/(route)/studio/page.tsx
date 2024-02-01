import getCurrentChannel from "@/app/actions/getCurrentChannel";
import GetVideosByChannelById from "@/app/actions/getVideoByChannelId";
import AnalyticsSummary from "@/app/components/studio/AnalyticsSummary";
import VideoDetailsCard from "@/app/components/studio/VideoDetailsCard";

export default async function StudioPage() {
  const currentChannel = await getCurrentChannel();
  const videos = await GetVideosByChannelById({ channelId: currentChannel?.id });

  return (
    <div className="flex flex-col w-full h-full p-8">
      <AnalyticsSummary videos={videos} />
      <div className="flex flex-col gap-4 mt-8">
        <h2 className="text-2xl">Videos</h2>
        {videos.length
          ? videos.map((video) => {
              return <VideoDetailsCard key={video.id} video={video} />;
            })
          : "Upload some videos to get started"}
      </div>
    </div>
  );
}