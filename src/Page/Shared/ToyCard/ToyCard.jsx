import React, { useContext } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./ToyCard.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, image, toyName, price, rating } = toy || {};

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#fade4b",
    inactiveFillColor: "#48494a",
  };

  const navigate = useNavigate();

  const viewToyDetails = (id) => {
    if (!user) {
      Swal.fire({
        title: "Oopsie-daisy!",
        text: "Unlock the joy! Log in and let's go!!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, please",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/toy-details/${id}`);
        }
      });
    } else {
      navigate(`/toy-details/${id}`);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <div>
        <img
          src={image}
          className="w-full h-72 sm:h-[350px] object-cover object-top"
          alt=""
        />
      </div>
      <div className="bg-neutral px-3 py-7 h-[200px] font-orbitron font-bold text-white space-y-3 details__box flex flex-col justify-between">
        <div>
          <h2 className="text-xl text-center sm:text-left">{toyName}</h2>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
                itemStyles={myStyles}
              />
              <p>{rating}</p>
            </div>
            <p className="tracking-wider">$ {price}</p>
          </div>
        </div>
        <button
          onClick={() => viewToyDetails(_id)}
          className="btn btn-sm btn-primary font-bold tracking-widest text-black"
        >
          View Details
        </button>
        <div className="h-3 w-full bg-black absolute bottom-0 z-10"></div>
      </div>
    </div>
  );
};

export default ToyCard;
