import { HeartIcon, StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { type } from 'os'
import React from 'react'
import { urlFor } from '../sanity'
import { Room } from '../typing'

type Props = {
    rooms: Room,
}

function InfoCard({rooms }: Props) {
    

    const router = useRouter();

    
    const {query} = useRouter();

    const {startDate, endDate, location, numOfDays, numOfGuests} = query
    const totalPrice = parseInt(rooms.price)*Number(numOfDays);
    const searchRoom = () =>{
        router.push({
            pathname:`/roomDescription/${rooms.roomTypeId}`,
            query: {
                startDate: startDate,
                endDate: endDate,
                location:location,
                numOfDays:numOfDays,
                numOfGuests:numOfGuests,
                totalPrice:totalPrice
            }
          })
    };



    return (
        <div onClick={searchRoom} className='flex py-7 px-2 mb-10  border-b cursor-pointer hover:opacity-80 hover:shadow-lg rounded-xl pr-4 transition duration-200 ease-out first:border-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0  '>
                <Image src={urlFor(rooms.image).url()} layout='fill' objectFit='cover' className='rounded-2xl' alt='pic of hotel 1' />
            </div>
            <div className='flex flex-col flex-grow pl-5 '>
                <div className='flex justify-between'>
                    <p>Rajae HomeStay</p>
                    <HeartIcon className='h-7 cursor-pointer text-red-600' />
                </div>
                <h4 className='text-xl'>{rooms.roomName}</h4>
                <div className='border-b w-10 pt-2'/>
                    <p className='pt-2 text-sm text-gray-500 flex-grow'>{rooms.description}</p>
                    <div className='flex justify-between items-end pt-5 '>
                        <p className='flex items-center'>
                            <StarIcon className='h-5 text-red-400' /> 4.7
                        </p>
                        <div>
                            <p className='text-lg font-semibold lg:text-2xl pb-2'>{rooms.price} / night</p>
                            <p className='text-right font-extralight '>{totalPrice} total </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default InfoCard