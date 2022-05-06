import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhim } from '../../redux/action/QuanlyPhim/QuanLyPhim';

export default function AdminFilm() {
    let { arrMovie } = useSelector(state => state.ListMovieReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        callAPI();
    }, [])

    const callAPI = () => {
        const actionFunc = layDanhSachPhim("GP02");
        dispatch(actionFunc);
    }

    const renderDSPhim = () => {
        return arrMovie.map((phim) => {
            return (
                <tr key={phim.maPhim}>
                    <td>{phim.maPhim}</td>
                    <td>
                        <img className='img-fluid' src={phim.hinhAnh} alt="" />
                    </td>
                    <td>{phim.tenPhim}</td>
                    <td>{phim.moTa}</td>
                    <td>
                        <button className='btn btn-danger'>Xóa</button>
                        <button className='btn btn-info'>Cập nhật</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <Fragment>
            <h2>Quản lý phim</h2>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">Mã phim</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Tên phim</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDSPhim()}
                </tbody>
            </table>
        </Fragment>
    )
}
