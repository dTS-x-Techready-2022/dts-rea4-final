import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DetailMovie = ({movie_id}) => {
    const key = process.env.REACT_APP_TMDB_API_KEY
    const fetchURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US`
    const fetchURLTrailer = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${key}&language=en-US`

    const [movie, setMovie] = useState ([])
    const [trailers, setTrailers] = useState ([])
    const trailer = trailers[Math.floor(Math.random() * trailers.length)]

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovie(response.data)
        })
    },[fetchURL])

    useEffect(() => {
        axios.get(fetchURLTrailer).then((response) => {
            setTrailers(response.data.results)
        })
    },[fetchURLTrailer])

  return (
    <>
    {/* <div className='w-full h-[450px] sm:h-[500px] md:h-[800px] text-white'> */}
      <div className='w-full h-full'>
        <div className='w-full h-full md:bg-gradient-to-r z-[-99] md:from-black'></div>
        <img className='blur-lg fixed w-full object-cover h-full z-[-100]' src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='flex flex-col items-center justify-center py-[100px]'>
          <div className='flex flex-row p-10 max-w-[1600px]'>
            <img className='hidden sm:block border-solid border-2 border-purple-900 sm:w-[30%] max-w-[300px] md:block lg:max-h-[450px] object-cover' src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`} alt={movie?.title} />
            <div className='flex flex-col px-5 items-center '>
              <img className='block sm:hidden object-cover py-4 max-w-[200px]' src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`} alt={movie?.title} />
              <h1 className='top-0 text-3xl md:text-5xl font-bold text-white'>{movie?.title}</h1>
              <p className='text-sm py-2 w-fulllg:max-w-[70%] xl:max-w[45%] text-gray-200'>{movie?.overview}</p>
            </div>
          </div>
          <iframe className='w-full min-h-[350px] sm:min-h-[450px] md:min-h-[620px] lg:max-w-[1080px] p-10' src={`https://www.youtube.com/embed/${trailer?.key}`} title={trailer?.name}></iframe>
        </div>
      </div>
      
    {/* </div> */}
    </>
  )
}

export default DetailMovie