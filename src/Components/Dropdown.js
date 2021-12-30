import React from "react";
import { Link } from "react-router-dom";
import "Components/scss/Dropdown.scss";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <>
      {isOpen ? (
        <div className="DropDown__Container" onClick={toggle}>
          <Link to="/" className="DropDown__Link">
            Home
          </Link>
          <Link to="/list" className="DropDown__Link">
            List
          </Link>
          <Link to="/login" className="DropDown__Link">
            Login
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
