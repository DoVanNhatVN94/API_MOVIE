import { history } from "../../../App";
import manager from "../../../API/API";
import { ktLogin, loginError, loginSuccess } from "../Type";

export const dangKy = (thongTinND) => {
  return async (dispatch2) => {
    try {
      const result = await manager.postDangKy(thongTinND);
      console.log({ result });
      history.push("/login");
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const dangNhap = (thongTinND) => {
  return async (dispatch2) => {
    try {
      const result = await manager.postLogin(thongTinND);
      const data = JSON.stringify(result.data.content.accessToken);
      const ma = JSON.stringify(result.data.content.maLoaiNguoiDung);
      localStorage.setItem("accessToken", data);
      localStorage.setItem("maLoaiNguoiDung", ma);

      dispatch2({
        type: ktLogin,
        user: result.data.content,
      });

      dispatch2({
        type: loginSuccess,
        message: result.data.message,
      });

      if (history.location.pathname === "/login") history.goBack();
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      dispatch2({
        type: loginError,
        message: "Tài Khoản Hoặc Mật Khẩu Không Đúng",
      });
    }
  };
};

export const ktNDLogin = () => {
  return async (dispatch2) => {
    try {
      const result = await manager.postNDlogin();
      dispatch2({
        type: ktLogin,
        user: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
