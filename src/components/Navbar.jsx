import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollPosition } from '../hooks/useScrollPosition'

const Navbar = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollPosition = useScrollPosition()

  return (
    <div className={classNames(scrollPosition > 100 ? 'bg-black' : 'bg-gradient-to-b from-black','fixed flex items-center justify-between p-4 z-[100] w-full')}>
        <Link to='/'>
            <h1 className='text-purple-800 text-4xl font-bold cursor-pointer'>DTS MOVIE</h1>
        </Link>
        <div>
            <Link to='/login'>
                <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
                <button className='bg-purple-800 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar