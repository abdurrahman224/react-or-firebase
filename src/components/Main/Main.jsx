import React from "react";
import Home from "../Home/Home";
import { NavLink, Outlet } from "react-router-dom";
import Login from "../Login/Login";

const Main = () => {
  return (
    <div className="flex gap-3 ">
      <NavLink to="/">
        <Home></Home>
      </NavLink>
      <NavLink className='font-bold' to="login">Login</NavLink>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
