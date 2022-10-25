import React, { useState, useEffect } from "react";
import Results from "components/Results";
import axios from "axios";
import SearchBar from "components/search_bar";
import { auth } from "components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/login");
  }, [user, loading]);

  const [gameResults, setGameResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.rawg.io/api/games?key=13ccf08eedbc418cbe4a4ac4a7dc751b&search=${searchTerm}`
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
