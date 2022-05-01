import { layBanner, layChiTietPhim, layDSPhimAD, TypeLayDSPHIM } from "../../action/Type";

const ListMovie = {
  arrMovie: [],
  arrBanner: [],
  detailMovie: { a: "2" }
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
      state.detailMovie = action.ob

      return { ...state };

    case layDSPhimAD:
      state.arrMovie = action.mangPhim

      return { ...state };

    default:
      return { ...state };
  }
};
