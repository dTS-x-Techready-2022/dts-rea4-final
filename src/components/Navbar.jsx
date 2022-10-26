import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useScrollPosition } from '../hooks/useScrollPosition'

const Navbar = () => {
    const [search, setSearch] = useState('')
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        try{
            await logOut();
            navigate('/')
        }catch (error){
            console.log(error)
        }
    }

    const handleSearch = (e) => {
        try{
            alert('An essay was submitted: ' + search);
            navigate(`/search/${search}`)
        }catch(error){
            console.log(error)
        }
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollPosition = useScrollPosition()

  return (
    <div className={classNames(scrollPosition > 100 ? 'bg-neutral-900' : 'bg-gradient-to-b from-black','fixed flex items-center justify-between p-4 z-[100] w-full')}>
        <Link to='/'>
            <h1 className='text-sm sm:text-2xl md:text-4xl text-purple-800 font-bold cursor-pointer'>DTS MOVIE</h1>
        </Link>
        <div className='flex '>
        <form onSubmit={handleSearch} className='flex'>
              <input onChange={(e) => setSearch(e.target.value)} className='bg-gray-600 text-white rounded' placeholder='Search'></input>
              <button className='p-1 bg-purple-800 rounded font-bold'><FaSearch /></button>
        </form>
        {user?.email ? 
        <div>
            <Link to='/account'>
                <button className='text-white pr-4'>Account</button>
            </Link>
                <button onClick={handleLogout} className='bg-purple-800 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
        </div>
        : 
        <div>
            <Link to='/login'>
                <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
                <button className='bg-purple-800 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
            </Link>
        </div>
        }
        </div>
    </div>
  )
}

export default Navbar