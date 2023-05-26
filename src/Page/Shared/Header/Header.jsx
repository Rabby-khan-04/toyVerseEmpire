import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignout = () => {
    userSignOut()
      .then(() => {
        Swal.fire({
          title: "User logout successfully!",
          text: "You have logged out successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        localStorage.removeItem("toy-access-token");
      })
      .catch((error) => {
        Swal.fire({
          title: "Faild to logout!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };
  const navItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          to="/toys"
        >
          All Toys
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-primary" : "")}
              to="/my-toys"
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-primary" : "")}
              to="/add-new-toy"
            >
              Add New Toy
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="navbar bg-base-100 py-5">
      <nav className="navbar-start">
        <Link className="text-sxl md:text-3xl font-bold text-white font-orbitron">
          Toy<span className="text-primary">Verse</span>Empire
        </Link>
      </nav>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-orbitron tracking-wider font-bold">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {user?.photoURL && (
          <img
            src={user.photoURL}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user?.displayName}
            className="h-8 sm:h-12 rounded-full"
            alt=""
          />
        )}
        {user ? (
          <button
            onClick={handleSignout}
            className="btn btn-primary btn-sm sm:btn-md font-orbitron font-bold text-black"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary font-orbitron font-bold text-black"
          >
            Login
          </Link>
        )}
        <div className="dropdown dropdown-left">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white font-orbitron tracking-wider font-bold"
          >
            {navItem}
          </ul>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </header>
  );
};

export default Header;
