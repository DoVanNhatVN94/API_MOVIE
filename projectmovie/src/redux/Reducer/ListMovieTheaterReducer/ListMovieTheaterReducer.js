
import {
  layThongTinHeThongRap,
  LayThongTinLichChieuHeThongRapType,
  layThongTinRap,
  layTTLichChieuPhim,
} from "../../action/Type";


const ListMT = {
  // arrRap: [],
  // objLichChieuTheoMaPhim: {
  //   heThongRapChieu: [],
  // },
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

    // case layTTLichChieuPhim:
    //   state.objLichChieuTheoMaPhim = { ...action.data };
    //   state.arrRap = [...action.data.heThongRapChieu[0].cumRapChieu];
    //   return { ...state };

    case LayThongTinLichChieuHeThongRapType:
      state.DSCumRap = [...action.DSCumRap];

      return { ...state };

    default:
      return { ...state };
  }
};
