import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { BannerImage } from '../typing'

type Props = {
  bannerImage: BannerImage
}

function Banner({bannerImage}: Props) {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[900px]'>
        <Image
        priority
        src={urlFor(bannerImage.image).url()}
        layout="fill"
        alt ="banner"
        objectFit="cover"
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-red-500'>Not sure what to choose? Perfect</p>
            <Link href='#rooms'><button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'> 
                Explore Us!!
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Banner