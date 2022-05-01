import React from "react";

import CarouselListMovie from "./CarouselListMovie";
import BookTicker from "./BookTicker"

export default function HomePage() {
  return (
    <div className="my-5">
      <CarouselListMovie />
      <h2 style={{color:'wheat',textAlign:'center'}}>DANH SACH PHIM </h2>
      <BookTicker/>
    </div>
  );
}
