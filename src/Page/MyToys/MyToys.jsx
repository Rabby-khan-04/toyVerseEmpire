import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import { Link, useNavigation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import Spinner from "../../components/Spinner/Spinner";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortValue, setSortValue] = useState(1);

  useEffect(() => {
    // Loading my toys data with sort function
    fetch(
      `http://localhost:3000/my-toys?email=${user?.email}&sort=${sortValue}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("toy-access-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user, sortValue]);

  // Toy Deletion function
  const handleToyDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Done",
                text: "Successfully Delete The Toy Data!",
                confirmButtonText: "Cool",
              });
              const remining = toys.filter((toy) => toy._id !== id);
              setToys(remining);
            }
          });
      }
    });
  };

  // Loading State Condition
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner />;
  }

  return (
    <section className="py-20">
      <div className="container">
        {toys.length > 0 ? (
          <>
            <div className="flex justify-end items-center gap-3 mb-7 font-orbitron font-bold text-white tracking-wider">
              <p className="text-xl">Sort Toys By Price:</p>
              <select
                name=""
                className="select select-bordered"
                onChange={(e) => setSortValue(e.target.value)}
                id=""
              >
                <option value="1">Low To High</option>
                <option value="-1">High To Low</option>
              </select>
            </div>
            <table className="w-full border-collapse text-white data__table overflow-hidden rounded-xl">
              {/* head*/}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Toy Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy) => (
                  <MyToyRow
                    key={toy._id}
                    toy={toy}
                    handleToyDelete={handleToyDelete}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="text-center font-orbitron font-bold text-white tracking-wider space-y-4">
            <h2 className="text-2xl">You didn't add any toys yet!!</h2>
            <Link
              className="btn btn-primary btn-sm text-base text-black"
              to="/add-new-toy"
            >
              Add Toy
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyToys;
