import axios from "axios";
import { TOKEN_MOVIE } from "../../util/setting";

export const LayDS = (api,actionType) => {
    return (dispatch2) => {
      let promise = axios({
        method: "get",
        url: api,
        headers: {
          TokenCybersoft: TOKEN_MOVIE,
        },
        
      });
      promise.then((result) => {
          let action = {
              type:actionType,
              DS:result.data.content
          }
        dispatch2(action)
      });
  
      promise.catch((error) => {
        console.log(error);
      });
    };
  };