"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation';

const ProductCard = (props) => {

    const router = useRouter()

    //Para los parametros que llegan por la URL
    const params = useParams()
    let id = params.id;
    let products = props.products;

    // console.log(params.id);
    // console.log(products[id])
    let producto = products[id - 1]
    // console.log(producto);
    const [img, setImg] = useState(0);

    useEffect(() => {
        // document.title = `You clicked ${img} times`;

    })

        
    let images_index = producto.image;
    console.log(images_index)
    let im_in = images_index.indexOf(img)
    console.log(im_in);
    // let ind = producto.indexOf(producto.image[img]); 
    
    let arreglo = [10, 11, 3, 20, 5];

    let indiceDeTres = arreglo.indexOf(3);

    // console.log(indiceDeTres) // 2
    let text = `Hola!+Deseo+${producto.titulo}+referencia+${producto.image[img]}+contigo`;

    let api_w = `https://api.whatsapp.com/send/?phone=573187186018&text=${text}+&type=phone_number&app_absent=0`;

    return (
        <div className='flex flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl  bg-gray-800 hover:bg-gray-700'>
            <picture className='xl:w-full'>
                <img src={producto.image[img]} alt="" className='p-3 w-screen xl:w-screen' />
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
                        <a href={api_w} className='font-bold'>
                            Comprar
                        </a>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ProductCard