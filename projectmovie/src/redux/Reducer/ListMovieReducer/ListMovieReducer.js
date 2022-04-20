import { capNhapDanhSachPhim } from "../../action/Type";

const ListMovie = {
  arrMovie: [],
};

export const ListMovieReducer = (state = ListMovie, action) => {
  switch (action.type) {
    case capNhapDanhSachPhim:
      state.arrMovie=action.DS
      
      return { ...state };
  
    default:
      return { ...state };
  }
  
};
