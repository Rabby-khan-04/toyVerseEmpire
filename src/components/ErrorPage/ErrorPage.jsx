import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/image/error__image.png";

const ErrorPage = () => {
  // Router Error
  const error = useRouteError();
  const { status, statusText, data } = error;
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <img src={errorImg} className="h-96" alt="" />
          <h2 className="text-3xl font-orbitron font-bold text-white">
            <span className="text-primary">{status || "404"}</span> - Page{" "}
            {statusText || "Not Found"}
          </h2>
          <p className="text-xl font-orbitron font-bold text-white">{data}</p>
          <Link
            to="/"
            className="btn btn-primary font-orbitron font-bold text-xl text-black"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
