import { HeartIcon, StarIcon, UsersIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Room } from '../typing'

type Props = {

    maxGuests: string,
    price: string,
    description: string
}

function RoomInfo({maxGuests, price, description}: Props) {

    console.log(maxGuests);
    
   
    const router = useRouter();
    const{ location,startDate, endDate, numOfDays, numOfGuests, totalPrice} = router.query;
    const [Adults, setAdults] = useState(numOfGuests);
    const [child, setChild] = useState(0);
    const [numOfRoom, setNumOfRoom] = useState(1);
    return (
        <div className='flex flex-col lg:flex-row py-7 px-2 md:p-20 mb-10 cursor-pointer rounded-xl pr-4 transition duration-200 ease-out '>
            <div className='flex flex-col p-10 shadow-lg bg-yellow-500 rounded-xl'>

                <h4 className='text-xl'> Payment Distribution </h4>
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description} </p>
                <div className='flex justify-between mt-2'>
                    <p className='flex items-center'>
                        Adults (age {'>'} 13)
                        <UsersIcon className='ml-2 h-5' />
                    </p>
                    <input value={Adults}  min={1} max={Number(numOfGuests)-child} onChange={(e) => setAdults(parseInt(e.target.value))} type='number' className='w-12 pl-2 text-lg outline-none text-red-500' />

                </div>
                <div className='flex justify-between mt-2'>
                    <p className='flex items-center'>
                       Children (age{'<'}13)
                        <UsersIcon className='ml-2 h-5' />
                    </p>
                    <input min={0} max={Number(numOfGuests)-Number(Adults)} onChange={(e) => setChild(parseInt(e.target.value))} type='number' className='w-12 pl-2 text-lg outline-none text-red-500' />

                </div>
                <div className='flex justify-between mt-2'>
                    <p className='flex items-center'>
                        Rooms
                    </p>
                    <input min={1} max={2} onChange={(e) => setNumOfRoom(parseInt(e.target.value))} type='number' className='w-12 pl-2 text-lg outline-none text-red-500' />

                </div>
                <div className='border-b w-10 pt-2' />
                <div className='flex justify-between items-end pt-5 '>

                    <p className='flex items-center'/>
                
                    <div>
                        <p className='text-lg font-semibold lg:text-2xl pb-2'>{price} / night</p>
                        <p className='text-right font-extralight '>{totalPrice} total </p>
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
                        <p className='text-lg font-semibold lg:text-2xl pb-2'>{price} / night</p>
                        <p className='text-right font-extralight '>{totalPrice} total </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomInfo