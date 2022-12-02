import Image from 'next/image'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Head from '../components/Head'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard' 
import ImageGallery from 'react-image-gallery';
import { Amenities, BannerImage, GalleryImage, Room } from '../typing'
import { fetchBanner } from '../utils/fetchBanner'
import { GetServerSideProps, GetStaticProps } from 'next'
import { fetchRooms } from '../utils/fetchRooms'
import { fetchGallery } from '../utils/fetchGallery'
import { urlFor } from '../sanity'
import { fetchAmenities } from '../utils/fetchAmenities'

type Props ={ 
  bannerImage: BannerImage,
  rooms: Room[],
  galleryImage: GalleryImage[],
  amenities: Amenities[],
}

function Home({bannerImage, rooms, galleryImage, amenities}:Props) {

  let images = [{
    original:urlFor(bannerImage.image).url(),
    thumbnail:urlFor(bannerImage.image).url(),
  }];


    galleryImage.map((gallery)=>(
    
      images.push({
        original: urlFor(gallery.image).url(),
        thumbnail:urlFor(gallery.image).url()
      })
    ))
    
  return (
    <div>
      <Head placeholder='Search Here'/>
      <Banner bannerImage={bannerImage}/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        <section className='pt-6 mb-10' id="rooms">
          <h2 className='text-4xl py-8 font-semibold'>
            Rooms
          </h2>
          <div className='flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3'>
            {rooms.map((room)=>(
              <MediumCard key={room._id} rooms={room} />
            ))}
          </div>
        </section>
        <ImageGallery items={images} autoPlay={true} showPlayButton={false} showThumbnails={false}/>
       
       
        <section className='pt-6 mt-3 mb-10'>
          <h2 className='text-4xl py-8 font-semibold'>
            Amenities
          </h2>
          <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
            <SmallCard amenities={amenities}/>
          </div>
        </section>

        <LargeCard />
      </main>

      <Footer/>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async() => {
  const bannerImage: BannerImage = await fetchBanner();
  const rooms: Room[] = await fetchRooms();
  const galleryImage: GalleryImage[] = await fetchGallery();
  const amenities: Amenities[] = await fetchAmenities();

  return{
    props:{
      bannerImage,
      rooms,
      galleryImage,
      amenities
    }
  }
}