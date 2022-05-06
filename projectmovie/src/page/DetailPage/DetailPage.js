import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useRouteMatch } from "react-router-dom";
import {  QLRLayChiTietPhim } from "../../redux/action/QuanLyPhim/QuanLyPhim";

import "../../asset/css/DetailPage/DetailPage.css";
import moment from "moment";

export default function DetailPage(props) {
  const match = useRouteMatch();

  const dispatch = useDispatch();

  const { detailMovie } = useSelector((state) => state.ListMovieReducer);
  console.log(detailMovie);
  useEffect(() => {
    dispatch(QLRLayChiTietPhim(match.params.id));
  }, []);

  return (
    <section
      className="detail_bg container-fluid py-5"
      style={{
        background: "#baa",
        maxWidth: "100% !important",
        borderTop: "1px solid",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="movie-details-banner">
              <div className="row">
                <div className="col-lg-3 col-sm-4">
                  <div className="details-banner-thumb">
                    <img
                      className="img-fluid"
                      src={detailMovie?.hinhAnh}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8">
                  <div className="details-banner-info">
                    <h2 style={{ color: "#22272b" }}>{detailMovie.tenPhim}</h2>
                    <p style={{ color: "#22272b" }} />
                  </div>
                  <div className="movie-details-page-box">
                    <div className="tab-content" id="pills-tabContent">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="tab-body w-75">
                            <p>{detailMovie.moTa}</p>
                          </div>
                        </div> 
                        <div className="col-md-12">
                          <div className="tab-body">
                            <p>Ngày Khởi Chiếu <span className="text-primary">{moment(detailMovie.ngayKhoiChieu).format('hh:mm A - DD/MM/YYYY')}</span></p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tab-body w-75">
                            <p>Đánh Giá : <span className=" fs-1 text-success">{detailMovie.danhGia}</span>/10</p>
                          </div>
                        </div> 
                      </div>
                    </div>

                    <div className="detail_btn row w-50">
                      <a
                        href={detailMovie.trailer}
                        className="col-6 btn btn-outline-primary"
                      >
                        <i className="fa fa-play" />
                        Trailer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
