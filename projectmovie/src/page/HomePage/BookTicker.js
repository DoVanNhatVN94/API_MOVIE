import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../asset/css/Slick/slick.css";
import { ActionLayDSPhim, QLRLayChiTietPhim } from "../../redux/action/QuanLyPhim/QuanLyPhim";

export default function BookTicker() {
  const { arrMovie } = useSelector((state) => state.ListMovieReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(ActionLayDSPhim());
  }, []);

  const settings = {

    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    arrows:true,
    
    // cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const renderPhim = () => {
    //map duyet mangPhim
    return arrMovie.map((phim) => {
      return (
        <div className="slick_item" key={phim.maPhim}>
          <button
            onClick={() => {
              dispatch(QLRLayChiTietPhim(phim.maPhim));
              history.push(`/detail/${phim.maPhim}`);
            }}
            className="card btn_button"
          >
            <img src={phim.hinhAnh} className="card-img-top" alt="..." />
            <div className="card-body slick_body">
              <h5 className="card-title slick_tenPhim">{phim.tenPhim}</h5>
            </div>
          </button>
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