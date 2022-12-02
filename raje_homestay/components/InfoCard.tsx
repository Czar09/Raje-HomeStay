import { HeartIcon, StarIcon } from '@heroicons/react/solid'
import { timeStamp } from 'console'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { urlFor } from '../sanity'
import { Room } from '../typing'

type Props = {
    rooms: Room,
}

function InfoCard({ rooms }: Props) {

    const router = useRouter();
    const { query } = useRouter();
    const getTimestamp = (date: Date) => Math.round(date.getTime() / 1000);
    const getCurrentTimestamp = () => getTimestamp(new Date());
    const expiryTimestamp = getCurrentTimestamp() + (60 * 10);
    const { startDate, endDate, location, numOfDays, numOfGuests } = query
    const checkinDate = new Date(startDate as string);
    const checkoutDate = new Date(endDate as string);
    const checkInTimestamp = Math.floor(checkinDate.getTime() / 1000);
    const checkOutTimestamp = Math.floor(checkoutDate.getTime() / 1000);
    const formData = {
        checkInTimestamp: checkInTimestamp,
        checkOutTimestamp: checkOutTimestamp,
        createTimestamp: getCurrentTimestamp(),
        expiryTimestamp: expiryTimestamp,
        numOfGuests: +(numOfGuests as string),
        roomType: rooms.roomName,
    };

    const [roomAvailable, setRoomAvailable] = useState(0);
    const initialPrice = (parseInt(rooms.price) * Number(numOfDays));
    let price = initialPrice;
    let totalPrice = initialPrice + (0.22*initialPrice);
    if(checkInTimestamp<=getCurrentTimestamp()){
        price = totalPrice;
    }
    
    const numOfRooms = async () => {
        const numRoom = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkRoomsNumAvailability`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        let rooms = numRoom.json();
        rooms.then((val) => {
            setRoomAvailable(val.roomsAvailable);
        }).catch((err) => {
            console.log("There's an error while fetching rooms");
        })
    }

    const searchRoom = () => {
        if (roomAvailable != 0) {
            router.push({
                pathname: `/roomDescription/${rooms.roomTypeId}`,
                query: {
                    startDate: startDate,
                    endDate: endDate,
                    location: location,
                    numOfDays: numOfDays,
                    numOfGuests: numOfGuests,
                    totalPrice: price
                }
            })
        }
    };

    useEffect(() => {
        numOfRooms();
    })
    price = parseInt(rooms.offerPrice) == 0 ? price : price - (price*parseInt(rooms.offerPrice)/100)

    return (
        <div onClick={searchRoom} className='flex py-7 px-2 mb-10  border-b cursor-pointer hover:opacity-80 hover:shadow-lg rounded-xl pr-4 transition duration-200 ease-out first:border-t' >
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0  '>
                <Image src={urlFor(rooms.image).url()} layout='fill' objectFit='cover' className='rounded-2xl' alt='pic of hotel 1' />
            </div>
            <div className='flex flex-col flex-grow pl-5 '>
                <div className='flex justify-between'>
                    <p>Rajae HomeStay</p>
                    <HeartIcon className='h-7 cursor-pointer text-red-600' />
                </div>
                <h4 className='text-xl'>{rooms.roomName}</h4>
                <div className='border-b w-10 pt-2' />
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{rooms.description}</p>
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{roomAvailable} Rooms Left</p>
                <div className='flex justify-between items-end pt-5 '>
                    <p className='flex items-center'>
                        <StarIcon className='h-5 text-red-400' /> 4.7
                    </p>
                    <div>
                        <p className='text-lg font-semibold lg:text-2xl pb-2'>{price} / night</p>
                        {rooms.offerPrice === '0' ? '':<p className='text-lg font-semibold lg:text-2xl pb-2'><s>{rooms.price}</s> / night</p>}
                        <p className='text-right font-extralight '>{price} total </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard