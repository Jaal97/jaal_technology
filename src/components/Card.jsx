"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';


const Card = (props) => {

    let products = props.product;
    // console.log(products);
    // let images = products.images;
    // console.log(images);

    const [img, setImg] = useState(0);

    useEffect(() => {
        // document.title = `You clicked ${img} times`;

    })
    let text = `Hola!+Deseo+${products}+en+contacto+contigo`;

    let api_w = `https://api.whatsapp.com/send/?phone=573187186018&text=${text}+&type=phone_number&app_absent=0`;

    return (
        <div className='max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 p-4 mt-8 hover:bg-gray-700'>
            <Link href={`/producto/${products.id}`}>
            <picture>
                
                    <img src={products.image[img]} alt="" className='rounded-t-lg' />
                
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