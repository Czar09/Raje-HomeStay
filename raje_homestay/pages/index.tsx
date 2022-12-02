import Image from 'next/image'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Head from '../components/Head'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard' 
import ImageGallery from 'react-image-gallery';
import { BannerImage, GalleryImage, Room } from '../typing'
import { fetchBanner } from '../utils/fetchBanner'
import { GetStaticProps } from 'next'
import { fetchRooms } from '../utils/fetchRooms'
import { fetchGallery } from '../utils/fetchGallery'
import { urlFor } from '../sanity'

type Props ={ 
  bannerImage: BannerImage,
  rooms: Room[],
  galleryImage: GalleryImage[]
}


export default function Home({bannerImage, rooms, galleryImage}:Props) {

  let images = [{
    original:urlFor(bannerImage.image).url(),
    thumbnail:urlFor(bannerImage.image).url(),
  }];

  useEffect(()=>{
    galleryImage.map((gallery)=>(
    
      images.push({
        original: urlFor(gallery.image).url(),
        thumbnail:urlFor(gallery.image).url()
      })
    ))
  },[]);
console.log(images);
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
        <ImageGallery items={images} autoPlay={true} showPlayButton={false} />
       
       
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

export const getStaticProps: GetStaticProps<Props> = async() => {
  const bannerImage: BannerImage = await fetchBanner();
  const rooms: Room[] = await fetchRooms();
  const galleryImage: GalleryImage[] = await fetchGallery();


  return{
    props:{
      bannerImage,
      rooms,
      galleryImage
    },
    
    //This ensures that NextJs will re-genrate the page data after every 10 seconds to be updated
    revalidate:10,
  }
}