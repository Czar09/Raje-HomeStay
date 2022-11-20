import Image from 'next/image'
import React, { useState } from 'react'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
import {format} from 'date-fns';
type Props = {
  placeholder: string;
}

function Head({ placeholder }: Props) {
  const myLoader = () => {
    return `logo.jpeg`
  };

  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date())!;
  const [endDate, setEndDate] = useState(new Date())!;
  const [numOfGuests, setNumOfGuests] = useState(1);

  const handleSelect = (ranges:{selection:{startDate: Date, endDate: Date}}) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  const resetInput = () => {
    setSearchInput('');
  }
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const timeDiff = Math.abs(startDate.getTime() - endDate.getTime());
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
     const formattedStartDate = format(new Date(startDate),"dd MMMM yy");
     const formattedEndDate = format(new Date(endDate),"dd MMMM yy" );
    const range = `${formattedStartDate} - ${formattedEndDate}`;
  const search = () =>{
    
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        numOfDays: diffDays==0 ? 1:diffDays,
        numOfGuests,
      }
    })
  }
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const router = useRouter();
  const openModal = () => setSearchInput('Rajae HomeStay');
  
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

      {/**Left Side: Icon */}
      <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          priority
          alt="picture of homestay"
          loader={myLoader}
          src=" "
          layout="fill"
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/**  Middle Section: Search Bar */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-md'>
        <input type='text' className='flex-grow pl-3 bg-transparent outline-none text-gray-600 placeholder-gray-400' placeholder={placeholder || 'Search here'} onFocus={openModal} />
        <SearchIcon className='hidden md:inline-flex  text-white h-8 bg-red-300 rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      {/**  Right Section: Right Side */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden lg:inline cursor-pointer'> Book Gypsy Now!!</p>
        <GlobeAltIcon className='hidden sm:inline h-6' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-5'>
          <DateRangePicker ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#ebe659"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'> Number of Guests</h2>

            <UsersIcon className='h-5' />
            <input value={numOfGuests} min={1} max={5} onChange={(e)=>setNumOfGuests(parseInt(e.target.value))}  type='number' className='w-12 pl-2 text-lg outline-none text-red-200' />
          </div>

          <div>
            <div className='flex'>
              <button onClick={resetInput} className='flex-grow text-gray-400'>Cancel</button>
              <button onClick={search} className='flex-grow text-red-400'>Search</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Head