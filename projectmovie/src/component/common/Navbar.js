import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-4 px-lg-5">
        <NavLink activeClassName="myActive" className="navbar-brand w-25" to="/">
          API MOVIE
        </NavLink>
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
        <div className="collapse navbar-collapse w-75" id="navbarSupportedContent">
          <ul className="navbar-nav w-75 justify-content-center">
            <li className="nav-item">
              <NavLink
                activeClassName="myActive"
                className="nav-link"
                to="/home"
                activeStyle={{ color: "red", background: "yellow" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="myActive"
                activeStyle={{ color: "red", background: "yellow" }}
                className="nav-link"
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink
                activeClassName="myActive"
                activeStyle={{ color: "red", background: "yellow" }}
                className="nav-link"
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="myActive"
                activeStyle={{ color: "red", background: "yellow" }}
                className="nav-link"
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
            
          </ul>
          <form className="d-flex w-25 justify-content-center">
            <button className="btn btn-outline-dark" type="button">
              <i className="bi-cart-fill me-1" />
              Login
            </button>
            <button className="btn btn-outline-dark" type="button">
              <i className="bi-cart-fill me-1" />
              Register
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
  
}
