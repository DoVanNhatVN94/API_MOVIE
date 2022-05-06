import React, { Fragment, useEffect, useState } from 'react'
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { DeleteOutlined, SearchOutlined, EditOutlined, CalendarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachNguoiDungAdmin, xoaNguoiDungAD } from '../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';

const { Search } = Input;

export default function QuanLyNguoiDungAD() {
  let { danhSachND } = useSelector(state => state.UserReducer);
  console.log(danhSachND);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAdmin())
  }, [])


  const columns = [
    {
      title: 'STT',
      render: (text, stt, index) => {
        return <Fragment>
          <p className='mt-3'>{index + 1}</p>
        </Fragment>
      }
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
    },
    {
      title: 'Mật khẩu',
      dataIndex: 'matKhau',
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDt',
    },
    {
      title: 'Thao tác',
      dataIndex: 'thaoTac',
      render: (text, user) => {
        return <Fragment>
          <NavLink key={1} to={`/admin/user/edit/${user.taiKhoan}`} style={{ color: 'blue', fontSize: 25, paddingRight: 10 }}><EditOutlined /></NavLink>
          <span onClick={() => {
            if (window.confirm('Bạn có chắc muốn xóa tài khoản ' + user.taiKhoan + ' không?')) {
              dispatch(xoaNguoiDungAD(user.taiKhoan));
            }
          }} key={2} style={{ color: 'red', fontSize: 25, paddingRight: 10, cursor: 'pointer' }}><DeleteOutlined /></span>

        </Fragment>
      }
    },

  ];

  const onSearch = (value) => {
    console.log(value);
    dispatch(layDanhSachNguoiDungAdmin(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const data = danhSachND;

  return (
    <div>
      <h2 className='my-4'>Quản lý người dùng</h2>
      <Button type='primary' style={{ width: 150 }} className='mb-4' onClick={() => {
        history.push("/admin/user/addnew")
      }}>Thêm người dùng</Button>
      <Search
        className='mb-4'
        placeholder="Search"
        enterButton={<SearchOutlined />}
        size="large"
      onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'taiKhoan'} />
    </div>
  )
}
