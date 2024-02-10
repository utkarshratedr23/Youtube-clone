"use client"
import React from 'react'
import {MdMenu} from "react-icons/md";
import IconButton from './IconButton';
import Logo from '../../Logo';
import { SidebarContext } from '@/app/context/SidebarContext';
import { useContext } from 'react';
const NavigationHeader = () => {
  const sidebar=useContext(SidebarContext)
  return (
    <div className='flex flex-row items-center'>
        <IconButton onClick={()=>sidebar?.isOpen ? sidebar.onClose():sidebar?.onOpen()}>
        <MdMenu className="h-6 w-6"/>
        </IconButton>
         <Logo/>
    </div>
  )
}

export default NavigationHeader
