import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex justify-center'>
      <div className='max-w-lg  border border-gray-200 rounded-lg shadow '>
        <picture className=''>
          <img src="https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_960_720.png"
            className=''
            alt="correo" />
        </picture>
        <h3 className='text-xl text-center font-bold  p-3 text-gray-950 mb-3'>Contáctenos a través de los siguientes medios de comunicación.</h3>

        <div className=' grid grid-cols-1 text-left p-3'>
          <span className='text-xl font-bold text-blue-800 hover:text-blue-600'>
            <Link href={"https://mail.google.com/mail/u/1/#inbox?compose=CllgCJfnbMMFrgLKwDFKsWBhPSWkDcbVKVssPDVQzCVvRCLxJVtQCLXGgfKzTQvsLFfxlWbFVKg"}
              target='_blank'
            >
              <img src="https://1000marcas.net/wp-content/uploads/2019/11/logo-Gmail-1.png"
                className='w-20 inline-block'
                alt="gmail" />

              jaal9709@gmail.com
            </Link>

          </span>

          <span className='text-xl font-bold text-blue-800 hover:text-blue-600'>
            <Link href={"https://api.whatsapp.com/send/?phone=573126289502&text=Hola!+Deseo+ponerme+en+contacto+contigo+&type=phone_number&app_absent=0"}
              target='_blank'
            >
              <img src="https://static.vecteezy.com/system/resources/previews/018/930/746/non_2x/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
                className='w-20 inline-block'
                alt="whatsapp-icon" />

              +57 312 628 9502
            </Link>

          </span>
        </div>


      </div>
    </div>
  )
}

export default page