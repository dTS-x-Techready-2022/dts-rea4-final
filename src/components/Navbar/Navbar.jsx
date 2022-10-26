import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {BiSearch} from 'react-icons/bi'
import {HiBell} from 'react-icons/hi'
// import Login from '../../Login/Login'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className='flex items-center space-x-2 md:space-x-10'>
          <img src="https://rb.gy/ulxxee" width={100} height={100} className='cursor-pointer object-contain' alt='logo'/>
        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Show</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>

        </ul>
        </div>
    
    <div className='flex items-center space-x-4 text-sm font-light'> 
      <BiSearch className='hidden sm:inline h-6 w-6' />
      {/* <p className="hidden  lg:inline">Kids</p> */}
      <HiBell className='h-6 w-6' />
      <Link to='/login'>
          <div alt='profile' className='cursor-pointer rounded' >Login</div>
      </Link>
      <Link to='/register'>
          <div alt='profile' className='cursor-pointer rounded' >Sign Up</div>
      </Link>
      <link href="">
      </link>
    </div>
    </header>
  )
}

export default Navbar
