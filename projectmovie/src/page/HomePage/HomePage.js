import React from "react";
import BookTicker from "../../component/common/BookTicker";
import CarouselListMovie from "./CarouselListMovie";
import Modal from "./Modal";

export default function HomePage() {
  return (
    <div>
      <Modal/>
      <CarouselListMovie />
    </div>
  );
}
