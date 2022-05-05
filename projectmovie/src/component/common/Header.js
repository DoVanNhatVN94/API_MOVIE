import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";

import Login from "../../page/Login/Login";
import Register from "../../page/Register/Register";
import Infor from "./Infor";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { thongTinND } = useSelector((state) => state.UserReducer);
  //  const activeStyle = {color: "black", background: "brown" }

  const checkButtonLogin = () => {
    const check = localStorage.getItem("accessToken");
    if (check == null)
      return (
        <Fragment>
          <button
            className="btn btn-outline-info m-1"
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
            className="btn btn-outline-light m-1" 
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
            {<UserOutlined /> }
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
    <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
      <div className="container-fluid px-4 px-lg-5 m-auto">
        <div className="w-75"></div>
        <div className="w-25 d-flex ">{checkButtonLogin()}</div>
      </div>
    </nav>
  );
}
