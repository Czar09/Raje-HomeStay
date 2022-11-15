import Image from 'next/image'
import React from 'react'

type Props = {}

function MediumCard({ }: Props) {
    return (
        <>
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image
                    priority
                    src="https://links.papareact.com/5j2"
                    alt="card Image"
                    layout="fill"
                    className='rounded-xl'
                />
            </div>
            <h3 className='text-2xl mt-3'>Outdoor Gateways</h3>
        </div>
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image
                    priority
                    src="https://links.papareact.com/5j2"
                    alt="card Image"
                    layout="fill"
                />
            </div>
            <h3 className='text-2xl mt-3'>Outdoor Gateways</h3>
        </div>
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image
                    priority
                    src="https://links.papareact.com/5j2"
                    alt="card Image"
                    layout="fill"
                />
            </div>
            <h3 className='text-2xl mt-3'>Outdoor Gateways</h3>
        </div>
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image
                    priority
                    src="https://links.papareact.com/5j2"
                    alt="card Image"
                    layout="fill"
                />
            </div>
            <h3 className='text-2xl mt-3'>Outdoor Gateways</h3>
        </div>
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image
                    priority
                    src="https://links.papareact.com/5j2"
                    alt="card Image"
                    layout="fill"
                />
            </div>
            <h3 className='text-2xl mt-3'>Outdoor Gateways</h3>
        </div>
        </>
    )
}

export default MediumCard