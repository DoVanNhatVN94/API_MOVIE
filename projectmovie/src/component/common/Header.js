import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "../../page/Login/Login";
import Register from "../../page/Register/Register";

export default function Header() {
  const dispatch = useDispatch();
  const login=()=>{
    const obj ={a:2,b:3}
    const setjson=JSON.stringify(obj);
localStorage.setItem('obj', setjson);
  }
  const kt =()=>{
    const obj=JSON.parse(localStorage.getItem('obj'));
    if(obj.a===2)
    console.log("chinh xav");
    else
    console.log("sai");
  }
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
            <button
              className="btn btn-outline-dark"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                dispatch({
                  type:"OPEN_MODAL",
                  Component: <Login />,
                  handleForm: ()=>{
                    alert("Xử lý khi mở form Login");
                }
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
                  type:"OPEN_MODAL",
                  Component: <Register />,
                  handleForm: ()=>{
                    alert("Xử lý khi mở form Register");
                }
                });
              }}
            >
              <i className="bi-cart-fill me-1" />
              Register
            </button>
            <button onClick={()=>{
              login()
            }}>Dang nhap</button>
            <button onClick={()=>{
              kt()
            }}>kiem tra</button>
            <button onClick={()=>{
              localStorage.clear(); 
            }}>Đăng Xuất</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
