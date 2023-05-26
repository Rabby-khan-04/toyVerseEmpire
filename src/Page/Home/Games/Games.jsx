import React, { useEffect, useState } from "react";
import GameCard from "./GameCard/GameCard";

const Games = () => {
  const [gamesData, setGamesData] = useState([]);

  // Loading games data
  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((res) => res.json())
      .then((data) => setGamesData(data));
  }, []);

  return (
    <section className="py-16">
      <div className="container space-y-10">
        <div className="intro max-w-4xl mx-auto text-center font-orbitron space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest">
            Explore Our Games Collection{" "}
            <span className="text-primary">//</span>
          </h2>
          <p className="text-base md:text-xl font-bold text-white tracking-wide">
            Discover a world of excitement and entertainment with our carefully
            curated selection of games, offering endless fun and unforgettable
            experiences for gamers of all ages.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {gamesData.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
