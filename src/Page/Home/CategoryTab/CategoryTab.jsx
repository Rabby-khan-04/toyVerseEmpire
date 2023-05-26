import React, { useEffect, useState } from "react";
import ToyCard from "../../Shared/ToyCard/ToyCard";

const CategoryTab = () => {
  const [toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Avengers");

  const handleActiveCategory = (categoryName) => {
    setActiveCategory(categoryName);
  };

  useEffect(() => {
    // Loading data Accroding category
    fetch(`http://localhost:3000/toys?category=${activeCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeCategory]);

  return (
    <section className="py-20">
      <div className="container">
        <div className="intro max-w-4xl mx-auto text-center font-orbitron space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest">
            Shop By Category <span className="text-primary">//</span>
          </h2>
          <p className="text-base md:text-xl font-bold text-white tracking-wide">
            Unleash your inner hero or villain at our shop. Dive into the X-Man
            collection, assemble with the Avengers, and embrace the Super
            Villains. Explore a universe of action figures and collectibles,
            where epic battles and captivating stories come to life. Join the
            adventure and discover the extraordinary world of Marvel's X-Men,
            Avengers, and Super Villains.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center py-10">
          <button
            onClick={() => handleActiveCategory("X-Man")}
            className={`btn ${
              activeCategory === "X-Man"
                ? "btn-primary text-black"
                : "btn-accent text-white"
            } font-orbitron text-xl rounded-none`}
          >
            X-Man
          </button>
          <button
            onClick={() => handleActiveCategory("Avengers")}
            className={`btn ${
              activeCategory === "Avengers"
                ? "btn-primary text-black"
                : "btn-accent text-white"
            } font-orbitron text-xl rounded-none`}
          >
            Avengers
          </button>
          <button
            onClick={() => handleActiveCategory("Super Villain")}
            className={`btn ${
              activeCategory === "Super Villain"
                ? "btn-primary text-black"
                : "btn-accent text-white"
            } font-orbitron text-xl rounded-none`}
          >
            Super Villain
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toys.map((toy) => (
            <ToyCard key={toy._id} toy={toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTab;
