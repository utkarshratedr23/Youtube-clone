import React from "react";
import Navbar from "./Navbar/Navbar";
import SideBar from "./Sidebar/SideBar";


const Navigation = async () => {

  return (
    <>
      <SideBar subscribedChannels={[]}/>
      <Navbar />
    </>
  );
};

export default Navigation;