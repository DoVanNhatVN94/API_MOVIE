import React from "react";

import CarouselListMovie from "./CarouselListMovie";
import BookTicker from "./BookTicker"

export default function HomePage() {
  return (
    <div className="my-5">
      <CarouselListMovie />
      <BookTicker/>
    </div>
  );
}
