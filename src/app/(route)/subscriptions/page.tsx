import getSubscriptionVideos from "@/app/actions/getSubscriptionVideo";
import SubscriptionList from "@/app/components/subscriptions/SubscriptionList";

export default async function Subscriptions() {
    const subscriptionVideos = await getSubscriptionVideos();
  
    return subscriptionVideos.length ? (
      <SubscriptionList videos={subscriptionVideos} />
    ) : (
      "No videos found"
    );
  }