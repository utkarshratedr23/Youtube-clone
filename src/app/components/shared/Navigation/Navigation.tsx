import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/SideBar";
import getCurrentSubscriptions from "@/app/actions/getCurrentSubscriptions";


const Navigation = async () => {
  const subscriptions=await getCurrentSubscriptions();
  return (
    <>
      <Sidebar subscribedChannels={subscriptions}/>
      <Navbar />
    </>
  );
};

export default Navigation;