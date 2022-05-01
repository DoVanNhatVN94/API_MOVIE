import axios from "axios";
import {
  http,
  QUAN_LY_NGUOI_DUNG_DANG_KY,
  TOKEN_MOVIE,
} from "../../../util/setting";
import { history } from "../../../App";
import manager from "../../../API/API";
import { ktLogin, loginError, loginSuccess } from "../Type";

export const dangKy = (thongTinND) => {
  return (dispatch2) => {
    let promise = axios({
      method: "post",
      url: QUAN_LY_NGUOI_DUNG_DANG_KY,
      headers: {
        TokenCybersoft: TOKEN_MOVIE,
      },
      data: thongTinND,
    });
    promise.then((result) => {
      console.log({ result });
      //lấy data thành công chuyển người dùng qua login
      history.push("/login");
    });

    promise.catch((error) => {
      console.log(error);
    });
  };
};

export const dangNhap = (thongTinND) => {
  return (dispatch2) => {
    const promise = http.post("/api/QuanLyNguoiDung/DangNhap", thongTinND);
    promise.then((result) => {
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
      if(history.location.pathname=="/login")
      history.goBack()
    });
    promise.catch((error) => {
      console.log(error);
      dispatch2({
        type: loginError,
        message: "Tài Khoản Hoặc Mật Khẩu Không Đúng",
      });
    });
  };
};

export const ktNDLogin = () => {
  return (dispatch2) => {
    const promise = manager.postNDlogin();
    promise.then((result) => {
      dispatch2({
        type: ktLogin,
        user: result.data.content,
      });
    });
    promise.catch((error) => {
      console.log(error);
    });
  };
};
