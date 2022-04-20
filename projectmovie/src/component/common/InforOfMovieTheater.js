import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinRapTheoMaRap } from "../../redux/action/QuanLyRap/QuanLyRap";

export default function InforOfMovieTheater() {
  const { arrMT, arrLichChieuMT, arrRap } = useSelector(
    (state) => state.ListMovieTheaterReducer
  );

  const dispatch = useDispatch();

  const renderCardLogoRap = () => {
    return arrMT.map((rap, index) => {
      return (
        <div className="card" key={`logo ${index}`}>
          <button
            onClick={() => {
              dispatch(layThongTinRapTheoMaRap(rap.maHeThongRap));
            }}
          >
            <img src={rap.logo} className="card-img-top" alt="..." />
          </button>
        </div>
      );
    });
  };
  const rederCumRap = () => {
    return arrRap.map((rap, index) => {
      return (
        <div className="card" key={`rap ${index}`}>
          <div className="card-body">
            <h5 className="card-title">{rap.tenCumRap}</h5>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">{renderCardLogoRap()}</div>
        <div className="col-10">
          <div className="row">
            <div className="col-5">
              {rederCumRap()}
            </div>
            <div className="col-7"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
