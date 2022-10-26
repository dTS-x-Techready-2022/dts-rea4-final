import React, {useState, useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlineClose} from 'react-icons/ai'

const SavedShow = () => {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 450;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 450;
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovie)
        })
    },[user?.email])

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try{
            console.log("delete "+ passedID)
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedMovie:result,
            });
        } catch (error){
            console.log(error)
        }
    }
    
  return (
    <div>
        <h2 className='text-white font-bold md:text-2xl sm:text-xl p-4'>My Movies</h2>
        <div className='relative flex items-center px-3 group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-3 hidden group-hover:block' size={40}/>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((item, id) => (
                    <div key={id} className='w-[150px] sm:w-[190px] lg:w-[240px] inline-block cursor-pointer relative p-2'>
                        <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                        <div className='border-black rounded-sm border hover:border-purple-800'>
                            
                            <Link to={`/detail/${item.id}`}>
                                <img className=' rounded-sm w-full h-auto block' src={`https://image.tmdb.org/t/p/w300${item?.img}`} alt={item?.title} />
                            </Link>
                        </div>
                    
                        <div className='text-white'>
                            <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-3 hidden group-hover:block' size={40}/>
        </div>
    </div>
  )
}

export default SavedShow