import React from 'react'
import { useParams } from 'react-router-dom';
import DetailMovie from '../components/DetailMovie';

const Movie = () => {
    let params = useParams();
    return (
        <div className='w-full h-full'>
            <DetailMovie movie_id={params.id} />
        </div>
        
    ) 
}

export default Movie