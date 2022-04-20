import {useDispatch } from 'react-redux'
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

import { dangKy } from '../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung'
import { GROUP_ID } from '../../util/setting';

export default function Register(props) {
  let dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUP_ID,

      hoTen: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tai khoan khong duoc de trong").max(15,"Tài khoản ko quá 15 ky tự").min(3,"Tài khoản tối thiểu 3 ký tự").trim('ko de khoảng trang'),
      matKhau: Yup.string().required("Tai khoan khong duoc de trong"),
      email: Yup.string().required("Tai khoan khong duoc de trong").email("ko đúng email"),
      soDt: Yup.string().required("Tai khoan khong duoc de trong"),
      //matches : kiểm tra biểu thức
      hoTen: Yup.string().required("Tai khoan khong duoc de trong").matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,"Tên chỉ có ký tự chữ hoy"),
      
    }),
    onSubmit: (values) => {
      console.log({ values });

      let action = dangKy(values)
      dispatch(action)
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label>Sdt </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="soDt"
            className="form-control"
          />
          {formik.touched.soDt && formik.errors.soDt ? (
         <div className="alert alert-danger">{formik.errors.soDt}</div>
       ) : null}
        </div>
        <div className="form-group">
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
