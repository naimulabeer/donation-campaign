import { NavLink } from "react-router-dom";
import "./navbar-styles.css";

function Navbar() {
  const links = (
    <nav id="sidebar" className="flex gap-10">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/donation">Donation</NavLink>

      <NavLink to="/statistics">Statistics</NavLink>
    </nav>
  );
  return (
    <div className="navbar bg-base-100 px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="md:w-40 w-auto md:justify-center">
          <img src="/Logo.png" alt="Logo" />
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
      </div>
    </div>
  );
}

export default Navbar;
