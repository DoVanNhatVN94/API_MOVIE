import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useLayoutEffect } from "react";

import { dangKy } from "../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung";
import { GROUP_ID } from "../../util/setting";
import {layDanhSachNguoiDungAdmin} from "../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung"



export default function Register() {
  let dispatch = useDispatch();

  let {danhSachND} = useSelector(state=>state.UserReducer)

  const taoDSNDEmail = danhSachND?.map(nd=>{
    return nd.email
  })
  console.log(taoDSNDEmail);
   const taoDSNDTaiKhoan = danhSachND?.map(nd=>{
    return nd.taiKhoan
  })
  console.log(taoDSNDTaiKhoan);
  useEffect(()=>{
    dispatch(layDanhSachNguoiDungAdmin())
  },[])

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: GROUP_ID,

      hoTen: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .required("Tai khoản không được để trống")
        .max(15, "Tài khoản không quá 15 ký tự")
        .min(3, "Tài khoản tối thiểu 3 ký tự")
        .trim("Tài khoản không được chứa khoảng trắng")
        .notOneOf(taoDSNDTaiKhoan,"Tài khoản này đã được sử dụng")
        ,
      matKhau: Yup.string().required("Mật khẩu không được để trống"),
      email: Yup.string()
        .required("Email khong duoc de trong")
        .email("Email ko đúng định dạng email")
        .notOneOf(taoDSNDEmail,"Email đã được sử dụng"),
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
      let action = dangKy(values);
      dispatch(action);
    },
  });
 

  return (
    <div>
      <form id="myForm" onSubmit={formik.handleSubmit} >
        <div className="mb-3">
          <label>Tai khoan</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="taiKhoan"
            className="form-control"
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
          />
          {formik.touched.hoTen && formik.errors.hoTen ? (
            <div className="alert alert-danger">{formik.errors.hoTen}</div>
          ) : null}
        </div>

        <button 
         type="submit" className="btn btn-primary">
          Dăng Ký
        </button>
      </form>
      
    </div>
  );
}