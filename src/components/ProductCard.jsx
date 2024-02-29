"use client"
import React, { useState, useEffect } from 'react'

const ProductCard = (props) => {

    // const [isClick, setisClick] = useState(false);

    // const toggleNavbar = () => {
    //     setisClick(!isClick)
    // }

    let images = [
        "https://down-co.img.susercontent.com/file/013caaeef65dd384dbf4b066f69fbac2",
        "https://down-co.img.susercontent.com/file/33031c16af30fce9a4849d15825a1bd4",
        "https://down-co.img.susercontent.com/file/08865779637dea49a8e2dfecf22a18a9",
        "https://down-co.img.susercontent.com/file/8d6235b795ca5e5ba01c3d0db5b66384",
        "https://down-co.img.susercontent.com/file/sg-11134201-22100-1wrt59iafdiv15",
        "https://down-co.img.susercontent.com/file/ebe878ec9ebfac85320e19ee2638debd",
        "https://down-co.img.susercontent.com/file/202ca1112f6eb768cbb8acde96fdba47",
        "https://down-co.img.susercontent.com/file/7f9125289796e0fb82a8521b738b9578",
        "https://down-co.img.susercontent.com/file/13293cfff40d77bdd25bb9ec310d13ca",
        "https://down-co.img.susercontent.com/file/54e921d7a64cc69a7b3ab0743b15671f",
        "https://down-co.img.susercontent.com/file/02bf3c68f0bbe76f031b8ed2185f8d3b",
        "https://down-co.img.susercontent.com/file/c7a83b76189541430c832c2b3b3eec24",
        "https://down-co.img.susercontent.com/file/7e2f7b3d5f24ffdc0fbed4e0d3d29303",
        "https://down-co.img.susercontent.com/file/cd99f5ec271733cb008c07b50b0514c6",

    ]


    const [img, setImg] = useState(0);

    useEffect(() => {
        // document.title = `You clicked ${img} times`;

    })

    return (
        <div>
            <h3>{props.titulo}</h3>
            <picture>
                <img src={images[img]} alt="" className='w-60' />
            </picture>
            <div>
                {images.map((img, index) => 
                
                <button  key={index} onClick={() => setImg(index)}>
                    <img src={images[index]} alt="" className='w-10' />
                    <span>{index + 1}</span>
                </button>)}

{/* 
                <button onClick={() => setImg(0)}>
                    <img src={images[0]} alt="" className='w-10' />
                </button>
                <button onClick={() => setImg(1)}>
                    <img src={images[1]} alt="" className='w-10' />
                </button> */}
            </div>
        </div>
    )
}

export default ProductCard