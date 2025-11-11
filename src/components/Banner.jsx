import React from 'react'
import myBackground from '../assets/Poster.png'

function Banner() {
    return (
      <div className='h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(${myBackground})` }}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60
'>They Call Him Og(2025)</div>
      </div>  
    )
}

export default Banner
