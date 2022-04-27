import React, { Fragment, useState } from 'react';
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
    const [componentSize, setComponentSize] = useState('default');
    const [user,setUserAccount] = useState({});
    console.log(user)

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    const handleInput = (event) => {
        let { value, name } = event.target;

        setUserAccount({
            ...user,
            [name]: value
        })
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
                    }}/>
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Tình trạng">
                    <Radio value={1}>Đang chiếu</Radio>
                    <Radio value={2}>Sắp chiếu</Radio>
                </Form.Item>
                <Form.Item label="Hot">
                    <Checkbox onChange={onChange}></Checkbox>
                </Form.Item>
                <Form.Item label="Số sao">
                    <Input />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Choose file</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <Button type="primary">Thêm phim</Button>
                </Form.Item>
            </Form>
        </Fragment>
    );
};

export default () => <FormSizeDemo />;