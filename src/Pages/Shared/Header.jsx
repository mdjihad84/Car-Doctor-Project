import React, { useState, useEffect } from "react";
import HeaderImg from "../../assets/images/banner/Group 2.png";
import HeaderLock from "../../assets/images/banner/Vector (2).png";
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
    <div className="navbar py-4 sm:py-6 md:py-10">
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
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-40 sm:w-48 p-2 space-y-1"
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
        <img className="w-[80px] sm:w-[90px] h-auto" src={HeaderImg} alt="Logo" />
      </div>

      {/* Navbar center - links for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase font-semibold text-sm sm:text-lg text-[#444444]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? "text-[#FF3811]" : "text-[#444444]"} hover:text-[#FF5722]`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/CarManage"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? "text-[#FF3811]" : "text-[#444444]"} hover:text-[#FF5722]`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Service"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? "text-[#FF3811]" : "text-[#444444]"} hover:text-[#FF5722]`
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/NewService"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? "text-[#FF3811]" : "text-[#444444]"} hover:text-[#FF5722]`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/CheckOut"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? "text-[#FF3811]" : "text-[#444444]"} hover:text-[#FF5722]`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar end - icons and button */}
      <div className="navbar-end flex items-center space-x-2 sm:space-x-4">
        <NavLink to="/SignUp" className="text-xl sm:text-2xl sm:inline-flex items-center space-x-2">
          <img src={HeaderLock} alt="Sign Up Icon" className="w-5 lg:w-6" />
        </NavLink>

        <NavLink to="/Login" className="text-xl sm:text-2xl sm:inline-flex items-center space-x-2 mx-3 mx-6">
          <img src={HeaderSearch} alt="Login Icon" className="w-5 lg:w-6 mx-5" />
        </NavLink>

        <NavLink to="/CarDetails">
          <button className="w-[120px] sm:w-[140px] lg:w-[170px] h-[40px] sm:h-[48px] lg:h-[56px] rounded border border-[#FF3811] text-[#FF3811] bg-transparent hover:bg-[#FF3811] hover:text-white transition-colors text-xs sm:text-sm lg:text-lg font-semibold">
            Appointment
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
