import React from 'react'
import Card from '../components/Card'
import {products} from '../utils/ProductDB'

const page = () => {
  return (
    // className='flex flex-wrap lg:flex-col-[2] justify-center gap-4 py-4'
    <div className='flex flex-wrap justify-center gap-4 py-4'>
      {products.map(product => (
      <Card className="" product={product} key={product._id} isPro={false}/>

      ))}

    </div>
  )
}

export default page