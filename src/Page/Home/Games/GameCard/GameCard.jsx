import React from "react";
import "./GameCard.css";

const GameCard = ({ game }) => {
  const { image, release, name } = game;
  return (
    <div className="rounded-lg overflow-hidden group hover:-translate-y-3 transition-all duration-300">
      <div>
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="bg-neutral px-3 py-7 h-[160px] font-orbitron font-bold text-white space-y-3 details__box flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-xl text-center sm:text-left group-hover:text-primary">
            {name}
          </h2>
          <p>{release}</p>
        </div>

        <div className="h-3 w-full bg-black absolute bottom-0 z-10"></div>
      </div>
    </div>
  );
};

export default GameCard;
