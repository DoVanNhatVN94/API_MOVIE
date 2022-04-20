import { LayThongTinHeThongRap, layThongTinHeThongRap, layThongTinRap,  } from "../../action/Type";

const ListMT = {
  arrMT: [],
  arrLichChieuMT:['1'],
  arrRap:[]
};

export const ListMovieTheaterReducer = (state = ListMT, action) => {
  switch (action.type) {
    case layThongTinHeThongRap:
      state.arrMT = action.DS;
    return {...state}

    case LayThongTinHeThongRap:
      state.arrLichChieuMT = action.DS
      return {...state} 

    case layThongTinRap:
      state.arrRap=action.DS
      return {...state}  
    default:
      return { ...state };
  }
};
