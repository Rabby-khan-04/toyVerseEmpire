import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./ToyDetails.css";
import ToyCard from "../Shared/ToyCard/ToyCard";
import { useTitle } from "../../hooks/useTitle";
import Spinner from "../../components/Spinner/Spinner";

const ToyDetails = () => {
  const [relatedToys, setRelatedToys] = useState([]);
  const toy = useLoaderData();
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#fade4b",
    inactiveFillColor: "#48494a",
  };
  const {
    _id,
    category,
    description,
    image,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    toyName,
  } = toy || {};

  useTitle(`Toy - ${toyName}`);

  // Loading State Condition
  const navigation = useNavigation();
  if (navigation?.state === "loading") {
    return <Spinner />;
  }

  useEffect(() => {
    fetch(`http://localhost:3000/toys?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedToys(data);
      });
  }, []);

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="font-orbitron text-white">
            <div className="flex justify-end mb-2">
              <FaRegHeart className=" hover:text-primary cursor-pointer" />
            </div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold ">{toyName}</h2>
              <p className="text-xl">$ {price}</p>
            </div>
            <div className="flex items-center gap-2">
              <Rating
                style={{ maxWidth: 120 }}
                value={rating}
                readOnly
                itemStyles={myStyles}
              />
              <p className="text-xl">{rating} Star Rating</p>
            </div>
            <div className="py-4 px-5 text-center add__cart_box my-6 space-y-4">
              <p className="text-xs uppercase text-primary tracking-widest">
                Ready to ship today*
              </p>
              <button className="btn btn-block btn-primary text-xl font-bold tracking-widest">
                Add To Cart - ${price}
              </button>
              <p className="text-xs uppercase text-white tracking-widest">
                Limit Of 1 Per Person.
              </p>
            </div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold tracking-widest uppercase">
                About
              </h2>
              <div className="h-px bg-accent my-2"></div>
              <p className="tracking-wider text-xl">{description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-widest upp">
                DETAILS
              </h2>
              <div className="h-px bg-accent my-2"></div>
              <div className="space-y-2 font-bold">
                <p className="tracking-wider text-xl">Category : {category}</p>
                <p className="tracking-wider text-xl">Quantity : {quantity}</p>
                <p className="tracking-wider text-xl">
                  Seller Name : {sellerName}
                </p>
                <p className="tracking-wider text-xl">
                  Seller Email : {sellerEmail}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <h2 className="text-3xl font-bold font-orbitron tracking-wider text-white text-center">
            Related Toys <span className="text-primary">//</span>
          </h2>
          <div className="grid grid-cols-4 gap-6 mt-16">
            {relatedToys.map((toy) => (
              <ToyCard key={toy._id} toy={toy} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetails;
