import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";

import Login from "../../page/Login/Login";
import Register from "../../page/Register/Register";
import Infor from "./Infor";

export default function Header() {
  const match = useRouteMatch()
  const dispatch = useDispatch();
  const history = useHistory();
  const { thongTinND } = useSelector((state) => state.UserReducer);

  const checkButtonLogin = () => {
    const check = localStorage.getItem("accessToken");
    if (check == null)
      return (
        <Fragment>
          <button
            className="btn btn-outline-info m-1 "
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              dispatch({
                type: "OPEN_MODAL",
                Component: <Login />,
                id: "Login",
              });
            }}
          >
            <i className="bi-cart-fill me-1" />
            Login
          </button>
          <button
            className="btn btn-outline-dark m-1 "
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              dispatch({
                type: "OPEN_MODAL",
                Component: <Register />,
                id: "Register",
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
          <button
            className="btn btn-outline-info d-flex justify-content-center align-items-center m-1"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              dispatch({
                type: "OPEN_MODAL",
                Component: <Infor />,
                id: "Thông Tin Tài Khoản",
              });
            }}
          >
            {<UserOutlined />}
            {thongTinND.hoTen}
          </button>
          <button
            className="btn btn-outline-danger m-1"
            onClick={() => {
              localStorage.clear();
              history.push("/home");
            }}
          >
            Đăng Xuất
          </button>
        </Fragment>
      );
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-secondary border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">
            API MOVIE CYBERSOFT
          </a>
          <button
            className="navbar-toggler w-25"
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
            <ul className="navbar-nav w-75 m-auto px-3">
              <li className="nav-item">
                <NavLink
                  activeClassName="myActive"
                  activeStyle={{ color: "wheat", border: "2px solid wheat" }}
                  className="nav-link p-3 text-center fs-4"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
            </ul>
            <form className="d-flex w-50 m-auto">
              {match.path==='/login'?"":match.path==='/register'?'': checkButtonLogin()}</form>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
