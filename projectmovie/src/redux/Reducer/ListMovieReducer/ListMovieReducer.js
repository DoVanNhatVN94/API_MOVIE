import { capNhapDanhSachPhim } from "../../action/Type";
import { layDSPhimAD } from "../../action/Type";

const ListMovie = {
  arrMovie: [],
};

export const ListMovieReducer = (state = ListMovie, action) => {
  switch (action.type) {
    case capNhapDanhSachPhim:
      state.arrMovie = action.DS

      return { ...state };
    case layDSPhimAD:
      state.arrMovie = action.mangPhim

      return { ...state };

    default:
      return { ...state };
  }

};
