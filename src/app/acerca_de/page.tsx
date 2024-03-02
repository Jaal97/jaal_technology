import React from 'react'


const page = () => {
  return (
    <div className='flex flex-wrap justify-center mb-4 '>
      <div className='max-w-lg bg-gray-800 mt-8 mb-4 lg:mb-0 rounded-lg'>
        <picture className='flex justify-center mt-4 p-3'>
          <img src="https://i.ibb.co/dLJ4Ltt/Logo-Technology-jaal-02.png" className='h-auto max-w-full rounded-xl ' alt="technology" />
        </picture>
        {/* <h3 className='text-3xl font-bold mt-4 text-center text-jaal-line'>Jaal Technology</h3> */}
        <p className='text-lg text-white text-justify font-semibold p-4 mt-2'>Nace de la necesidad de brindar productos accesibles y de muy buena calidad, para que cada persona pueda disfrutar de productos excepcionales sin tener que gastar de más. Trabajamos para mejorar y ampliar nuestra gama de productos y así satisfacer las necesidades de todos nuestros clientes.</p>
        <p className='mb-5 m-4 text-2xl font-bold text-jaal-line text-center'>
          ¡Porque todos merecen lo mejor!
        </p>
      </div>

    </div>
  )
}

export default page