import { history } from "../../../App";
import manager from "../../../API/API";
import { ktLogin, loginError, loginSuccess, CapNhapNDMessage } from "../Type";
import { displayLoading, hideLoading } from "../LoadingAction/LoadingAction";

export const dangKy = (thongTinND) => {
  return async (dispatch2) => {
    try {
      const result = await manager.postDangKy(thongTinND);
      if (result.status === 200) {
        console.log({ result });
        history.push("/login");
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const capNhapND = (thongTinND) => {
  return async (dispatch2) => {
    try {
      const result = await manager.putCapNhapThongTinND(thongTinND);
        await dispatch2({
          type: CapNhapNDMessage,
          message: result.data.message,
        });
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

export const dangNhap = (thongTinND) => {
  return async (dispatch2) => {
    try {
      const result = await manager.postLogin(thongTinND);
      if (result.status === 200) {
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
      }
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
      dispatch2(displayLoading)
      const result = await manager.postNDlogin();
      if (result.status === 200)
      await  dispatch2({
          type: ktLogin,
          user: result.data.content,
        });
        dispatch2(hideLoading)
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      dispatch2(hideLoading)
    }
  };
};
