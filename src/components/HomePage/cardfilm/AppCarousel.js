import Carousel from "./Carousel";
// import React, { useState, useEffect } from 'react';
import React from 'react';

// import Movie from "./Movie";

// Generate tahun
// let years = [];
// const thisYear = new Date().getFullYear();
// for (let i = 0; i < 10; i++) {
//   years.push(thisYear - i);
// }


const AppCarousel = () => {
    //     const [movies, setMovies] = useState([]);
    //     const [year, setYear] = useState(thisYear);
    //     const [genreId, setGenreId] = useState("");
    //     const [genreName, setGenreName] = useState("All");
    //     const [page, setPage] = useState(1);


    //     useEffect(() => {
    //         const myFetch = async () => {
    //           try {
    //             let url = `https://api.themoviedb.org/3/discover/movie`;
    //             url += `?api_key=03ba3f08aa74bf56d5c7f2aa868aad00`;
    //             url += `&certification_country=US`;
    //             url += `&certification.lte=PG-13`;
    //             url += `&primary_release_year=${year}`;
    //             url += `&with_genres=${genreId}`;
    //             url += `&page=${page}`;

    //             let response = await fetch(url);
    //             if (!response.ok) {
    //               throw new Error(`Terjadi gangguan dengan kode: ${response.status}`);
    //             }
    //             let data = await response.json();
    //             // Jika halaman 1, isi ulang state movies
    //             // Jika halaman 2 atau lebih, tambahkan ke dalam state movie
    //             if (page === 1) {
    //               setMovies(data.results);
    //             } else {
    //               setMovies((prevMovie) => [...prevMovie, ...data.results]);
    //             }
    //           }
    //           catch (error) {
    //             console.log(error);
    //           }
    //         }
    //         myFetch();
    //       }, [year, genreId, page]);



    //       // Generate genre
    // const genres = [
    //     { "id": "", "name": "All" },
    //     { "id": 28, "name": "Action" },
    //     { "id": 12, "name": "Adventure" },
    //     { "id": 16, "name": "Animation" },
    //     { "id": 35, "name": "Comedy" },
    //     { "id": 80, "name": "Crime" },
    //     { "id": 99, "name": "Documentary" },
    //     { "id": 18, "name": "Drama" },
    //     { "id": 10751, "name": "Family" },
    //     { "id": 14, "name": "Fantasy" },
    //     { "id": 36, "name": "History" },
    //     { "id": 27, "name": "Horror" },
    //     { "id": 10402, "name": "Music" },
    //     { "id": 9648, "name": "Mystery" },
    //     { "id": 10749, "name": "Romance" },
    //     { "id": 878, "name": "Science Fiction" },
    //     { "id": 10770, "name": "TV Movie" },
    //     { "id": 53, "name": "Thriller" },
    //     { "id": 10752, "name": "War" },
    //     { "id": 37, "name": "Western" }
    //   ];





    // useEffect(() => {
    //     const myFetch = async () => {


    //         try {
    //             let url = "https://api.themoviedb.org/3/discover/movie?api_key=248be2d424b1886d3106f9aa4d1e1079&language=en-US&sort_by=popularity.
    //             desc & include_adult=false & include_video=false & page=1 & with_
    //             watch_monetization_types = flatrate";
    //             let response = await fetch(url);
    //             if (!response.ok) {
    //                 throw new Error(`Terjadi gangguan dengan kode: ${response.status}`);
    //             }
    //             let data = await response.json();
    //             console.log(data);
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     myFetch();
    // }, []);



    return (
        <>
            <div className="row">
                {/* {
              movies.map((movie) => <Movie key={movie.id} movie={movie} />)
            } */}
            </div>

            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>


                <Carousel
                    show={2}
                >

                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Masjid_al-Haram_1969.jpg" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Masjid_al-Haram_1969.jpg" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Masjid_al-Haram_1969.jpg" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Masjid_al-Haram_1969.jpg" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Masjid_al-Haram_1969.jpg" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Masjid_al-Haram_1969.jpg" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Masjid_al-Haram_1969.jpg" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Masjid_al-Haram_1969.jpg" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default AppCarousel