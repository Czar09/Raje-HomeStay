import Image from 'next/image'
import { useState } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Head from '../components/Head'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard' 

export default function Home() {

  return (
    <div>
      <Head />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        <section className='pt-6'>
          <h2 className='text-4xl py-8 font-semibold'>
            Explore These
          </h2>
          <div className='flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3'>
            <MediumCard />
          </div>
        </section>

        <LargeCard />

        <section className='pt-6 mt-3 mb-10'>
          <h2 className='text-4xl py-8 font-semibold'>
            Amenities
          </h2>
          <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
            <SmallCard />
          </div>
        </section>
      </main>

      <Footer/>

    </div>
  )
}


