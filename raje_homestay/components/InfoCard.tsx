import { HeartIcon, StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

type Props = {}

function InfoCard({ }: Props) {
    return (
        <div className='flex py-7 px-2 mb-10  border-b cursor-pointer hover:opacity-80 hover:shadow-lg rounded-xl pr-4 transition duration-200 ease-out first:border-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0  '>
                <Image src="https://links.papareact.com/xqj" layout='fill' objectFit='cover' className='rounded-2xl' alt='pic of hotel 1' />
            </div>
            <div className='flex flex-col flex-grow pl-5 '>
                <div className='flex justify-between'>
                    <p>London</p>
                    <HeartIcon className='h-7 cursor-pointer text-red-600' />
                </div>
                <h4 className='text-xl'> London Studio Apartments </h4>
                <div className='border-b w-10 pt-2'/>
                    <p className='pt-2 text-sm text-gray-500 flex-grow'>1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine</p>
                    <div className='flex justify-between items-end pt-5 '>
                        <p className='flex items-center'>
                            <StarIcon className='h-5 text-red-400' /> 4.7
                        </p>
                        <div>
                            <p className='text-lg font-semibold lg:text-2xl pb-2'>£30 / night</p>
                            <p className='text-right font-extralight '>£117 total </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default InfoCard