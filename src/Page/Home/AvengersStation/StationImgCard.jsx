import React from "react";

const StationImgCard = ({ image }) => {
  const { img } = image;
  return (
    <div className="overflow-hidden group">
      <img
        src={img}
        className="h-[450px] object-cover object-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-300"
        alt=""
      />
    </div>
  );
};

export default StationImgCard;
