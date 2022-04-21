import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function BookTicker() {
  const { arrMovie } = useSelector((state) => state.ListMovieReducer);
  const history = useHistory();
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
