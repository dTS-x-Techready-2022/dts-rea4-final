import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DetailMovie = ({movie_id}) => {
    const key = process.env.REACT_APP_TMDB_API_KEY
    const fetchURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US`
    const fetchURLTrailer = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${key}&language=en-US`

    const [movie, setMovie] = useState ([])
    const [trailers, setTrailers] = useState ([])

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

    const trailer = trailers[Math.floor(Math.random() * trailers.length)]

    console.log(movie)
    console.log(trailers)
    console.log('Detail' + trailers.length)

  return (
    <>
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
      <iframe className='h-full w-full' src={`https://www.youtube.com/embed/${trailer.key}`} title={trailer.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </>
  )
}

export default DetailMovie