import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  // load gallery Data
  useEffect(() => {
    fetch("http://localhost:3000/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <section className="py-20">
      <div className="container space-y-10">
        <div className="intro max-w-4xl mx-auto text-center font-orbitron space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest">
            Our Toys Gallery <span className="text-primary">//</span>
          </h2>
          <p className="text-base md:text-xl font-bold text-white tracking-wide">
            Immerse yourself in a visual spectacle as you browse through our toy
            gallery, featuring iconic characters from Marvel Avengers that will
            transport you to a world of endless possibilities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {gallery.map((img) => (
            <ImageCard key={img._id} img={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
