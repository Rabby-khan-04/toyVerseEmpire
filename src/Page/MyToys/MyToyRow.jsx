import React from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyToyRow = ({ toy, handleToyDelete }) => {
  const { _id, image, price, quantity, description, toyName } = toy;

  const navigate = useNavigate();
  const handleToyEdit = (id) => {
    navigate(`/edit-toys/${id}`);
  };

  return (
    <tr className="font-bold tracking-wider">
      <td>
        <img src={image} className="h-20 rounded-md-" alt="" />
      </td>
      <td>{toyName}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td className="space-x-4">
        <button
          onClick={() => handleToyDelete(_id)}
          className="btn btn-sm btn-primary text-black font-orbitron font-bold tracking-wider"
        >
          <FaTrash />
        </button>
        <button
          onClick={() => handleToyEdit(_id)}
          className="btn btn-sm btn-primary text-black font-orbitron font-bold tracking-wider"
        >
          <FaRegEdit />
        </button>
      </td>
    </tr>
  );
};

export default MyToyRow;
