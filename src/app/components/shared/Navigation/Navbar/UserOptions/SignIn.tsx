"use client"
import {signIn} from 'next-auth/react'
import { MdOutlineAccountCircle } from 'react-icons/md'


const SignIn = () => {
    const handleSignInClick=()=>{
        console.log('signed in');
        signIn("google");
    }
  return (
<button className='flex flex-row gap-1 items-center border-[1px] border-slate-700 
rounded-full overflow-hidden px-3 py-1.5 text-blue-400 cursor-pointer' 
onClick={handleSignInClick}>
<MdOutlineAccountCircle className="w-6 h-6"/>
    Sign In
    </button>
  )
}

export default SignIn
