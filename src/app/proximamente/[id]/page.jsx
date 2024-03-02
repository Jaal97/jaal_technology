import React from 'react'
import ProductCard from '@/components/ProductCard'
import {productsPro} from '@/utils/ProductDB'

const page = () => {
  return (
    <div className='flex justify-center mt-8 xl:mt-20 mb-6'>
      <ProductCard products={productsPro} key={productsPro.id} isPro={true}/>
    </div>
  )
}

export default page