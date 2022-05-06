import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../asset/css/owl.css";
import {ActionQLPLayDSBanner } from "../../redux/action/QuanLyPhim/QuanLyPhim";

export default function CarouselListMovie() {
  const dispatch = useDispatch();
  const { arrBanner } = useSelector((state) => state.ListMovieReducer);
  const history = useHistory();


  

useEffect(()=>{
  dispatch(ActionQLPLayDSBanner())
},[])
  const rederItem = () => {
    return arrBanner.map((banner, index) => {
      return (
        <div key={`banner ${index}`}>
          <button
            onClick={() => {
              history.push(`/detail/${banner.maPhim}`);
            }}
          >
            <img className="img" src={banner.hinhAnh} alt="" />
          </button>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <OwlCarousel
          items={3}
          className="owl-theme"
          autoPlay={true}
          loop
          nav
          margin={10}
        >
          {rederItem()}
        </OwlCarousel>
      </div>
    </div>
  );
}
