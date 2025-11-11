import React from 'react'
import Logo from '../assets/ImgOne.png'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div className='flex border space-x-8 pl-3 py-4'>

            <img className='w-[50px]' src={Logo} alt="MovieImg"/>

            <Link to='/' className='text-blue  text-2xl font-bold'>Movies</Link>
            <Link to='/watchlist' className='text-blue  text-2xl font-bold'>WatchList</Link>
        </div>
    )
}

export default NavBar
