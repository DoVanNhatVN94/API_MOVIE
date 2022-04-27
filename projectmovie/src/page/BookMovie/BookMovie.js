import React from "react";
import "../../asset/css/BookMovie/BookMovie.css";

export default function BookMovie() {
  const arrChair = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const renderChair = (maGhe) => {
    return arrChair.map((chair, index) => {
      return (
        <button
          key={`chair ${maGhe}${index}`}
          id={`chair${maGhe}${chair}`}
          className="chair chair_bg_stand col-1 "
        >
          {`${maGhe}${chair}`}
          {}
        </button>
      );
    });
  };

  return (
    <div
      className="feature-section pt-2 pb-2 container"
    >
      <div
        className="list-seat"
        style={{
          margin: "0 auto",
          width: "80%",
          position: "relative",
          height: "auto",
        }}
      >
        <div className="screen-thumb text-center mb-3">
          <h4 className="screen">Màn hình</h4>
          <img
            src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"
            alt="movie"
          />
        </div>
        <div className="clearfix row m-auto px-auto py-1">
          {renderChair("A")}
        </div>
        <div className="clearfix row m-auto px-auto py-1">
          {renderChair("B")}
        </div><div className="clearfix row m-auto px-auto py-1">
          {renderChair("C")}
        </div><div className="clearfix row m-auto px-auto py-1">
          {renderChair("D")}
        </div><div className="clearfix row m-auto px-auto py-1">
          {renderChair("E")}
        </div><div className="clearfix row m-auto px-auto py-1">
          {renderChair("F")}
        </div><div className="clearfix row m-auto px-auto py-1">
          {renderChair("G")}
        </div><div className="clearfix row m-auto px-auto py-1">
          {renderChair("H")}
        </div>
      </div>
    </div>
  );
}
