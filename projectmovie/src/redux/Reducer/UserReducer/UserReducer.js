import {
  ktLogin,
  LAY_DANH_SACH_NGUOI_DUNG_AD,
  LAY_THONG_TIN_NGUOI_DUNG_AD,
  CapNhapNDMessage,
  loginError,
  loginSuccess,
} from "../../action/Type";

const user = {
  thongTinND: {},
  message: "",
  danhSachND: [],
  thongTinNDAdmin: {},
};

export const UserReducer = (state = user, action) => {
  switch (action.type) {
    case ktLogin:
      state.thongTinND = action.user;

      return { ...state };

    case loginSuccess:
      state.message = action.message;

      return { ...state };

    case loginError:
      state.message = action.message;

      return { ...state };

    case CapNhapNDMessage:
      state.message = action.message;

    case LAY_DANH_SACH_NGUOI_DUNG_AD:
      state.danhSachND = action.danhSachND;

      return { ...state };
    case LAY_THONG_TIN_NGUOI_DUNG_AD:
      state.thongTinNDAdmin = action.layThongTinND;

      return { ...state };
    default:
      return { ...state };
  }
};
