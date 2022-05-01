import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Modal() {
  const history = useHistory()
  let { Component, id } = useSelector((state) => state.ModalReducer);
  const { message } = useSelector((state) => state.UserReducer);
  const maND = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));
  
  const checkButtonLogin = () => {
    const check = localStorage.getItem("accessToken");
    if (check == null)
      return (
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-outline-primary"
        >
          Đăng Nhập Lại
        </button>
      );
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {id}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              {/* {props.component} */}
              {Component}

              {/* <Component /> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Button trigger modal */}
        {/* <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title text-success"
                  id="staticBackdropLabel"
                >
                  {message}
                </h1>
                {/* <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                /> */}
              </div>
              {/* <div className="modal-body">...</div> */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                  onClick={()=>{
                    console.log(maND=="QuanTri");
                    if(maND=="QuanTri")
                    history.push("/admin")
                    
                  }}
                >
                  Close
                </button>
                {checkButtonLogin()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
