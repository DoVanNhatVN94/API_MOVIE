import React, { Fragment } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function () {
  const { isLoading } = useSelector((state) => state.LoadingReducer);

  return (
    <Fragment>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99,
          }}
        >
          <div className=" fs-3 text-white d-flex align-items-center">
            <LoadingOutlined /> <span className="pl-2">Loading</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
