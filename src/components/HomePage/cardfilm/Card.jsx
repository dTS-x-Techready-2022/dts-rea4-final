import React, { useState, useEffect } from "react";
import "./styles.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Search from "./Search";
import Menu from "./Menu";
import Title from "./Title";
import Carousel from "./Carousel";
import axios from "axios";

export default function Carousal() {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState("robo");
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=45eb8469`)
      .then((response) => {
        setMovies(response.data);
        response.data.Search.sort(function (a, b) {
          return a.Year - b.Year;
        });
      });
  }, [search]);

  const moveBehind = () => {
    value === -100 * (movies.Search.length - 7)
      ? setValue(0)
      : setValue(value - 100);
  };
  const moveAhead = () => {
    console.log(value);
    value === 0
      ? setValue(-100 * (movies.Search.length - 7))
      : setValue(value + 100);
  };
  function showMovie(event) {
    setId(event.target.alt);
  }
  return (
    <div className="bodyDiv">
      <Search onClick={(value) => setSearch(value)} />
      <Menu />

      <div className="glider">
        {movies.Response === "True" ? (
          movies.Search.map((movie, index) => {
            return (
              <div
                key={index}
                className="glide"
                style={{ transform: `translateX(${value}%)` }}
              >
                <img
                  key={movie.imdbID}
                  className="poster"
                  src={movie.Poster}
                  alt={movie.imdbID}
                  onClick={showMovie}
                />
                <Title name={movie.Title} />
              </div>
            );
          })
        ) : (
          <div className="errorDiv">{movies.Error}</div>
        )}
      </div>
      {movies.Response === "True" && (
        <div>
          <ArrowBackIosIcon id="moveBehind" onClick={moveAhead} />
          <ArrowForwardIosIcon id="moveAhead" onClick={moveBehind} />
        </div>
      )}
      {id && <Carousel className="bodyDiv" imdbid={id} />}
    </div>
  );
}
