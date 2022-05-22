import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  // const isAuthenticated = false

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivetRoute;
