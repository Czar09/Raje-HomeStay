import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Room } from '../typing'

type Props = {
    rooms: Room
}

function ImageGrid({rooms}: Props) {
  return (
    <div className="container grid grid-cols-2 mx-auto gap-4 lg:grid-cols-4">
            <img
                src={urlFor(rooms.image).url()}
                className="w-full h-[600px] col-span-2 row-span-2 rounded-lg shadow-sm lg:col-start-3 lg:row-start-1"
            />
            <img
                className="w-full h-full"
                src={urlFor(rooms.imageSmallFirst).url()}
            />
            <img
                className="w-full h-full"
                src={urlFor(rooms.imageSmallSecond).url()}
            />
            <img
                className="w-full h-full"
                src={urlFor(rooms.imageSmallThird).url()}
            />
            <img
                className="w-full h-full"
                src={urlFor(rooms.imageSmallFourth).url()}
            />
        </div>
  )
}

export default ImageGrid