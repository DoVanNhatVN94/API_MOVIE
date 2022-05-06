import React from "react";

import CarouselListMovie from "./CarouselListMovie";
import BookTicker from "./BookTicker"
import BookTickerTheater from "./BookTickerTheater";

export default function HomePage() {
  return (
    <div className="my-5">
      <CarouselListMovie />
      <h2 style={{color:'wheat',textAlign:'center'}}>DANH SACH PHIM HOT</h2>
      <BookTicker/>
      <h2 style={{color:'wheat',textAlign:'center',margin:'50px 0'}}>DANH SACH PHIM THEO RAP</h2>
      <BookTickerTheater/>
    </div>
  );
}
