import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";

import {
  capNhapND,
  layDanhSachNguoiDungAdmin,
} from "../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung";
import { GROUP_ID } from "../../util/setting";

export default function UpdateInfo() {
  const { thongTinND } = useSelector((state) => state.UserReducer);
  const { danhSachND } = useSelector((state) => state.UserReducer);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachNguoiDungAdmin());
  }, []);

  const taoDSNDEmail = danhSachND?.map((nd) => {
    if(thongTinND?.email!==nd.email)
    return nd.email;
  });


  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: GROUP_ID,
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string(),
      matKhau: Yup.string().required("Mật khẩu không được để trống"),
      email: Yup.string()
        .required("Email khong duoc de trong")
        .email("Email ko đúng định dạng email")
        .notOneOf(taoDSNDEmail, "Email đã được sử dụng"),
      soDT: Yup.string().required("Số điện thoai khong duoc de trong"),
      //matches : kiểm tra biểu thức
      hoTen: Yup.string()
        .required("Họ Tên khong duoc de trong")
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          "Tên chỉ có ký tự chữ hoy"
        ),
    }),
    onSubmit: (values) => {
      let action = capNhapND(values);
      dispatch(action);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label>Tai khoan</label>
          <input
            disabled
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="taiKhoan"
            className="form-control"
            defaultValue={thongTinND.taiKhoan}
          />
          {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
            <div className="alert alert-danger">{formik.errors.taiKhoan}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label>Mat khau</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            name="matKhau"
            className="form-control"
            defaultValue={thongTinND.matKhau}
          />
          {formik.touched.matKhau && formik.errors.matKhau ? (
            <div className="alert alert-danger">{formik.errors.matKhau}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="email"
            className="form-control"
            defaultValue={thongTinND.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label>Sdt </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="soDT"
            className="form-control"
            defaultValue={thongTinND.soDT}
          />
          {formik.touched.soDT && formik.errors.soDT ? (
            <div className="alert alert-danger">{formik.errors.soDT}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label>Ho Ten </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="hoTen"
            className="form-control"
            defaultValue={thongTinND.hoTen}
          />
          {formik.touched.hoTen && formik.errors.hoTen ? (
            <div className="alert alert-danger">{formik.errors.hoTen}</div>
          ) : null}
        </div>

        <button
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          type="submit"
          className="btn btn-primary"
        >
          Cập Nhập
        </button>
        <button
          data-bs-dismiss="modal"
          aria-label="Close"
          className="btn btn-outline-danger my-2"
        >
          Hủy Cập Nhập
        </button>
      </form>
    </div>
  );
}
