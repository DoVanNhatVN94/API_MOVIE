/** @format */

import React, { Fragment, useEffect, useState } from "react";
import { GROUP_ID } from "../../util/setting";
import { useDispatch, useSelector } from "react-redux";
import {
  themPhimMoi,
  themPhimUploadHinhAction,
} from "../../redux/action/QuanLyPhim/ThemPhimMoiAD";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import {
  capNhatPhimUploadAction,
  thongTinPhimAction,
} from "../../redux/action/QuanLyPhim/QuanLyPhimAD";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const AdminEditFilm = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const [img, setImg] = useState("");
  const { thongTinPhimAD } = useSelector((state) => state.ListMovieReducer);
  console.log(thongTinPhimAD);
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(thongTinPhimAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      maPhim: thongTinPhimAD.maPhim,
      tenPhim: thongTinPhimAD.tenPhim,
      trailer: thongTinPhimAD.trailer,
      moTa: thongTinPhimAD.moTa,
      maNhom: GROUP_ID,
      ngayKhoiChieu: thongTinPhimAD.ngayKhoiChieu,
      dangChieu: thongTinPhimAD.dangChieu,
      sapChieu: thongTinPhimAD.sapChieu,
      hot: thongTinPhimAD.hot,
      danhGia: thongTinPhimAD.danhGia,
      hinhAnh: null,
    },
    validationSchema: Yup.object({
      tenPhim: Yup.string().required("Tài khoản không được để trống").trim(),
      trailer: Yup.string().required("Trailer không được để trống").trim(),
      moTa: Yup.string().required("Mô tả không được để trống").trim(),
      ngayKhoiChieu: Yup.string().required(
        "Ngày khởi chiếu không được để trống"
      ),
    }),
    onSubmit: (values) => {
      // console.log(values);
      // values.maNhom = GROUP_ID;
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("hinhAnh", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      // GỌi Api
      dispatch(capNhatPhimUploadAction(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (event) => {
    let file = event.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      await formik.setFieldValue("hinhAnh", file);
      let reader = new FileReader();
      // hàm này dùng để đọc file
      reader.readAsDataURL(file);
      // hàm này dùng để load file
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImg(e.target.result);
      };
    }
  };

  const dateFormat = "DD/MM/YYYY";

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Fragment>
      <h2 className="mb-4">Thêm phim mới</h2>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tenPhim}
          />
          {formik.touched.tenPhim && formik.errors.tenPhim ? (
            <p className="alert alert-danger">{formik.errors.tenPhim}</p>
          ) : null}
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.trailer}
          />
          {formik.touched.trailer && formik.errors.trailer ? (
            <p className="alert alert-danger">{formik.errors.trailer}</p>
          ) : null}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.moTa}
          />
          {formik.touched.moTa && formik.errors.moTa ? (
            <p className="alert alert-danger">{formik.errors.moTa}</p>
          ) : null}
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format={dateFormat}
            onChange={handleChangeDatePicker}
            onBlur={formik.handleBlur}
            value={moment(formik.values.ngayKhoiChieu)}
          />
          {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu ? (
            <p className="alert alert-danger">{formik.errors.ngayKhoiChieu}</p>
          ) : null}
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch
            style={{ width: 20 }}
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch
            style={{ width: 20 }}
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            style={{ width: 20 }}
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            value={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/jpeg,image/gif,image/png"
          />
          <br />
          <img
            style={{ width: 150, height: 150 }}
            src={img === "" ? thongTinPhimAD.hinhAnh : img}
            alt="..."
          />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button
            type="submit"
            style={{ width: 135 }}
            className="btn btn-success"
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default AdminEditFilm;
