import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({item}) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()

    const movieID = doc(db, 'users',`${user?.email}`)

    const saveMovie = async () => {
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID, {
                savedMovie: arrayUnion({
                    id : item.id,
                    title : item.title,
                    img: item.poster_path
                })
            })
        } else {
            alert('Plase log in to save a movie')
        }
    }

  return (
    <div className='w-[150px] sm:w-[190px] lg:w-[240px] inline-block cursor-pointer relative p-2'>
            <div className='rounded-sm border border-black hover:border-purple-800'>
                <p onClick={ saveMovie } className='absolute'>{like ? <FaHeart className='m-4 text-gray-300'/> : <FaRegHeart className='m-4  text-opacity-0 hover:text-opacity-100 text-gray-300'/>}</p>
                <Link to={`/detail/${item.id}`}>
                    <img className=' rounded-sm w-full h-auto block' src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} alt={item?.title} />
                </Link>
            </div>
        
        <div className='text-white'>
            <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        </div>
    </div>
  )
}

export default Movie