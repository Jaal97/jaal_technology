"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';


const Card = (props) => {

    let products = props.product;
    // console.log(products);
    // let images = products.images;
    // console.log(images);
    let isPro = props.isPro;
    // console.log(isPro);
    const [img, setImg] = useState(0);

    useEffect(() => {
    })

    return (
        <div className='max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 p-4 mt-4 hover:bg-gray-700'>

            <Link href={!isPro?( `/producto/${products.id}`):(`/proximamente/${products.id}`)}>
            <picture className=''>
                
                    <img src={products.image[img]} alt="" className='rounded-t-lg md:w-80 md:h-80 md:ml-4' />
                
            </picture>
            <div className='p-5'>
                <h3 className='mb-2 text-2xl font-bold tracking-tight text-white text-left'>{products.titulo}</h3>
                <p className='mb-3  text-2xl font-bold text-jaal-line '><span className='text-line-400'>$ </span>{products.precio}</p>
            </div>
            </Link>
        </div>
    )
}

export default Card