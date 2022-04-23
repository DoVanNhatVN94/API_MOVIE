import React, { useState } from "react";
import {useHistory } from "react-router-dom"
import { useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../asset/css/owl.css";

export default function CarouselListMovie() {
  const { arrBanner } = useSelector((state) => state.ListMovieReducer);
  console.log(arrBanner);

  const history = useHistory()
  
  const rederItem = () => {
    return arrBanner.map((banner, index) => {
      return (
        <div key={`banner ${index}`}>
          <button onClick={()=>{
            history.push(`/detail/${banner.maPhim}`)
          }}>
          <img className="img" src={banner.hinhAnh} />
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
