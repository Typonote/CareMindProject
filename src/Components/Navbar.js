import React from "react";
import "Components/scss/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav className="Navbar__Container" role="navigation">
      <Link to="/" className="Nav__Logo">
        Afoter
      </Link>

      <div className="Hamburger__Button" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="Nav__Menu">
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/signin" style={{ marginRight: "1rem" }}>
          SignIn
        </Link>
        <Link to="/login" style={{ marginRight: "1rem" }}>
          LogIn
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
