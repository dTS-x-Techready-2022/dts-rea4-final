import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import Movie from '../components/Movie';

const Search = () => {
    let params = useParams();

    const key = process.env.REACT_APP_TMDB_API_KEY
    const fetchURL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${params.id}`

    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL])

    console.log(movies)

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 450;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 450;
    }

  return (
    <div>
        <div className='w-full text-white'>
            <img className='sm:block w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/83b58a62-6624-4188-8119-8bdf395dae3f/ID-en-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg' />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
            <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>Search : {params.id}</h1>
            </div>
        </div>
        <div className='relative flex items-center px-3 group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-3 hidden group-hover:block' size={40}/>
            <div id={'slider'} className='w-full h-full overflow-x-scroll scroll-smooth'>
                {movies.map((item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-3 hidden group-hover:block' size={40}/>
        </div>
    </div>
  )
}

export default Search