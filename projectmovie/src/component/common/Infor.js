import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateInfo from "./UpdateInfo";

export default function Infor() {
  const { thongTinND } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch()
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Email</label>l <p>{thongTinND.email}</p>
        </div>
        <div className="col-md-6">
          <label className="form-label">Họ tên</label>
          <p>{thongTinND.hoTen}</p>
        </div>
        <div className="col-md-6">
          <label className="form-label">Số điện thoại</label>
          <p>{thongTinND.soDT}</p>
        </div>
        <div className="col-md-6">
          <label className="form-label">Tài khoản</label>
          <p>{thongTinND.taiKhoan}</p>
        </div>

        <div className="col-12 w-50 m-auto">
          <button  
          // data-bs-toggle="modal"
          //   data-bs-target="#exampleModal"
             type="button" className="btn btn-primary"
             onClick={()=>{
              dispatch({
                type: "OPEN_MODAL",
                Component: <UpdateInfo />,
                id: "Cập Nhập Thông Tin Người Dùng",
              });
             }}>
            Sửa thông tin
          </button>
        </div>
      </form>
    </div>
  );
}
