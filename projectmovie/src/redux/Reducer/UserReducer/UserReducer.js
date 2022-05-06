import { CapNhapNDMessage, ktLogin, loginError, loginSuccess } from "../../action/Type";

const user = {
  thongTinND: {},
  message: "",
  
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

      return { ...state };
    default:
      return { ...state };
  }
};
