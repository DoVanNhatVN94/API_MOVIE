import React, { Fragment, useState } from 'react';
import { GROUP_ID } from '../../util/setting';
import { useDispatch } from 'react-redux';
import { themPhimMoi, themPhimUploadHinhAction } from '../../redux/action/QuanLyPhim/ThemPhimMoiAD';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

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
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const AddNew = () => {

    const [componentSize, setComponentSize] = useState('default');
    const [img, setImg] = useState('');
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            maNhom: GROUP_ID,
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            Hot: false,
            danhGia: 0,
            hinhAnh: {}
        },
        onSubmit: (values) => {
            console.log(values);
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('hinhAnh', values.hinhAnh, values.hinhAnh.name);
                }
            }
            // GỌi Api
            dispatch(themPhimUploadHinhAction(formData))
        }
    })

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY')
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    };

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeFile = (event) => {
        let file = event.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/png') {
            let reader = new FileReader();
            // hàm này dùng để đọc file
            reader.readAsDataURL(file);
            // hàm này dùng để load file
            reader.onload = (e) => {
                // console.log(e.target.result);
                setImg(e.target.result)
            }
            formik.setFieldValue('hinhAnh', file)
        }
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
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input name='tenPhim' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('Hot')} />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type='file' onChange={handleChangeFile} accept='image/jpeg,image/gif,image/png' />
                    <br />
                    <img style={{ width: 150, height: 150 }} src={img} alt="..." />
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type='submit' style={{ width: 135 }} className='btn btn-success' >Thêm phim</button>
                </Form.Item>
            </Form>
        </Fragment>
    );
};

export default AddNew;