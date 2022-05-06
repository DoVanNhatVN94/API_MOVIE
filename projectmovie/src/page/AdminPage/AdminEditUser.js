import React, { Fragment, useEffect, useState } from 'react';
import { GROUP_ID } from '../../util/setting';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { capNhatNguoiDungAD, dangKy, layThongTinNguoiDungAD } from '../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung';

import {
    Form,
    Input,
    Select,
} from 'antd';

const { Option } = Select;

export default function AdminEditUser(props) {
    const [componentSize, setComponentSize] = useState('default');
    const { thongTinNDAdmin } = useSelector(state => state.UserReducer);
    console.log(thongTinNDAdmin);
    let dispatch = useDispatch()

    useEffect(() => {
        let { id } = props.match.params
        dispatch(layThongTinNguoiDungAD(id))
    }, []);

    const formik = useFormik({
        enableReinitialize: true,

        initialValues: {
            taiKhoan: thongTinNDAdmin.taiKhoan,
            matKhau: thongTinNDAdmin.matKhau,
            hoTen: thongTinNDAdmin.hoTen,
            email: thongTinNDAdmin.email,
            soDt: thongTinNDAdmin.soDT,
            maNhom: GROUP_ID,
            maLoaiNguoiDung: thongTinNDAdmin.maLoaiNguoiDung
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Tai khoan khong duoc de trong").max(15, "Tài khoản ko quá 15 ky tự").min(3, "Tài khoản tối thiểu 3 ký tự").trim('ko de khoảng trang'),
            matKhau: Yup.string().required("Tai khoan khong duoc de trong"),
            email: Yup.string().required("Tai khoan khong duoc de trong").email("ko đúng email"),
            soDt: Yup.string().required("Tai khoan khong duoc de trong"),
            hoTen: Yup.string().required("Tai khoan khong duoc de trong").matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, "Tên chỉ có ký tự chữ hoy"),

        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(capNhatNguoiDungAD(values))
        }
    })

    const handleChangeSelect = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <Fragment>
            <h2 className='mb-4'>Thêm phim mới</h2>
            <Form onSubmitCapture={formik.handleSubmit}
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
                <Form.Item label="Tài khoản">
                    <Input name='taiKhoan' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.taiKhoan} disabled />
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    <Input name='matKhau' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau}/>
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                        <div className="alert alert-danger">{formik.errors.matKhau}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Nhập lại mật khẩu">
                    <Input name='matKhau' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau}/>
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                        <div className="alert alert-danger">{formik.errors.matKhau}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Họ tên">
                    <Input name='hoTen' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.hoTen}/>
                    {formik.touched.hoTen && formik.errors.hoTen ? (
                        <div className="alert alert-danger">{formik.errors.hoTen}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Email">
                    <Input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                    {formik.touched.email && formik.errors.email ? (
                        <div className="alert alert-danger">{formik.errors.email}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input name='soDt' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.soDt}/>
                    {formik.touched.soDt && formik.errors.soDt ? (
                        <div className="alert alert-danger">{formik.errors.soDt}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Loại người dùng" >
                    <Select style={{ width: 120 }} onChange={handleChangeSelect} value={formik.values.maLoaiNguoiDung}>
                        <Option value="KhachHang">Khách hàng</Option>
                        <Option value="QuanTri">Quản trị viên</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type='submit' style={{ width: 135 }} className='btn btn-success' >Cập nhật</button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}
