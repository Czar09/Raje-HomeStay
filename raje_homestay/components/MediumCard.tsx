import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Room } from '../typing'

type Props = {
    rooms: Room
}

function MediumCard({ rooms}: Props) {
    return (
        <>
        <div className='cursor hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image
                    priority
                    src={urlFor(rooms.image).url()}
                    alt="card Image"
                    layout="fill"
                    className='rounded-xl'
                />
            </div>
            <h3 className='text-2xl mt-3'>{rooms.roomName} Rooms</h3>
        </div>
        
        </>
    )
}

export default MediumCard