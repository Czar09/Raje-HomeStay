import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Room } from '../typing'

type Props = {
    rooms: Room
}

function ImageGrid({ rooms }: Props) {
    return (
        <div className="container grid grid-cols-2 mx-auto gap-4 lg:grid-cols-4">
            <Image src={urlFor(rooms.image).url()} alt='Main Image' width={500} height={500}
                className="w-full h-[600px] col-span-2 row-span-2 rounded-lg shadow-sm lg:col-start-3 lg:row-start-1" />
            <Image src={urlFor(rooms.imageSmallFirst).url()} alt='Small First Image' width={500} height={500}
                className="w-full h-full" />
            <Image src={urlFor(rooms.imageSmallSecond).url()} alt='Small First Image' width={500} height={500}
                className="w-full h-full" />
            <Image src={urlFor(rooms.imageSmallThird).url()} alt='Small First Image' width={500} height={500}
                className="w-full h-full" />
            <Image src={urlFor(rooms.imageSmallFourth).url()} alt='Small First Image' width={500} height={500}
                className="w-full h-full" />
        </div>
    )
}

export default ImageGrid