import Image from 'next/image'
import { useState } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Head from '../components/Head'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard' 
import ImageGallery from 'react-image-gallery';

export default function Home() {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <div>
      <Head placeholder='Raje HomeStay'/>
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        <section className='pt-6 mb-10'>
          <h2 className='text-4xl py-8 font-semibold'>
            Explore These
          </h2>
          <div className='flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3'>
            <MediumCard />
          </div>
        </section>
        <ImageGallery items={images} />
       
       
        <section className='pt-6 mt-3 mb-10'>
          <h2 className='text-4xl py-8 font-semibold'>
            Amenities
          </h2>
          <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
            <SmallCard />
          </div>
        </section>

        <LargeCard />
      </main>

      <Footer/>

    </div>
  )
}


