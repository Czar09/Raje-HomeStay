import { HeartIcon, StarIcon, UsersIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import reserveRooms from '../pages/api/reserveRoom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Room } from '../typing'

type Props = {

    maxGuests: string,
    price: string,
    description: string,
    roomName: string,
    roomId: string,
    numOfGuests: string
}

function RoomInfo({ maxGuests, price, description, roomName, roomId, numOfGuests }: Props) {
    const router = useRouter();
    const { startDate, endDate, numOfDays, totalPrice } = router.query;
    const [Adults, setAdults] = useState(`${numOfGuests}`);
    const [child, setChild] = useState(0);
    const [numOfRoom, setNumOfRoom] = useState(1);
    const getTimestamp = (date: Date) => Math.round(date.getTime() / 1000);
    const getCurrentTimestamp = () => getTimestamp(new Date());
    const expiryTimestamp = getCurrentTimestamp() + (60 * 10);
    const checkinDate = new Date(startDate as string);
    const checkoutDate = new Date(endDate as string);
    const checkInTimestamp = Math.floor(checkinDate.getTime() / 1000);
    const checkOutTimestamp = Math.floor(checkoutDate.getTime() / 1000);
    const initialPrice = (parseInt(price) * Number(numOfDays));
    let priceCal = initialPrice;
    let caltotalPrice = initialPrice + (0.22 * initialPrice);
    if(checkInTimestamp <= getCurrentTimestamp()){
        priceCal = caltotalPrice;
    }
    const formData = {
        checkInTimestamp: checkInTimestamp!,
        checkOutTimestamp: checkOutTimestamp!,
        createTimestamp: getCurrentTimestamp(),
        expiryTimestamp: getCurrentTimestamp() + (60 * 10),
        roomType: roomName,
        numOfRoom: numOfRoom
    };

    const checkRoom = async () => {
        let nums = +Adults + child;
        if(+numOfGuests==0 || isNaN(+numOfGuests)){
            alert(`Guests can't be 0`);
            setAdults('0');
        }
        else if(+numOfGuests<nums){
            alert(`Total guests can't exceed limit of ${+numOfGuests} as per your selection`)
        }
        else if(numOfRoom>2){
            alert("Can't book more than 2 rooms");
        }
        else if(+Adults<1){
            alert("Atleast one Adult is necessary to come here!!")
        }
        else{
            const numRoom = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkRoomsNumAvailability`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            let rooms = numRoom.json();
            rooms.then((val) => {
                if (val.roomsAvailable >= numOfRoom) {
                    reserveRoom();
                }
            }).catch((err) => {
                console.log("There's an error");
            })
        }
    }

    const reserveRoom = async () => {
        const numRoom = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/reserveRoom`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        let rooms = numRoom.json();
        rooms.then((val) => {
            const checkInTimestamp = val[0].startdate
            const checkOutTimestamp = val[0].enddate
            if (numRoom.status == 200) {
                router.push({
                    pathname: `/confirmRoom/${roomId}`,
                    query: {
                        checkInTimestamp: checkInTimestamp,
                        checkOutTimestamp: checkOutTimestamp,
                        createTimestamp: getCurrentTimestamp(),
                        price:priceCal,
                        guests:+numOfGuests,
                        roomType: roomName,
                        numOfRoom: numOfRoom
                    }
                })
            }
            else {
                console.log("No room Available");
                return false;
            }
        }).catch((err) => {
            console.log("There's an error");
        })
    }

    return (
        <div className='flex flex-col lg:flex-row py-7 px-2 md:p-20 mb-10 rounded-xl pr-4 transition duration-200 ease-out '>
            <div className='flex flex-col p-10 shadow-lg bg-yellow-500 rounded-xl'>

                <h4 className='text-xl'> Payment Distribution </h4>
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description} </p>
                <div className='flex justify-between mt-2'>
                    <p className='flex items-center'>
                        Adults (age {'>'} 13)
                        <UsersIcon className='ml-2 h-5' />
                    </p>
                    <input value={Adults} min={1} max={Number(numOfGuests) - child} onChange={(e) => setAdults(parseInt(e.target.value))} type='number' className='w-12 pl-2 text-lg outline-none text-red-500' />

                </div>
                <div className='flex justify-between mt-2'>
                    <p className='flex items-center'>
                        Children (age{'<'}13)
                        <UsersIcon className='ml-2 h-5' />
                    </p>
                    <input value={child} min={0} max={Number(numOfGuests) - Number(Adults)} onChange={(e) => setChild(parseInt(e.target.value))} type='number' className='w-12 pl-2 text-lg outline-none text-red-500' />

                </div>
                <div className='flex justify-between mt-2'>
                    <p className='flex items-center'>
                        Rooms
                    </p>
                    <input defaultValue={1}  min={1} max={2} onChange={(e) => setNumOfRoom(parseInt(e.target.value))} type='number' className='w-12 pl-2 text-lg outline-none text-red-500' />

                </div>
                <div className='border-b w-10 pt-2' />
                <div className='flex justify-between items-end pt-5 '>

                    <p className='flex items-center' />

                    <div>
                        <p className='text-lg font-semibold lg:text-2xl pb-2'>{price} / night</p>
                        <p className='text-right font-extralight '>{priceCal} total </p>
                        <button onClick={checkRoom} className='ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full mt-5' >Pay Now!!</button>
                    </div>
                </div>

            </div>
            <div className='flex flex-col flex-grow pl-5 mt-4 '>
                <div className='flex justify-between'>
                    <p>Rajae HomeStay</p>
                    <HeartIcon className='h-7 text-red-600' />
                </div>
                <h4 className='text-xl'> {roomName} </h4>
                <div className='border-b w-10 pt-2' />
                <p className='pt-2 text-sm text-gray-500 '>
                {description}
                </p>
                <div className='flex justify-between items-end pt-5 '>
                    <p className='flex items-center'>
                        <StarIcon className='h-5 text-red-400' /> 4.7
                    </p>
                    <div>
                        <p className='text-lg font-semibold lg:text-2xl pb-2'>{price} / night</p>
                        <p className='text-right font-extralight '>{priceCal} total </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomInfo