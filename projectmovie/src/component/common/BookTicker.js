import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  QUAN_LY_PHIM_LAY_DANH_SACH_PHIM,
  TOKEN_MOVIE,
} from "../../util/setting";


export default function BookTicker() {
  let [mangPhim, setMangPhim] = useState([]);

  useEffect(() => {
    console.log("didmount");
    callAPI();
  }, []);

  const renderPhim = () => {
    //map duyet mangPhim
    return mangPhim.map((phim) => {
      return (
        <div className="col-3" key={phim.maPhim}>
          <div className="card">
            <img src={phim.hinhAnh} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{phim.tenPhim}</h5>
              <p className="card-text">{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  const callAPI = async () => {
    try {
      let result = await axios({
        method: "get",
        url: QUAN_LY_PHIM_LAY_DANH_SACH_PHIM,
        headers: {
          TokenCybersoft: TOKEN_MOVIE,
        },
      });

      await setMangPhim(result.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container row">
      {console.log("render")}
      {renderPhim()}
    </div>
  );
}
