import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  ActionLayDSPhim,
  QLRLayChiTietPhim,
} from "../../redux/action/QuanLyPhim/QuanLyPhim";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../asset/css/Slick/slick.css";
import { Popover } from "antd";
import moment from "moment";

export default function BookTicker() {
  const { arrMovie } = useSelector((state) => state.ListMovieReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(ActionLayDSPhim());
  }, []);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderPhim = () => {
    //map duyet mangPhim
    return arrMovie.map((phim) => {
      const content = (
        <div>
          <span>
            Ngày Khởi Chiếu :{" "}
            {moment(phim.ngayKhoiChieu).format("hh:mm A - DD/MM/YYYY")}
          </span>
          <br />
        </div>
      );
      return (
        <div className="slick_item" key={phim.maPhim}>
          <div className="card btn_button">
            <img src={phim.hinhAnh} className="card-img-top" alt="..." />
            <div className="card-body slick_body">
              <Popover content={content} title={phim.tenPhim}>
                <button
                  onClick={() => {
                    dispatch(QLRLayChiTietPhim(phim.maPhim));
                    history.push(`/detail/${phim.maPhim}`);
                  }}
                  className="card-title slick_tenPhim"
                >
                  {phim.tenPhim}
                </button>
              </Popover>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container py-3">
      <Slider {...settings}>{renderPhim()}</Slider>
    </div>
  );
}
