import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Footer from '../components/Footer'
import Head from '../components/Head'
import {format} from 'date-fns';

export default function search({}) {
    const router  = useRouter();
    {/** Destructured Values */}
    console.log(router.query);
    const{ location,startDate, endDate, numOfDays, numOfGuests} = router.query;

  return (
    <div>
       
       <Head placeholder={`${location}, ${startDate} - ${endDate} | ${numOfGuests} guests`}/>
       
       <main className='flex '>
        <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'>Stays for {numOfGuests} guests from {startDate} - {endDate}</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'> Stays in {location}</h1>
            <div className='hidden lg:inline-flex mb-5 text-gray-700 whitespace-nowrap space-x-4'>
                <p className='button'>
                    Affordable Rates
                </p>
                <p className='button'>
                    Exquisite Stays
                </p>
                <p className='button'>
                    Pet Friendly
                </p>
            </div>
        </section>
       </main>

       <Footer/>     
    </div>
  )
}