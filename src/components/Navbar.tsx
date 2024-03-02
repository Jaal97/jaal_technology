"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {


    const [isClick, setisClick] = useState(false);
    const toggleNavbar = () => {
        setisClick(!isClick)
    }

    return (
        <nav className='p-5 bg-gray-900 shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-[Poppins] text-white cursor-pointer'>
                    <Link href={'/'}>
                        <img className='h-14 inline' src="https://i.ibb.co/dLJ4Ltt/Logo-Technology-jaal-02.png" alt="Logo-Technology" />
                    </Link>
                </span>
                <span className='text-3xl cursor-pointer md:hidden mx-2 block'>
                    <button onClick={toggleNavbar}>
                        {isClick ? (
                            <svg className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"

                                fill="none"

                                viewBox="0 0 24 24"

                                stroke="currentColor" >

                                <path

                                    strokeLinecap="round"

                                    strokeLinejoin="round"

                                    strokeWidth={2}

                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6 text-white"

                                xmlns="http://www.w3.org/2000/svg"

                                fill="none"

                                viewBox="0 0 24 24"

                                stroke="currentColor">

                                <path

                                    strokeLinecap="round"

                                    strokeLinejoin="round"

                                    strokeWidth={2}

                                    d="M4 6h16M4 12h16m-7 6h7" />

                            </svg>

                        )}
                    </button>
                    {/* <button onClick={() => {toggleNavbar()}}>
                        <FcMenu />
                    </button> */}
                </span>
            </div>
            <ul className='text-white md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-gray-900 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top[-400px] transition-all ease-in duration-500'>
                <li className='mx-4 my-6 md:my-0'>
                    <Link className='text-xl hover:text-jaal-line duration-400' href="/">
                        Home
                    </Link>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <Link className='text-xl hover:text-jaal-line duration-400' href="/proximamente">
                        Proximamente
                    </Link>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <Link className='text-xl hover:text-jaal-line duration-400' href='/acerca_de'>
                        Acerca de
                    </Link>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <Link className='text-xl hover:text-jaal-line duration-400' href="/contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
            {isClick && (
                <div className='md:hidden'>
                    <ul className='text-white md:flex md:items-center md:z-auto md:static absolute bg-gray-700 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 opacity-75 md:opacity-100 top[-400px] transition-all ease-in duration-1000'>
                        <li className='mx-4 my-6 md:my-0'>
                            <Link className='text-xl hover:text-jaal-line duration-400 ' href="/">
                                <button onClick={toggleNavbar}>
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li className='mx-4 my-6 md:my-0'>
                            <Link className='text-xl hover:text-jaal-line duration-400' href="/proximamente">
                                <button onClick={toggleNavbar}>
                                    Proximamente
                                </button>
                            </Link>
                        </li>
                        <li className='mx-4 my-6 md:my-0'>
                            <Link className='text-xl hover:text-jaal-line duration-400' href="/acerca_de">
                                <button onClick={toggleNavbar}>
                                    Acerca de
                                </button>
                            </Link>
                        </li>
                        <li className='mx-4 my-6 md:my-0'>
                            <Link className='text-xl hover:text-jaal-line duration-400' href="/contacto">
                                <button onClick={toggleNavbar}>
                                    Contacto
                                </button>
                            </Link>
                        </li>
                        {/* <button className='bg-cyan-500 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-400 rounded'>
                            Get Started
                        </button> */}
                    </ul>
                </div>
            )}
        </nav>
    )
}
export default Navbar