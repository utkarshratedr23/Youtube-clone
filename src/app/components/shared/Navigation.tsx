import React from 'react'
import Navbar from './Navigation/Navbar/Navbar'
import getCurrentSubscriptions from '@/app/actions/getCurrentSubscriptions'
import Sidebar from './Navigation/Sidebar/SideBar';

const Navigation = async() => {
  const subscriptions=await getCurrentSubscriptions();
  return (
    <div>
      <>
      <Sidebar subscribedChannels={subscriptions} />
      <Navbar/>
      </>
    </div>
  )
}

export default Navigation
