import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Footer from '../components/Footer'
import Head from '../components/Head'
import {format} from 'date-fns';
import InfoCard from '../components/InfoCard'
import { GetServerSideProps, GetStaticProps } from 'next'
import { Room, Social } from '../typing'
import {fetchSocials} from '../utils/fetchSocials'
import { fetchRooms } from '../utils/fetchRooms'

type Props = {
    rooms: Room[],
  }
  


export default function Search({rooms}:Props) {
    const router  = useRouter();
    {/** Destructured Values */}
    console.log(router.query);
    const{ location,startDate, endDate, numOfDays, numOfGuests} = router.query;

  return (
    <div>
       
       <Head placeholder={`${location}, ${startDate} - ${endDate} | ${numOfGuests} guests`}/>
       
       <main className='flex mb-10'>
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
            {rooms.map((room)=>(
                <InfoCard  key={room._id} rooms={room} />
            ))}
        </section>
       </main>

       <Footer/>     
    </div>
  )
}


export const getServerSideProps: GetServerSideProps<Props> = async() => {
    const rooms: Room[] = await fetchRooms();
    return {
        props:{
            rooms
        }
    }
}