import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { dangNhap } from "../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung";

export default function Login(props) {
  let [user, setUserAccount] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const hanleInput = (event) => {
    let { value, name } = event.target;

    setUserAccount({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if(user.username ==="cyber"){
    //đăng nhap thành công
    // Home1 -> Login push Home2
    // => back tro lai Login
    // props.history.push("/home");

    //Home1 -> Login replace Home2
    //=> back tro lai Home1
    //     history.replace("/home");
    // }else{

    //   alert("Tài khoản không đúng")
    // }

    dispatch(dangNhap(user));
    history.push("/home");
  };

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">UserName</label>
          <input
            onChange={(event) => {
              hanleInput(event);
            }}
            name="taiKhoan"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(event) => {
              hanleInput(event);
            }}
            name="matKhau"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className=" row">
          <button type="submit" className="btn btn-primary col-md-6 col-12 w-25 mx-auto" data-bs-dismiss="modal"
              aria-label="Close">
            Login
          </button>

          <button
            onClick={() => {
              history.goBack();
            }}
            type="button"
            className="btn btn-primary col-md-6 col-12 w-25 mx-auto"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}
