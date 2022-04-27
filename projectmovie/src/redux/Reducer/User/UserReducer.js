import { ktLogin } from "../../action/Type";

const user = {
  thongTinND:{},
};

export const UserReducer = (state = user, action) => {
  switch (action.type) {
    case ktLogin:
      state.thongTinND = action.user;
        console.log(state);
      return { ...state };

    default:
      return { ...state };
  }
};
