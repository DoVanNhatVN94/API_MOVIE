import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { LayChiTietPhim } from "../../redux/action/QuanLyPhim/QuanLyPhim";

export default function DetailPage(props) {
  const match = useRouteMatch();

  console.log(match);
  const dispatch =useDispatch();

  const {detailMovie} = useSelector(state=>state.ListMovieReducer)

  console.log(detailMovie,"thong tin phim lay ddc");

useEffect(()=>{
  dispatch(LayChiTietPhim(match.params.id))
},[])

 

  return (
    <div className="card w-50" >
      <img src={detailMovie.hinhAnh} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{detailMovie.tenPhim}</h5>
        <p className="card-text">
          {detailMovie.moTa}
        </p>
      </div>
    </div>
  );
}
