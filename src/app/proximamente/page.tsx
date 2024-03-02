import React from 'react'
import Card from '@/components/Card'
import {productsPro} from '@/utils/ProductDB'

const page = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 py-4'>
      {productsPro.map(product => (
      <Card className="" product={product} key={product.id} isPro={true}/>

      ))}

    </div>
  )
}

export default page