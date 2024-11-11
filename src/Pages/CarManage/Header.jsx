import React, { useState, useEffect } from "react";
import HeaderImg from "../../assets/images/banner/Group 2.png";
import HeaderLock from "../../assets/images/banner/Vector (2).png";
import HeaderLove from "../../assets/images/team/Group 3.png";
import HeaderContact from "../../assets/images/team/Group 2 (1).png";
import HeaderSearch from "../../assets/images/banner/Frame (4).png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar py-10">
      {/* Navbar start - logo and dropdown */}
      <div className="navbar-start">
        <div className="dropdown relative">
          <label
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
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
          {dropdownOpen && (
            <ul
              className="menu menu-sm dropdown-content bg-black text-white  rounded-box z-[1] mt-3 w-52 p-2"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      isActive ? "bg-[#FF3811] text-white" : "text-white"
                    } hover:bg-[#FF5722] hover:text-white rounded-md`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/CarDetails"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      isActive ? "bg-[#FF3811] text-white" : "text-white"
                    } hover:bg-[#FF5722] hover:text-white rounded-md`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Service"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      isActive ? "bg-[#FF3811] text-white" : "text-white"
                    } hover:bg-[#FF5722] hover:text-white rounded-md`
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/NewService"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      isActive ? "bg-[#FF3811] text-white" : "text-white"
                    } hover:bg-[#FF5722] hover:text-white rounded-md`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/CheckOut"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      isActive ? "bg-[#FF3811] text-white" : "text-white"
                    } hover:bg-[#FF5722] hover:text-white rounded-md`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <img className="w-[107px] h-[86px]" src={HeaderImg} alt="Logo" />
      </div>

      {/* Navbar center - links for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase font-semibold text-lg text-[#444444]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? "text-[#FF3811]" : "text-[#444444]"} hover:text-[#FF5722]`
              }
            >
              Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/CarDetails"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? "text-[#FF3811]" : "text-[#444444]"} hover:text-[#FF5722]`
              }
            >
              Order Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Service"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? "text-[#FF3811]" : "text-[#444444]"} hover:text-[#FF5722]`
              }
            >
              Manage Inventory
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar end - icons and button */}
      <div className="navbar-end">
        <NavLink to="/SignUp" className="text-2xl flex items-center space-x-2">
          <img src={HeaderContact} alt="" />
        </NavLink>
        <NavLink to="/Login" className="text-2xl flex items-center space-x-2 mx-6">
          <img src={HeaderSearch} alt="" />
        </NavLink>
        <NavLink to="/CarDetails" className="text-2xl flex items-center space-x-2">
          <img src={HeaderLove} alt="" />
        </NavLink>
        <NavLink to="/CarManage" className="text-2xl flex items-center space-x-2 pl-6">
          <img src={HeaderLock} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
