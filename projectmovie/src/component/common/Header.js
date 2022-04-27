import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Login from "../../page/Login/Login";
import Register from "../../page/Register/Register";
import Infor from "./Infor";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { thongTinND } = useSelector((state) => state.UserReducer);



  const checkButtonLogin = () => {
    const check = localStorage.getItem("accessToken");
    if (check == null)
      return (
        <Fragment>
          <button
            className="btn btn-outline-dark"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              dispatch({
                type: "OPEN_MODAL",
                Component: <Login />,
                id:'Login'
              });
            }}
          >
            <i className="bi-cart-fill me-1" />
            Login
          </button>
          <button
            className="btn btn-outline-dark"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              dispatch({
                type: "OPEN_MODAL",
                Component: <Register />,
                id:'Register'
              });
            }}
          >
            <i className="bi-cart-fill me-1" />
            Register
          </button>
        </Fragment>
      );
    else
      return (
        <Fragment>
          <button className="btn btn-outline-primary"
           type="button"
           data-bs-toggle="modal"
           data-bs-target="#exampleModal"
           onClick={() => {
            dispatch({
              type: "OPEN_MODAL",
              Component: <Infor/>,
              id:'Thông Tin Tài Khoản'
            });
          }}
          >{thongTinND.hoTen}</button>
          <button className="btn btn-outline-danger"
            onClick={() => {
              localStorage.clear();
              history.push("/");
            }}
          >
            Đăng Xuất
          </button>
        </Fragment>
      );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-4 px-lg-5">
        <NavLink
          activeClassName="myActive"
          className="navbar-brand w-25"
          to="/"
        >
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
        <div
          className="collapse navbar-collapse w-75"
          id="navbarSupportedContent"
        >
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
          </ul>
          <form className="d-flex w-25 justify-content-center">
            {checkButtonLogin()}
          </form>
        </div>
      </div>
    </nav>
  );
}
