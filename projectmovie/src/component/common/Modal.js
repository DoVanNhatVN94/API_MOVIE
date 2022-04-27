import React from "react";
import { useSelector } from "react-redux";

export default function Modal() {
  let { Component,id } = useSelector((state) => state.ModalReducer);
  return (
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
  );
}
