import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { LayDS } from "../../../redux/action/actionFunction";
import { LayDanhSachBanner } from "../../../redux/action/QuanLyPhim/QuanLyPhim";
import { layThongTinRapTheoMaRap } from "../../../redux/action/QuanLyRap/QuanLyRap";

import {
  capNhapDanhSachPhim,
  LayThongTinHeThongRap,
  layThongTinHeThongRap,
} from "../../../redux/action/Type";
import {
  QUAN_LY_PHIM_LAY_DANH_SACH_PHIM,
  QUAN_LY_RAP_LAY_THONG_TIN_HE_THONG_RAP,
  QUAN_LY_RAP_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
} from "../../../util/setting";

import InforOfMovieTheater from "../../common/InforOfMovieTheater";
import Navbar from "../../common/Navbar";

export const NavAndBookTicker = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LayDS(QUAN_LY_PHIM_LAY_DANH_SACH_PHIM, capNhapDanhSachPhim));
    dispatch(
      LayDS(QUAN_LY_RAP_LAY_THONG_TIN_HE_THONG_RAP, layThongTinHeThongRap)
    );
    dispatch(
      LayDS(
        QUAN_LY_RAP_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
        LayThongTinHeThongRap
      )
    );
    dispatch(layThongTinRapTheoMaRap());
    dispatch(LayDanhSachBanner());
  }, []);

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Navbar />
            <props.component {...propsRoute} />
            <InforOfMovieTheater />
          </Fragment>
        );
      }}
    />
  );
};
