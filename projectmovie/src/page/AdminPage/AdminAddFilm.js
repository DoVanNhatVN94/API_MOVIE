import React, { Fragment, useState } from 'react';
import { GROUP_ID } from '../../util/setting';
import { useDispatch } from 'react-redux'; 
import { themPhimMoi } from '../../redux/action/QuanLyPhim/ThemPhimMoiAD';
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

const FormSizeDemo = () => {

    let dispatch = useDispatch();

    const [componentSize, setComponentSize] = useState('default');
    const [user, setUserAccount] = useState({
        maNhom:GROUP_ID,
        SapChieu: false,
        DangChieu: false,
        Hot: false,
        danhGia: 0
    });
    console.log(user)

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    function onChange(event) {
        console.log(event)
        let { name } = event.target;

        setUserAccount({
            ...user,
            [name]: event.target.checked
        })
    }

    const handleInput = (event) => {
        let { value, name } = event.target;

        setUserAccount({
            ...user,
            [name]: value
        })
    }

    const addNewMovie = (values) => {
        let action = themPhimMoi(values);
        dispatch(action)
    }

    return (
        <Fragment>
            <h2 className='mb-5'>Thêm phim mới</h2>
            <Form
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
                    <Input name='tenPhim' onChange={(event) => {
                        handleInput(event)
                    }} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name='trailer' onChange={(event) => {
                        handleInput(event)
                    }} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={(event) => {
                        handleInput(event)
                    }} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <Input name='ngayKhoiChieu' onChange={(event) => {
                        handleInput(event)
                    }} />
                </Form.Item>
                <Form.Item label="Sắp chiếu">
                    <Checkbox name='SapChieu' onChange={onChange}></Checkbox>
                </Form.Item>
                <Form.Item label="Đang chiếu">
                    <Checkbox name='DangChieu' onChange={onChange}></Checkbox>
                </Form.Item>
                <Form.Item label="Hot">
                    <Checkbox name='Hot' onChange={onChange}></Checkbox>
                </Form.Item>
                <Form.Item label="Số sao">
                    <Input name='danhGia' onChange={(event) => {
                        handleInput(event)
                    }} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Choose file</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <Button onClick={() => { 
                        addNewMovie(user)
                     }} type="primary">Thêm phim</Button>
                </Form.Item>
            </Form>
        </Fragment>
    );
};

export default () => <FormSizeDemo />;