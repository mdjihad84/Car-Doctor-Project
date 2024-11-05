import HeaderImg from "../../assets/images/banner/Group 2.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-white bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'bg-[#FF3811] text-white' : 'text-black'} hover:bg-[#FF5722] hover:text-white rounded-md`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Menu"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'bg-[#FF3811] text-white' : 'text-black'} hover:bg-[#FF5722] hover:text-white rounded-md`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Shop"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'bg-[#FF3811] text-white' : 'text-black'} hover:bg-[#FF5722] hover:text-white rounded-md`
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/SignUp"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'bg-[#FF3811] text-white' : 'text-black'} hover:bg-[#FF5722] hover:text-white rounded-md`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'bg-[#FF3811] text-white' : 'text-black'} hover:bg-[#FF5722] hover:text-white rounded-md`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <img className="w-[101px] h-[54px]" src={HeaderImg} alt="Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase font-semibold text-lg text-[#444444]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? 'text-[#FF3811]' : 'text-[#444444]'} hover:text-[#FF5722]`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Menu"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? 'text-[#FF3811]' : 'text-[#444444]'} hover:text-[#FF5722]`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Shop"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? 'text-[#FF3811]' : 'text-[#444444]'} hover:text-[#FF5722]`
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SignUp"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? 'text-[#FF3811]' : 'text-[#444444]'} hover:text-[#FF5722]`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? 'text-[#FF3811]' : 'text-[#444444]'} hover:text-[#FF5722]`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <i className="fa-solid fa-lock text-2xl"></i>
        <i className="fa-solid fa-magnifying-glass text-2xl mx-8"></i>
        <button className="w-[170px] h-[56px] rounded border border-[#FF3811] text-[#FF3811] bg-transparent hover:bg-[#FF3811] hover:text-white transition-colors">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;


