import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Room } from '../typing'

type Props = {
    rooms: Room
}

function ImageGrid({rooms}: Props) {
    console.log(rooms)
  return (
    <div className="container grid grid-cols-2 mx-auto gap-4 lg:grid-cols-4">
            <img
                src={urlFor(rooms.image).url()}
                className="w-full h-[600px] col-span-2 row-span-2 rounded-lg shadow-sm lg:col-start-3 lg:row-start-1"
            />
            <img
                className="w-full h-full"
                src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
            />
            <img
                className="w-full h-full"
                src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
            />
            <img
                className="w-full h-full"
                src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
            />
            <img
                className="w-full h-full"
                src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
            />
        </div>
  )
}

export default ImageGrid