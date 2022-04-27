import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LayDS } from "../../redux/action/actionFunction";
import { capNhapDanhSachPhim } from "../../redux/action/Type";
import { QUAN_LY_PHIM_LAY_DANH_SACH_PHIM } from "../../util/setting";

export default function BookTicker() {
  const { arrMovie } = useSelector((state) => state.ListMovieReducer);
  const dispatch = useDispatch()
  const history = useHistory();
  useEffect(()=>{dispatch(LayDS(QUAN_LY_PHIM_LAY_DANH_SACH_PHIM, capNhapDanhSachPhim));},[])
  
  const renderPhim = () => {
    //map duyet mangPhim
    return arrMovie.map((phim) => {
      return (
        <div className="col-2" key={phim.maPhim}>
          <button onClick={() => {
            history.push(`/detail/${phim.maPhim}`)
          }} className="card">
            <img src={phim.hinhAnh} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{phim.tenPhim}</h5>
              <p className="card-text">{phim.moTa}</p>
            </div>
          </button>
        </div>
      );
    });
  };

  return <div className="container-fluid row">{renderPhim()}</div>;
}
