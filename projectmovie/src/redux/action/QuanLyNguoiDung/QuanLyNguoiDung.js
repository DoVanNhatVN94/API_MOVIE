import axios from "axios";
import { QUAN_LY_NGUOI_DUNG_DANG_KY, TOKEN_MOVIE } from "../../../util/setting";
import { history } from "../../../App";

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
      alert("Dang ky thành công");
      history.push("/login");
    });

    promise.catch((error) => {
      console.log(error);
    });
  };
};

