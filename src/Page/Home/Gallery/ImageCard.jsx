import React from "react";

const ImageCard = ({ img }) => {
  const { image, name } = img;
  return (
    <div className="overflow-hidden rounded-lg relative group">
      <img
        src={image}
        className="w-full h-72 sm:h-[350px] object-cover object-top group-hover:scale-150 transition-all duration-300"
        alt=""
      />
      <div className="bg-black bg-opacity-50 absolute inset-0 flex items-end p-10 translate-y-96 group-hover:translate-y-0 transition-all duration-300">
        <h2 className="text-2xl font-orbitron font-bold text-white delay-150">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default ImageCard;
