import React, { useContext } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-black rounded p-5 flex items-center justify-between">
      <div className="text-white">logo</div>
      <div className="flex gap-10 text-xl text-white">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>products</NavLink>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded">Login</button>
    </div>
  );
};

export default Navbar;