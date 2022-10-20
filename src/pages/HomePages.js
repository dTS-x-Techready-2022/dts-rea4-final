import React, { useEffect, useState } from "react";
// import GameCard from "components/GameCard";
import Results from "components/Results";

const HomePages = () => {
  useEffect(() => {
    fetchGames();
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch(
      "https://api.rawg.io/api/games" +
        "?key=5aaf45127762461a8cdd44c3b8c6ca0c" +
        "&page_size=9"
    )
      .then((resp) => resp.json())
      .then(({ results }) => setGames(results));
  };

  return (
    <div className="pt-20 bg-gray-900">
      <Results gameResults={games} />
    </div>
  );
};

export default HomePages;
