import React, { useEffect, useState } from "react";
import ToyRow from "./ToyRow";
import { useTitle } from "../../hooks/useTitle";
import { useNavigation } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { useForm } from "react-hook-form";

const AllToys = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [toys, setToys] = useState([]);

  useTitle("All Toys");

  // Load Data using search
  useEffect(() => {
    fetch(`http://localhost:3000/all-toys?search=${searchTxt}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [searchTxt]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const searchStr = data.searchTxt;
    setSearchTxt(searchStr);
  };

  return (
    <section className="py-20">
      <div className="container space-y-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-orbitron text-center font-bold text-white tracking-widest">
            Search All Toys
            <span className="text-primary">//</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex">
              <input
                className="input input-bordered input-primary w-full font-orbitron font-bold rounded-l-full"
                type="text"
                placeholder="Search Toys..."
                {...register("searchTxt")}
              />
              <input
                type="submit"
                className="btn btn-primary text-xl text-black font-orbitron font-bold rounded-r-full"
                value={"Search"}
              />
            </div>
          </form>
        </div>
        <table className="w-full border-collapse text-white data__table overflow-hidden rounded-xl">
          {/* head*/}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToyRow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllToys;
