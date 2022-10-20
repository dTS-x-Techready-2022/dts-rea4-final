import React, { useState } from "react";
import Results from "components/Results";
import axios from "axios";
import SearchBar from "components/search_bar";

const Search = () => {
  const [gameResults, setGameResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.rawg.io/api/games?key=5aaf45127762461a8cdd44c3b8c6ca0c&search=${searchTerm}`
      )
      .then((resp) => {
        setGameResults(resp.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-20 bg-gray-900 h-full">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <SearchBar
            action={handleSubmit}
            change={handleChange}
            value={searchTerm}
          />
        </div>

        <Results gameResults={gameResults} />
      </div>
    </div>
  );
};

export default Search;
