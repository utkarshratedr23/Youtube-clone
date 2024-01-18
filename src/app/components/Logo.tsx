"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Logo = () => {
  return (
   <Link href="/">
    <Image alt="logo" className='hidden cursor-pointer mx-4 sm:inline' src="/image/logo.svg" width={90} height={20}/>
   </Link>
  )
}

export default Logo
