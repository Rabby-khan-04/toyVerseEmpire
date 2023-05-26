import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ToyRow = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, category, price, quantity, sellerName, toyName } = toy;

  const navigate = useNavigate();

  const viewToyDetails = (id) => {
    if (!user) {
      Swal.fire({
        title: "Oopsie-daisy!",
        text: "Unlock the toy wonderland! Login for joyful playtime magic. Let's go!",
        icon: "info",
        confirmButtonText: "Cool",
      });
    }
    navigate(`/toy-details/${id}`);
  };

  return (
    <tr className="font-bold tracking-wider">
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>
        <button
          onClick={() => viewToyDetails(_id)}
          className="btn btn-sm btn-primary text-black font-orbitron font-bold tracking-wider"
        >
          View Details
        </button>
      </td>
    </tr>
  );
};

export default ToyRow;
