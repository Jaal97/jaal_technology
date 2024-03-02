"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = (props) => {

    const router = useRouter()
    //Para los parametros que llegan por la URL
    const params = useParams()
    let id = params.id;
    let products = props.products;
    let isPro = props.isPro;
    console.log(isPro);

    // console.log(params.id);
    // console.log(products[id])
    let producto = products[id - 1]
    // console.log(producto);
    const [img, setImg] = useState(0);

    useEffect(() => {
    })

        
    let images_index = producto.image;
    // console.log(images_index)
    let im_in = images_index.indexOf(img)
    // console.log(im_in);

    // console.log(indiceDeTres) // 2

    let text= (!isPro ? `Hola!+Deseo+ponerme+en+contacto+contigo+para+pedir+${producto.titulo}` : `Hola!+Deseo+ponerme+en+contacto+contigo+para+consultar+el+producto+${producto.titulo}`);
    let api_w = `https://api.whatsapp.com/send/?phone=573126289502&text=${text}+&type=phone_number&app_absent=0`;

    return (
        <div className='flex flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl  bg-gray-800 hover:bg-gray-700'>
            <picture className='xl:w-full'>
                <img src={producto.image[img]} alt="imagen" className='p-3 w-screen xl:w-screen' />
            </picture>
            <div className='flex flex-col justify-between p-4 leading-normal'>
                <h3 className='mb-2 text-2xl font-bold tracking-tight text-white text-left'>{producto.titulo}</h3>
                <p className='mb-3  text-2xl font-bold text-jaal-line' > $ {producto.precio}</p>
                <div className='grid grid-cols-4 gap-3'>
                    {producto.image.map((img, index) =>

                        <button key={index} onClick={() => setImg(index)}>
                            <img src={producto.image[index]} alt="" className='sm:w-14 xl:w-10' />
                            {/* {id > "2" ? (
                        <span></span>
                    ) : (
                        <span>{index + 1}</span>
                    ) } */}
                        </button>)}

                </div>
                
                <div className='mt-4'>
                    <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <Link href={api_w} target='_blank' className='font-bold'>
                            {
                                !isPro ? (
                                        "Pedir"
                                ) : (
                                    "Consultar"
                                )
                            }
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard