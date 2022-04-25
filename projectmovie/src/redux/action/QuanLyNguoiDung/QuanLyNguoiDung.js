import axios from "axios";
import {
  QUAN_LY_NGUOI_DUNG_DANG_KY,
  QUAN_LY_NGUOI_DUNG_DANG_NHAP,
  TOKEN_MOVIE,
} from "../../../util/setting";
import { history } from "../../../App";
import manager from "../../../API/API";
import { ktLogin } from "../Type";

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
    let promise = axios({
      method: "post",
      url: QUAN_LY_NGUOI_DUNG_DANG_NHAP,
      headers: {
        TokenCybersoft: TOKEN_MOVIE,
      },
      data: thongTinND,
    });
    promise.then((result) => {
      console.log(result.data.messages);
      const data = JSON.stringify(result.data.content.accessToken);
      localStorage.setItem("accessToken", data);
      history.replace();
    });
    promise.catch((error) => {
      console.log(error);
    });
  };
};

export const ktNDLogin = () => {
  return (dispatch2) => {
    const promise = manager.postNDlogin();
    promise.then((result) => {
      console.log(result.data.content);
      dispatch2({
        type: ktLogin,
        user: result.data.content
      })
      
      
    });
    promise.catch((error) => {
      console.log(error);
    });
  };
};
