import React from 'react'
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Link from 'next/link';

// 2xl:sticky 2xl:bottom-0 2xl:left-0

const Footer = () => {
    return (
        <footer className=" shadow bg-gray-900 absolute  sm:bottom-30 sm:top-64 lg:bottom-18 lg:top-60  w-full">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex items-center justify-between">

                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6" target='_blank'>
                                <TbWorldWww className="hover:underline text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl" />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://api.whatsapp.com/send/?phone=573126289502&text=Hola!+Deseo+ponerme+en+contacto+contigo+&type=phone_number&app_absent=0"
                                target="_blank"
                                className="hover:underline me-4 md:me-6">
                                <FaWhatsapp className=" text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl" />
                            </a>
                        </li>
                        <li>
                            <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJvqsbNWkPDKMkxxrXPLTxqGbKGRMKNvgNhgJLgbgjpbvnGtgLMdNGvnJDStvztMQmZQtDB" className="hover:underline me-4 md:me-6"
                                target='_blank'>
                                <BiLogoGmail className=" text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl" />
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/Jaal97' target="_blank" className='hover:underline me-4 md:me-6'>
                                <AiOutlineGithub className=" text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl " />

                            </a>

                        </li>
                    </ul>
                    <Link href="/" className="flex items-center mb-5 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img className='h-14 inline' src="https://i.ibb.co/dLJ4Ltt/Logo-Technology-jaal-02.png" alt="Logo-Technology" />
                    </Link>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline items-center" target='_blank'>JAAL97</Link>. All Rights Reserved.</span>
            </div>
        </footer >
    )
}

export default Footer