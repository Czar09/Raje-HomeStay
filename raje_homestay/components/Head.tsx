import Image from 'next/image'
import React from 'react'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid'
type Props = {}

function Head({}: Props) {
  const myLoader = () => {
    return `logo.jpeg`
  };
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

      {/**Left Side: Icon */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
        priority
        alt = "picture of homestay"
        loader={myLoader}
        src=" "
        layout="fill"
        objectFit='contain'
        objectPosition='left'
        />
      </div>

      {/**  Middle Section: Search Bar */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-md'>
        <input type='text'  className='flex-grow pl-3 bg-transparent outline-none text-gray-600 placeholder-gray-400' placeholder='Search here'/>
        <SearchIcon className='hidden md:inline-flex  text-white h-8 bg-red-300 rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      {/**  Right Section: Right Side */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
       <p className='hidden lg:inline cursor-pointer'> Book Gypsy Now!!</p>
       <GlobeAltIcon className='hidden sm:inline h-6'/>
      
      <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
        <MenuIcon className='h-6'/>
        <UserCircleIcon className='h-6' />
      </div>
      </div>

    </header>
  )
}

export default Head