// import { ArrowBackIosNewOutlined, ArrowForwardIos } from '@mui/icons-material';
// import { useRef, useState, useEffect } from 'react';
// import ListItem from '../ListItem/ListItem';
// import './List.css';
// import Movie from './Movie';
// import 'bootstrap/dist/css/bootstrap.min.css';


// // Generate tahun
// let years = [];
// const thisYear = new Date().getFullYear();
// for (let i = 0; i < 10; i++) {
//   years.push(thisYear - i);
// }

// const List = () => {
//   const [movies, setMovies] = useState([]);
//   const [year, setYear] = useState(thisYear);
//   const [genreId, setGenreId] = useState("");
//   const [genreName, setGenreName] = useState("All");
//   const [page, setPage] = useState(1);


//   useEffect(() => {
//     const myFetch = async () => {
//       try {
//         let url = `https://api.themoviedb.org/3/discover/movie`;
//         url += `?api_key=06a7e2639613ef36886186bf8b5f068c`;
//         url += `&certification_country=US`;
//         url += `&certification.lte=PG-13`;
//         url += `&primary_release_year=${year}`;
//         url += `&with_genres=${genreId}`;
//         url += `&page=${page}`;

//         let response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Terjadi gangguan dengan kode: ${response.status}`);
//         }
//         let data = await response.json();
//         console.log('Page ke', page)

//         // Jika halaman 1, isi ulang state movies
//         // Jika halaman 2 atau lebih, tambahkan ke dalam state movie
//         if (page === 1) {
//           setMovies(data.results);
//         } else {
//           setMovies((prevMovie) => [...prevMovie, ...data.results]);
//         }
//       }
//       catch (error) {
//         console.log(error);
//       }
//     }
//     myFetch();
//   }, [year, genreId, page]);



//   const listRef = useRef();
//   const [isMoved, setIsMoved] = useState(false);
//   const [slideNumber, setSlideNumber] = useState(0);
//   const handleClick = (direction) => {
//     setIsMoved(true);
//     if (direction === "left" && slideNumber > 0) {
//       let dis = listRef.current.getBoundingClientRect().x - 50;
//       listRef.current.style.transform = `translateX(${dis + 265}px)`;
//       setSlideNumber(slideNumber - 1);
//     }
//     if (direction === "right" && slideNumber < 5) {
//       let dis = listRef.current.getBoundingClientRect().x - 50;
//       listRef.current.style.transform = `translateX(${dis - 265}px)`;
//       setSlideNumber(slideNumber + 1);
//     }


//   }
//   return (

//     <div className='list'>
//       <br />
//       <br />
//       <br />
//       <span className="listTitle">Continue To Watch</span>
//       <div className='wrapper'>
//         <ArrowBackIosNewOutlined
//           style={{ display: !isMoved && "none" }}
//           onClick={() => handleClick("left")}
//           className='sliderArrow left' />
//         <div className="container" ref={listRef}>
//           <div className="row">
//             {
//               movies.map((movie) => <Movie key={movie.id} movie={movie} />)
//             }
//           </div>
//           <ListItem />

//         </div>
//         <ArrowForwardIos onClick={() => handleClick("right")} className='sliderArrow right' />
//       </div>
//     </div>
//   )
// }

// export default List