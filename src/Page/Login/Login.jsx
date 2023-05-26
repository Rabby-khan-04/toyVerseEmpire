import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useTitle } from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { userSignIn } = useContext(AuthContext);
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
    const email = data.email;
    const password = data.password;
    if (!email || !password) {
      Swal.fire({
        title: "Faild to login!",
        text: "Must fill email and password input field",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }
    userSignIn(email, password)
      .then((result) => {
        Swal.fire({
          title: "Successfully Login!",
          text: "You have successfully Login",
          icon: "success",
          confirmButtonText: "Cool",
        });
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: "Faild to Login!",
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
              className="text-3xl font-bold text-white font-orbitron"
            >
              T<span className="text-primary">V</span>E
            </Link>
            <p className="text-xl font-orbitron font-bold text-white mt-3">
              Welcome Back To Toy<span className="text-primary">Verse</span>
              Empire
            </p>
          </div>

          <div>
            <SocialLogin />
          </div>

          <div className="divider">
            <p className="text-base text-white font-orbitron font-bold">
              OR LOGIN WITH EMAIL
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              className="input input-bordered input-accent w-full font-orbitron font-bold"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              className="input input-bordered input-accent w-full font-orbitron font-bold"
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />

            <input
              type="submit"
              className="btn btn-primary btn-block text-xl text-black font-orbitron font-bold"
              value={"Login"}
            />
          </form>
          <div className="divider">
            <Link
              to="/register"
              className="text-base text-white hover:text-primary transition-all duration-300 font-orbitron font-bold"
            >
              OR SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
