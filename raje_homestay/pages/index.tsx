import Image from 'next/image'
import Banner from '../components/Banner'
import Head from '../components/Head'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'

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
          <div className='flex overflow-scroll space-x-6 scrollbar-hide'>
            <MediumCard />
          </div>
        </section>

        <LargeCard />

      </main>

    </div>
  )
}


