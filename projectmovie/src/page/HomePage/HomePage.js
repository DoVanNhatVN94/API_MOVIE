import React from "react";

import CarouselListMovie from "./CarouselListMovie";
import Modal from "./Modal";

export default function HomePage() {
  return (
    <div className="my-5">
      <Modal/>
      <CarouselListMovie />
    </div>
  );
}
