import React, { useState } from "react";
import { navLinks, form } from "../api/api";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import Logo from '../assets/logo.svg'
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClickNav = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-8">
      <div className="w-full flex items-center justify-between py-4">
        <ul className="flex items-center">
          <img src={Logo} alt="Logo" className="mr-2 mt-2" />
          {navLinks.map((links, index) => (
            <li
              className="hidden md:flex cursor-pointer mt-2 px-3 text-lg text-gray-600 font-semibold"
              key={index}
            >
              {links.label}
            </li>
          ))}
        </ul>
        <ul className="flex items-center">
          {form.map((form, index) => (
            <li
              className={`hidden md:flex cursor-pointer mt-2 px-3 font-semibold ${
                form.signUpForm
                  ? "text-white font-bold bg-cyan-400 rounded-full px-9 py-1"
                  : ""
              }`}
              key={index}
            >
              {form.label}
            </li>
          ))}
        </ul>

        <div onClick={handleClickNav} className="md:hidden z-10 cursor-pointer">
          {!nav ? (
            <BiMenu size={40} className="text-gray-600" />
          ) : (
            <FaTimes size={40} className="text-gray-300" />
          )}
        </div>

        <ul
          className={`${
            nav
              ? "flex justify-center items-center flex-col fixed left-0 top-0 w-full h-full bg-[#1a0f26] ease-in-out duration-500 transition-all"
              : "flex justify-center items-center flex-col fixed left-full top-0 w-full h-full bg-[#1a0f26] ease-in-out duration-500 transition-all"
          } md:hidden`}
        >
          {navLinks.map((links, index) => (
            <li
              className="py-5 text-white text-lg font-semibold cursor-pointer"
              key={index}
            >
              {links.label}

              <hr />
            </li>
          ))}
          {form.map((form, index) => (
            <li
              className={`cursor-pointer text-white mt-3 px-3 font-bold ${
                form.signUpForm
                  ? "text-white font-bold bg-cyan-400 rounded-full px-9 py-1"
                  : ""
              }`}
              key={index}
            >
              {form.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
