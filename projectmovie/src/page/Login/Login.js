import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dangNhap } from "../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung";
import { Form, Input, Button, Checkbox } from "antd";
import Register from "../Register/Register";

export default function Login(props) {
  
  let [user, setUserAccount] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  // const history = useHistory();
  const dispatch = useDispatch();
  const hanleInput = (event) => {
    let { value, name } = event.target;

    setUserAccount({
      ...user,
      [name]: value,
    });
  };
  console.log(user);
  const onFinish = (values) => {
    const { taiKhoan, matKhau } = values;
    setUserAccount({
      taiKhoan: taiKhoan,
      matKhau: matKhau,
    });
    dispatch(dangNhap(user));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          name="taiKhoan"
          onChange={(event) => {
            hanleInput(event);
          }}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          name="matKhau"
          onChange={(event) => {
            hanleInput(event);
          }}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit"  data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">
          login
        </Button>
        <Button
          type="success"
          htmlType="button"
          onClick={() => {
            dispatch({
              type: "OPEN_MODAL",
              Component: <Register />,
              id: "Register",
            });
          }}
        >
          Register
        </Button>
        
      </Form.Item>
    </Form>
  );
}
