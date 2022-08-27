import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const PrivateRoutes = ({children}) => {
  const { auth, cookies } = useContext(AppContext);
  if (!auth) {
    return <Navigate to={"/login"} />;
  }
  if(cookies.dat_token != ""){
    return children
  }
  return children;
};

export default PrivateRoutes;
