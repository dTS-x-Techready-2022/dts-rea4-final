import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { MdChevronLeft , MdChevronRight} from 'react-icons/md'
import Movie from './Movie'

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState ([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 450;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 450;
    }
    
    return (
    <>
        <h2 className='text-white font-bold md:text-2xl sm:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center px-3 group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-3 hidden group-hover:block' size={40}/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-3 hidden group-hover:block' size={40}/>
        </div>
    </>
  )
}

export default Row