import { HeartIcon, StarIcon, UsersIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {
}

function RoomInfo({ }: Props) {


    const [numOfGuests, setNumOfGuests] = useState(1);

    return (
        <div className='flex flex-col lg:flex-row py-7 px-2 md:p-20 mb-10 cursor-pointer rounded-xl pr-4 transition duration-200 ease-out '>
            <div className='flex flex-col p-10 shadow-lg bg-yellow-500 rounded-xl'>

                <h4 className='text-xl'> Payment Distribution </h4>
                <p className='pt-2 text-sm text-gray-500 flex-grow'>1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine</p>
                <div className='flex justify-between mt-2'>
                    <p className='flex items-center'>
                        Adults (age {'>'} 13)
                        <UsersIcon className='ml-2 h-5' />
                    </p>
                    <input value={2} min={1} max={5} onChange={(e) => setNumOfGuests(parseInt(e.target.value))} type='number' className='w-12 pl-2 text-lg outline-none text-red-500' />

                </div>
                <div className='flex justify-between mt-2'>
                    <p className='flex items-center'>
                       Children (age{'<'}13)
                        <UsersIcon className='ml-2 h-5' />
                    </p>
                    <input value={2} min={1} max={5} onChange={(e) => setNumOfGuests(parseInt(e.target.value))} type='number' className='w-12 pl-2 text-lg outline-none text-red-500' />

                </div>
                <div className='flex justify-between mt-2'>
                    <p className='flex items-center'>
                        Rooms
                    </p>
                    <input value={1} min={1} max={5} onChange={(e) => setNumOfGuests(parseInt(e.target.value))} type='number' className='w-12 pl-2 text-lg outline-none text-red-500' />

                </div>
                <div className='border-b w-10 pt-2' />
                <div className='flex justify-between items-end pt-5 '>

                    <p className='flex items-center'/>
                
                    <div>
                        <p className='text-lg font-semibold lg:text-2xl pb-2'>£30 / night</p>
                        <p className='text-right font-extralight '>£117 total </p>
                        <button className='ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full mt-5'>Pay Now!!</button>
                    </div>
                </div>

            </div>
            <div className='flex flex-col flex-grow pl-5 mt-4 '>
                <div className='flex justify-between'>
                    <p>London</p>
                    <HeartIcon className='h-7 cursor-pointer text-red-600' />
                </div>
                <h4 className='text-xl'> London Studio Apartments </h4>
                <div className='border-b w-10 pt-2' />
                <p className='pt-2 text-sm text-gray-500 flex-grow'>1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine</p>
                <div className='flex justify-between items-end pt-5 '>
                    <p className='flex items-center'>
                        <StarIcon className='h-5 text-red-400' /> 4.7
                    </p>
                    <div>
                        <p className='text-lg font-semibold lg:text-2xl pb-2'>£30 / night</p>
                        <p className='text-right font-extralight '>£117 total </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomInfo