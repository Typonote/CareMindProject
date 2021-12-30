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
          <Link to="/signin" className="DropDown__Link">
            SignIn
          </Link>
          <Link to="/login" className="DropDown__Link">
            LogIn
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
