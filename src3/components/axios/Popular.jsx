import Call from "./Call";
import React, { useEffect, useState } from "react";
import { Rating, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

const Popular = (props) => {
    const [movies, setMovies] = useState([]);
    // const {popular} = props
    useEffect(() => {
        const fetchDataMovies = async () => {
            try {
                const responseDariTMDB = await Call.get(
                    // "movie/popular?"
                    props.popular
                );
                console.log('responseDariTMDB', responseDariTMDB);
                setMovies(responseDariTMDB.data.results);
            } catch (err) {
                console.log(err);
            }
        };
        fetchDataMovies();
    }, []);

    const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
    return (
        <>
            <h1 style={{ color: 'white', marginTop: 100 }}>List Series Movie</h1>

            <ImageList sx={{ width: '100%', height: 'auto', overflow: 'hidden' }} cols={7} maxWidth="xl" >
                {movies.map((movie) => (
                    <ImageListItem key={movie.id}>
                        <img
                            style={{ width: 210, height: 300 }}
                            src={`${baseUrlForMovie}${movie.poster_path}`}
                            alt={movie.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{ width: 210, mb: 2, color: 'white', pb: 2 }}
                            title={movie.title}
                        />
                        <Rating
                            sx={{ mb: 2 }}
                            value={movie.vote_average / 2}
                            readOnly
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
};

export default Popular;