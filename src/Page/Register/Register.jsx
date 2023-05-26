import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useTitle } from "../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser, auth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo;
    if (!email || !password) {
      Swal.fire({
        title: "Faild to login!",
        text: "Must fill email and password input field",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Successfully Register!",
          text: "You have successfully Register",
          icon: "success",
          confirmButtonText: "Cool",
        });
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            navigate(from, { replace: true });
          })
          .catch((error) => {
            Swal.fire({
              title: "Faild to update user profile!",
              text: error.message,
              icon: "error",
              confirmButtonText: "Close",
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Faild to sign up!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto border border-primary p-10 rounded-2xl text-center space-y-8">
          <div>
            <Link
              to="/"
              className=" text-3xl font-bold text-white font-orbitron"
            >
              T<span className="text-primary">V</span>E
            </Link>
            <p className="text-xl font-orbitron font-bold text-white mt-3">
              Welcome To Toy<span className="text-primary">Verse</span>Empire
            </p>
          </div>

          <div>
            <SocialLogin />
          </div>

          <div className="divider">
            <p className="text-base text-white font-orbitron font-bold">
              OR REGISTER WITH EMAIL
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              className="input input-bordered input-accent w-full font-orbitron font-bold"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="input input-bordered input-accent w-full font-orbitron font-bold"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <input
              className="input input-bordered input-accent w-full font-orbitron font-bold"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <input
              className="input input-bordered input-accent w-full font-orbitron font-bold"
              placeholder="Photo URL"
              type="url"
              {...register("photo")}
            />

            <input
              type="submit"
              className="btn btn-primary btn-block text-xl text-black font-orbitron font-bold"
              value={"Register"}
            />
          </form>
          <div className="divider">
            <Link
              to="/login"
              className="text-base text-white hover:text-primary transition-all duration-300 font-orbitron font-bold"
            >
              OR SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
