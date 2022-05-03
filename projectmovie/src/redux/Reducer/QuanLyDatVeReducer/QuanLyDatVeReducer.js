import {
  DatVe,
  LayChiTietDatVe,
  SuLyGheKhachDat,
  SuLySauKhiDatVe,
} from "../../action/Type";

const stateDefault = {
  chiTietPhongVe: {
    danhSachGhe: [],
    thongTinPhim: {
      diaChi: "",
      gioChieu: "",
      hinhAnh: "",
      maLichChieu: "",
      ngayChieu: "",
      tenCumRap: "",
      tenPhim: "",
      tenRap: "",
    },
  },
  danhSachGheDangDat: [],
  danhSachGheKhachDangDat: [ {maGhe: 56991},{maGhe: 56992 } ],
  datVe: {
    maLichChieu: "",
    danhSachVe: [
      {
        maGhe: 0,
        giaVe: 0,
      },
    ],
  },
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LayChiTietDatVe:
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };

    case DatVe:
      let dsGheCapNhap = [...state.danhSachGheDangDat];
      let index = dsGheCapNhap.findIndex(
        (chairDD) => chairDD.maGhe === action.chair.maGhe
      );
      if (index !== -1) {
        dsGheCapNhap.splice(index, 1);
      } else {
        dsGheCapNhap.push(action.chair);
      }
      return { ...state, danhSachGheDangDat: dsGheCapNhap };

    case SuLySauKhiDatVe:
      state.danhSachGheDangDat = action.data;
      return { ...state };

    case SuLyGheKhachDat:
      state.danhSachGheDangDat = [...action.arrGheKhachDat];
      return { ...state };

    default:
      return { ...state };
  }
};
