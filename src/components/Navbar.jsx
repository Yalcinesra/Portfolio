import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "../assets/esrayalcin.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark  ">
      <div className="container-fluid justify-content-between">
        <span className="navbar-brand text-white "><img src={logo} alt="" width="100px"/></span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/new-project">
                New Project
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="project">
                Project List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
             Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
             About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar