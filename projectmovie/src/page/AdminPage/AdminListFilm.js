
import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { DeleteOutlined, SearchOutlined, EditOutlined,CalendarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { layDSPhimAdmin, xoaPhimAction } from '../../redux/action/QuanLyPhim/QuanLyPhimAD';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';

const { Search } = Input;

export default function AdminListFilm() {
  let { arrMovie } = useSelector((state) => state.ListMovieReducer);
  console.log(arrMovie);

  let dispatch = useDispatch();

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = () => {
    const actionFunc = layDSPhimAdmin();
    dispatch(actionFunc);
  };

  const onSearch = (value) => {
    console.log(value);
    dispatch(layDSPhimAdmin(value));
  };

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = "https://picsum.photos/50";
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimB > tenPhimA) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Mô tả phim",
      dataIndex: "moTa",
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      width: "30%",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              to={`/admin/films/edit/${film.maPhim}`}
              style={{ color: "blue", fontSize: 25, paddingRight: 10 }}
            >
              <EditOutlined />
            </NavLink>
            <span
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa phim " + film.tenPhim + " không?"
                  )
                ) {
                  dispatch(xoaPhimAction(film.maPhim));
                }
              }}
              key={2}
              style={{ color: "red", fontSize: 25, cursor: "pointer" }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
      width: "20%",
    },
  ];
                    }} key={2} style={{ color: 'red', fontSize: 25, paddingRight: 10, cursor: 'pointer' }}><DeleteOutlined /></span>
                    <NavLink key={3} to={`/admin/films/showtime/${film.maPhim}`} style={{ color: 'green', fontSize: 25, paddingRight: 10 }}><CalendarOutlined /></NavLink>
                </Fragment>
            },
            width: '20%',
        },
    ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

    function onChange(pagination, filters, sorter, extra) {
        // console.log('params', pagination, filters, sorter, extra);
    }

    

    return (
        <div>
            <h2 className='mb-5'>Quản lý phim</h2>
            <Button style={{ width: 150 }} className='mb-4' onClick={() => {
                history.push('/admin/films/addnew')
            }}>Thêm phim</Button>
            <Search
                className='mb-4'
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'maPhim'} />
        </div>
    )
}
