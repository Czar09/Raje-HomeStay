import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Footer from '../../components/Footer'
import Head from '../../components/Head'
import ImageGrid from '../../components/ImageGrid'
import RoomInfo from '../../components/RoomInfo'
import { urlFor } from '../../sanity'
import { Room } from '../../typing'
import { fetchRooms } from '../../utils/fetchRooms'

type Props = {
    rooms: Room[]
}

 const Search = ({ rooms }: Props) =>{
    const router = useRouter();
    const { query } = useRouter();
    const { location, startDate, endDate, numOfDays, numOfGuests } = query;
    const roomId= query.roomId as string;
    const roomData = rooms.find((ele) => ele.roomTypeId == query.roomId)!;
    return (
        <div>
            <Head placeholder={`${location}, ${startDate} - ${endDate} | ${numOfGuests} guests`} />

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
                    <ImageGrid rooms={roomData} />
                    <RoomInfo maxGuests={roomData.maxGuests} price={roomData.price} description={roomData.description} roomName={roomData.roomName} roomId={roomId} numOfGuests={numOfGuests as string} />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const rooms: Room[] = await fetchRooms();
    return {
        props: {
            rooms
        }
    }
}