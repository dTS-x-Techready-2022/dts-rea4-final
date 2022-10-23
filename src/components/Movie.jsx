import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Movie = ({item}) => {
    const [like, setLike] = useState(false)

  return (
    <div className='w-[150px] sm:w-[190px] lg:w-[240px] inline-block cursor-pointer relative p-2'>
        <div>
            <img className=' rounded-sm w-full h-auto block' src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 border border-purple-800 rounded-md'>
                {like ? <FaHeart className='m-4 text-gray-300'/> : <FaRegHeart className='m-4  text-gray-300'/>}
            </div>
        </div>
        <div className='text-white'>
            <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        </div>
    </div>
  )
}

export default Movie