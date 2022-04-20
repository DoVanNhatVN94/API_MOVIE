import React from "react";
import { useSelector } from "react-redux";

export default function BookTicker() {
  const { arrMovie } = useSelector((state) => state.ListMovieReducer);

  const renderPhim = () => {
    //map duyet mangPhim
    return arrMovie.map((phim) => {
      return (
        <div className="col-2" key={phim.maPhim}>
          <div className="card">
            <img src={phim.hinhAnh} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{phim.tenPhim}</h5>
              <p className="card-text">{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container-fluid row">
      {renderPhim()}
    </div>
  );
}
