import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import { useTitle } from "../../hooks/useTitle";
import Spinner from "../../components/Spinner/Spinner";

const EditToys = () => {
  const toy = useLoaderData();
  const navigate = useNavigate();

  const backToMyToys = () => {
    navigate(-1);
  };
  const {
    _id,
    category,
    description,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    toyName,
  } = toy;

  useTitle(`Edit Toy - ${toyName}`);

  // Loading State Condition
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner />;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Toy Data Edit Function
  const onSubmit = (data) => {
    const toyName = data.toyName;
    const category = data.category;
    const price = data.price;
    const quantity = data.quantity;
    const description = data.description;
    const updatedInfo = {
      toyName,
      category,
      price,
      quantity,
      description,
    };
    console.log(updatedInfo);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the data?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Do!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/toy/${_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Done!",
                text: "Successfully update the toy info",
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
        <div className="space-y-4 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white tracking-widest text-center font-orbitron">
            Edit Toy Details <span className="text-primary">//</span>
          </h2>
          <button
            onClick={backToMyToys}
            className="btn btn-primary font-orbitron font-bold text-black tracking-wider"
          >
            Back To My Toys
          </button>
        </div>
        <div className="mx-auto p-8 border border-primary rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-5">
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="text"
                defaultValue={toyName}
                placeholder="Toy Name"
                {...register("toyName")}
              />
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="text"
                defaultValue={category}
                placeholder="Category"
                {...register("category")}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="text"
                defaultValue={price}
                placeholder="Price"
                {...register("price")}
              />
              <input
                className="input input-bordered input-accent w-full font-orbitron font-bold"
                type="text"
                defaultValue={quantity}
                placeholder="Quantity"
                {...register("quantity")}
              />
            </div>

            <textarea
              className="input input-bordered input-accent w-full h-40 font-orbitron font-bold"
              defaultValue={description}
              {...register("description")}
            ></textarea>

            <input
              type="submit"
              className="btn btn-primary btn-block text-xl text-black font-orbitron font-bold"
              value={"Update Data"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditToys;
