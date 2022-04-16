import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink activeClassName="myActive" className="navbar-brand" to="/">
        Navbar
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
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              activeClassName="myActive"
              activeStyle={{ color: "red", background: "yellow" }}
              className="nav-link"
              aria-current="page"
              to="/home"
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
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="myActive"
              activeStyle={{ color: "red", background: "yellow" }}
              className="nav-link"
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="myActive"
              activeStyle={{ color: "red", background: "yellow" }}
              className="nav-link"
              to="/profile"
            >
              Profile
            </NavLink>
          </li><li className="nav-item">
            <NavLink
              activeClassName="myActive"
              activeStyle={{ color: "red", background: "yellow" }}
              className="nav-link"
              to="/hoc"
            >
              HOC
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hook
            </NavLink>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <NavLink className="dropdown-item" to="/userState">
                  UserState
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/userEffect">
                  UserEffect
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/commentApp">
                  CommentApp
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Axios
            </NavLink>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <NavLink className="dropdown-item" to="/axiosrcc">
                  Axios Class Component
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/axiosrfc">
                  Axios Function Component
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/axiosmidleware">
                  AxiosMidleware
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
