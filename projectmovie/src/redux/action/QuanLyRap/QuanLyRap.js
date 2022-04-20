import axios from "axios";
import { TOKEN_MOVIE } from "../../../util/setting";
import { layThongTinRap } from "../Type";

export const layThongTinRapTheoMaRap = (maRap = "CGV") => {
  return (dispatch2) => {
    const promise = axios({
      method: "get",
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`,
      headers: {
        TokenCybersoft: TOKEN_MOVIE,
      },
    });
    promise.then((result)=>{
        console.log(result.data.content);
        dispatch2({
            type:layThongTinRap,
            DS:result.data.content
        })
    })
    promise.catch((error)=>{
        console.log(error);
    })
  };
};
