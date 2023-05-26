import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Slides from "./slides";

const Banner = () => {
  // Banner Slider Comp
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const [sliderData, setSliderData] = useState([]);

  // Loading data for banner
  useEffect(() => {
    fetch("http://localhost:3000/slider-data")
      .then((res) => res.json())
      .then((data) => {
        setSliderData(data);
      });
  }, []);

  return (
    <AutoplaySlider
      play={true}
      bullets={false}
      className="h-[500px] sm:h-[600px] md:h-auto lg:h-[700px]"
      cancelOnInteraction={false}
      interval={6000}
    >
      {sliderData.map((slider) => (
        <div className="w-full h-full" key={slider._id}>
          <Slides slider={slider} />
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default Banner;
