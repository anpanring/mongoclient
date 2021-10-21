import React from "react";
import logo from "../logo.svg";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
const Navbar = () => {
  return (
    <div style={{marginLeft: 20, marginTop: 20, marginBottom: 20, marginRight: 20}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <NavLink className="navbar-brand text-white " to="/" style={{marginLeft: 20}}>
            <img src={logo} width="30" height="30" alt="Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/create">
                Create Record
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
 
export default Navbar;
