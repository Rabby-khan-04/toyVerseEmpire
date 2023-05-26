import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../components/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login" />;
  }
};

export default PrivateRoutes;
