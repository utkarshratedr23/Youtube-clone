import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'
const Search = () => {
  return (
    <form className='flex flex-row border-[1px] border-neutral-700 rounded-full overflow-hidden w-2/5'>
        <input type='text' placeholder='Search' className='w-full px-4 py-2 bg-neutral-900'/>
        <button type='submit'>
            <MdOutlineSearch className='px-3 bg-neutral-800 border-none'/>
        </button>
    </form>
  )
}

export default Search
