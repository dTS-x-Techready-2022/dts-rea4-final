import React, { useEffect, useState } from "react";

const HomePages = () => {
  useEffect(() => {
    fetchGames();
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch(
      "https://api.rawg.io/api/games" +
        "?key=5aaf45127762461a8cdd44c3b8c6ca0c" +
        "&page_size=40"
    )
      .then((resp) => resp.json())
      .then(({ results }) => setGames(results));
  };

  return (
    <div>
      <ul className="mt-20">
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePages;
