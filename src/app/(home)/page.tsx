import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Categories from './components/categories'
import { prismaClient } from '@/lib/prisma'
import PromoBanner from './components/promo-banner'
import ProductList from '@/components/ui/product-list'
import SectionTitle from '@/components/ui/section-title'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards'
      }
    }
  })
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses'
      }
    }
  })

  return (
    <div className='flex flex-col gap-8 py-8'>
      <PromoBanner
        src="/banner-home-01.png"
        alt="banner 55% de desconto em mouses"
      />

      <div className='px-5'>
        <Categories/>
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals}/>
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="banner 55% de desconto em mouses"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards}/>
      </div>

      <div>
        <PromoBanner
          src="/banner-home-03.png"
          alt="banner 55% de desconto em mouses"
        />
      </div>

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses}/>
      </div>
    </div>
  )

}
