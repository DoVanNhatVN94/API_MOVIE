import axios from "axios";
import manager, { urlChiTietPhim } from "../../../API/API";
import { TOKEN_MOVIE } from "../../../util/setting";
import { layBanner, layChiTietPhim, TypeLayDSPHIM } from "../Type";

export const ActionLayDSPhim=()=>{
  return  (dispatch2) => {
    const promise =  manager.getDSPhim()
     promise.then((result) => {
      dispatch2({
       type:TypeLayDSPHIM,
       DS:result.data.content
      });
    });
     promise.catch((error) => {
      console.log(error);
    });
  };
}

export const ActionQLPLayDSBanner = () => {
  return  (dispatch2) => {
    const promise =  manager.getDSBanner()
     promise.then((result) => {
      dispatch2({
        type: layBanner,
        DS: result.data.content,
      });
    });
     promise.catch((error) => {
      console.log(error);
    });
  };
};



export const LayChiTietPhim = (maPhim) => {
  return (dispatch2) => {
    const promise = axios({
      method: "get",
      url: `${urlChiTietPhim}${maPhim}`,
      headers: {
        TokenCybersoft: TOKEN_MOVIE,
      },
    });
    promise.then((result) => {
      console.log(result.data.content);
      dispatch2({
        type: layChiTietPhim,
        ob: result.data.content,
      });
    });
    promise.catch((error) => {
      console.log(error);
    });
  };
};
