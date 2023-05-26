import React, { useContext } from "react";
import googleIcon from "../../../assets/icons/google.svg";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        Swal.fire({
          title: "Successfully Login!",
          text: "You have successfully login",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: "Faild to login!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center w-full mt-4 text-white shadow-md bg-neutral hover:bg-accent transition-all duration-300 rounded-full"
      >
        <div className="px-4 py-3">
          <img src={googleIcon} className="h-10" alt="" />
        </div>
        <span className="px-4 py-3 w-5/6 text-center text-white font-orbitron tracking-wide font-bold">
          Sign in with Google
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;
