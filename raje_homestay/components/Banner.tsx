import Image from 'next/image'
import React from 'react'

type Props = {}

function Banner({}: Props) {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[900px]'>
        <Image
        priority
        src="https://links.papareact.com/0fm"
        layout="fill"
        alt ="banner"
        objectFit="cover"
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p>Not sure what to choose? Perfect</p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'> 
                I'm Flexible
            </button>
        </div>
    </div>
  )
}

export default Banner