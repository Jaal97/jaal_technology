import React from 'react'
import Card from '../components/Card'
import {products} from '../utils/ProductDB'

const page = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 py-4'>
      {products.map(product => (
      <Card className="" product={product} key={product._id} />

      ))}

    </div>
  )
}

export default page