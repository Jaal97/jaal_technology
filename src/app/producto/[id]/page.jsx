import React from 'react'
import ProductCard from '@/components/ProductCard'
import {imagesI12, products} from '/src/utils/ProductDB.js'

const page = () => {
  return (
    <div className='flex justify-center mt-20 mb-4'>
      <ProductCard products={products} key={products.id}/>
    </div>
  )
}

export default page