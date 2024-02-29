import React from 'react'
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className=" shadow bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex items-center justify-between">

                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://jaal97.online" className="hover:underline me-4 md:me-6" target='_blank'>
                                <TbWorldWww className="hover:underline text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://api.whatsapp.com/send/?phone=573187186018&text=Hola!+Deseo+ponerme+en+contacto+contigo+&type=phone_number&app_absent=0"
                                target="_blank"
                                className="hover:underline me-4 md:me-6">
                                <FaWhatsapp className=" text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6"
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
                    <a href="https://jaal97.online/" className="flex items-center mb-5 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img className='h-14 inline' src="https://i.ibb.co/dLJ4Ltt/Logo-Technology-jaal-02.png" alt="Logo-Technology" />
                    </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <a href="https://jaal97.online/" className="hover:underline items-center">JAAL97</a>. All Rights Reserved.</span>
            </div>
        </footer >
    )
}

export default Footer