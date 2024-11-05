import HeaderImg from "../../assets/images/banner/Group 2.png"

import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar py-8">
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
            className="menu menu-sm text-black dropdown-content text-white bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Menu" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/SignUp" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <img className="w-[101px] h-[54px]" src={HeaderImg} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 uppercase font-bold text-lg text-black">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Menu" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Shop" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
              Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/SignUp" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
        <div className="navbar-end">
          <i className="fa-regular fa-lock"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <button className="w-[170px] h-[56px] rounded border border-[#FF3811] text-[#FF3811] bg-transparent">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
