import React from 'react'
import ProductCard from '@/components/ProductCard'
import {products} from '/src/utils/ProductDB.js'

const page = () => {
  return (
    <div className='flex justify-center mt-8 xl:mt-20 mb-4'>
      <ProductCard products={products} key={products.id} isPro={false}/>
    </div>
  )
}

export default page