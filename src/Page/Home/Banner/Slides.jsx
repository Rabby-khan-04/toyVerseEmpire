import React from "react";
import { Link } from "react-router-dom";

const Slides = ({ slider }) => {
  const { _id, image, name, quote, color } = slider;
  return (
    <div
      className=" w-full h-full"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "multiply",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="container my-auto grid md:grid-cols-2 gap-5 py-[50px]">
        <div className="self-center space-y-4">
          <h2
            className="font-orbitron text-xl lg:text-2xl font-bold tracking-wider"
            style={{ color: color }}
          >
            {name}
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-orbitron leading-tight font-bold">
            {quote}{" "}
          </p>
          <Link
            className="btn btn-primary text-white font-bold capitalize text-xl"
            style={{ backgroundColor: color, borderColor: color }}
            to="/toys"
          >
            Shop Now
          </Link>
        </div>
        <div className="self-center row-start-1 md:row-start-auto">
          <img
            src={image}
            className="rounded-3xl h-48 sm:h-60 md:h-80 lg:h-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slides;
