import { layBanner, layChiTietPhim, layDSPhimAD, TypeLayDSPHIM,layThongTinPhimAD } from "../../action/Type";

const ListMovie = {
  arrMovie: [],
  arrBanner: [],
  detailMovie: {},
  thongTinPhimAD:{}
};

export const ListMovieReducer = (state = ListMovie, action) => {
  switch (action.type) {
    case TypeLayDSPHIM:
      state.arrMovie = action.DS;

      return { ...state };
    case layBanner:
      state.arrBanner = action.DS;

      return { ...state };

    case layChiTietPhim:
      state.detailMovie = action.detailMovie

      return { ...state };

    case layDSPhimAD:
      state.arrMovie = action.mangPhim

      return { ...state };

    case layThongTinPhimAD:
      state.thongTinPhimAD = action.layThongTinPhim

      return { ...state };
    default:
      return { ...state };
  }
};