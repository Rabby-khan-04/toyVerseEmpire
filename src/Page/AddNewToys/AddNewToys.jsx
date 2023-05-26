import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { useTitle } from "../../hooks/useTitle";

const AddNewToys = () => {
  useTitle("Add New Toy");
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Form Onsubmit function
  const onSubmit = (data) => {
    const toyName = data.toyName;
    const category = data.category;
    const price = data.price;
    const quantity = data.quantity;
    const rating = data.rating;
    const image = data.image;
    const sellerName = data.sellerName;
    const sellerEmail = user?.email;
    const description = data.description;
    const toyInfo = {
      image,
      toyName,
      price,
      rating,
      sellerName,
      category,
      quantity,
      description,
      sellerEmail,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add a new toy?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Do!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(toyInfo);
        fetch(`http://localhost:3000/toy`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(toyInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                title: "Done!",
                text: "Successfully Add A New Toy",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      }
    });
  };

  return (
    <section className="py-20">
      <div className="container space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white tracking-widest text-center font-orbitron">
            Add A New Toy <span className="text-primary">//</span>
          </h2>
        </div>
        <div className="mx-auto p-8 border border-primary rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-5">
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="text"
                placeholder="Toy Name"
                {...register("toyName")}
              />

              <select
                className="select select-bordered select-accent w-full font-orbitron font-bold"
                {...register("category")}
                defaultValue={"Select Category"}
              >
                <option className="font-orbitron" value="X-Man">
                  X-Man
                </option>
                <option className="font-orbitron" value="Avengers">
                  Avengers
                </option>
                <option className="font-orbitron" value="Super Villain">
                  Super Villain
                </option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="text"
                placeholder="Price"
                {...register("price")}
              />
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="text"
                placeholder="Quantity"
                {...register("quantity")}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="text"
                placeholder="Rating"
                {...register("rating")}
              />
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="url"
                placeholder="Image URL"
                {...register("image")}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="text"
                defaultValue={user.displayName ? user.displayName : ""}
                placeholder="Seller Name"
                {...register("sellerName")}
              />
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="email"
                defaultValue={user.email ? user.email : ""}
                readOnly
                placeholder="Seller Email"
                {...register("sellerEmail")}
              />
            </div>

            <textarea
              className="input input-bordered input-accent w-full h-40 font-orbitron font-bold"
              {...register("description")}
            ></textarea>

            <input
              type="submit"
              className="btn btn-primary btn-block text-xl text-black font-orbitron font-bold"
              value={"ADD A NEW TOY"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddNewToys;
