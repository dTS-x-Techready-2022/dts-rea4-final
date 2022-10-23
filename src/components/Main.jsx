import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import requests from '../Request'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    },[])

  return (
    <div className='w-full h-[450px] sm:h-[500px] md:h-[800px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[450px] sm:h-[500px] md:h-[800px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute w-full top-[20%] md:top-[30%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <p className='text-sm py-2 w-full md:max-w-[70%] lg:max-w-[45%] xl:max-w[35%] text-gray-200'>{movie?.overview}</p>
          <div>
            <button className='rounded-sm bg-white text-black py-2 px-5'>Play</button>
            <button className='rounded-sm bg-white/[.3] py-2 px-5 ml-4'>More Information</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main