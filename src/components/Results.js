import React from "react";
import GameCard from "components/GameCard";

const Results = (props) => {
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {props.gameResults.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
