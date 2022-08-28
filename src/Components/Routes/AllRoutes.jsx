import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../LoginPage/Login";
import MyAccount from "../LoginPage/MyAccount";
import Register from "../LoginPage/Register";
import ShopAll from "../ShopAll/ShopAll";
import SingleProduct from "../ShopAll/SingleProduct";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/account"
          element={
            <PrivateRoutes>
              <MyAccount />
            </PrivateRoutes>
          }
        />
        <Route path="/shopall" element={<ShopAll />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoutes>
              <Checkout />
            </PrivateRoutes>
          }
        />
        
      </Routes>
    </>
  );
};

export default AllRoutes;
