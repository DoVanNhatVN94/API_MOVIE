
import {
  layThongTinHeThongRap,
  LayThongTinLichChieuHeThongRapType,
  layThongTinRap,
  
} from "../../action/Type";


const ListMT = {
  arrLC: [],
  DSCumRap: [],
};

export const ListMovieTheaterReducer = (state = ListMT, action) => {
  switch (action.type) {
    case layThongTinHeThongRap:
      state.arrMT = action.DS;

      return { ...state };


    case layThongTinRap:
      state.arrRap = action.data;
      return { ...state };


    case LayThongTinLichChieuHeThongRapType:
      state.DSCumRap = [...action.DSCumRap];

      return { ...state };

    default:
      return { ...state };
  }
};
