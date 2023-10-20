"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Categories from './components/categories'

export default function Home() {
  return (
    <div className='p-5'>
      <Image
        src="/banner-home-01.png"
        height={150}
        width={350}
        className='h-auto w-full'
        sizes='100vw'
        alt="banner 55% de desconto"
      />
      <div className='mt-8'>
        <Categories/>
      </div>
    </div>
  )

}
