import React, { useEffect, useState } from "react";
import stationBg from "../../../assets/image/Avengers__stationBg.jpg";
import ultron from "../../../assets/image/Ultron-homepage.png";
import Carousel from "react-elastic-carousel";
import StationImgCard from "./StationImgCard";
import "./AvengersStation.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AvengersStation = () => {
  const [stationImg, setStationImg] = useState([]);

  // Aos Animation Function Initilization
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/station-img")
      .then((res) => res.json())
      .then((data) => setStationImg(data));
  }, []);

  // Carousel Break Points
  const brakePoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 850, itemsToShow: 4 },
    { width: 1024, itemsToShow: 5 },
  ];

  return (
    <section
      style={{
        backgroundImage: `url('${stationBg}')`,
        backgroundColor: "#00000080",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="relative pb-0 pt-10 xl:py-10">
        <div className="max-w-6xl mx-auto xl:mx-0 xl:ml-auto pr-10 space-y-10">
          <div className="text-center font-orbitron font-bold text-white space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl">
              AN INTERACTIVE EXPERIENCE FOR THE WHOLE FAMILY
            </h2>
            <p className="text-[18px]" id="trigger-ultron">
              Explore an extensive range of original Avengers operational
              equipment, like Captain America’s shield, Iron Man’s armour, Black
              Widow’s uniform, and more.
            </p>
          </div>
          <Carousel
            itemsToShow={5}
            itemsToScroll={1}
            breakPoints={brakePoints}
            focusOnSelect={true}
            enableAutoPlay
            autoPlaySpeed={3000}
            itemPadding={[0, 5]}
          >
            {stationImg.map((image) => (
              <StationImgCard key={image._id} image={image} />
            ))}
          </Carousel>
        </div>
        <div
          className="static text-center xl:absolute bottom-0"
          data-aos="slide-right"
          data-aos-anchor="#trigger-ultron"
          data-aos-delay="400"
        >
          <img
            src={ultron}
            className="h-[500px] 2xl:h-[650px] inline-block"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AvengersStation;
