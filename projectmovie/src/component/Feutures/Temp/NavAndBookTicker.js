import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { LayDS } from "../../../redux/action/actionFunction";

import { capNhapDanhSachPhim } from "../../../redux/action/Type";
import { QUAN_LY_PHIM_LAY_DANH_SACH_PHIM } from "../../../util/setting";
import BookTicker from "../../common/BookTicker";
import InforOfMovieTheater from "../../common/InforOfMovieTheater";
import Navbar from "../../common/Navbar";

export const NavAndBookTicker = (props) => {
  const dispatch = useDispatch();

  
    dispatch(LayDS(QUAN_LY_PHIM_LAY_DANH_SACH_PHIM,capNhapDanhSachPhim))


  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Navbar />
            <props.component {...propsRoute} />
            <BookTicker />
            <InforOfMovieTheater />
          </Fragment>
        );
      }}
    />
  );
};
