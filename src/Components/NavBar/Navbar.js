import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='flex justify-center bg-black text-white text-xl py-4 mx-6 rounded-lg '>
      <nav>
        <NavLink exact to='/home' className='mx-6 hover:text-orange-300'>
          Home
        </NavLink>
        {/* <NavLink to='/' className='mx-6 hover:text-orange-300'>
          Home
        </NavLink> */}
        <NavLink exact to='/about' className='mx-6 hover:text-orange-300'>
          About
        </NavLink>
        <NavLink exact to='/card' className='mx-6 hover:text-orange-300'>
          Card
        </NavLink>
        <NavLink exact to='/banner' className='mx-6 hover:text-orange-300'>
          Banner
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
