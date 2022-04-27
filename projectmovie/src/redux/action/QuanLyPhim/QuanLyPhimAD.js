import axios from 'axios'
import { TOKEN_MOVIE } from '../../../util/setting'

export const layDSPhimAdmin = (maNhom="GP01") => {
    //trả về 1 hàm chưa gọi
    return (dispatch2) => {
        let promise = axios({
            method: "get",
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            }
        });
        promise.then((result) => {
            //lấy data thành công

            let action = {
                type: "LAY_DS_PHIM_AD",
                mangPhim: result.data.content
            }
            // sau khi lấy data thành công thì đẩy data lên reducer
            dispatch2(action);
        });

        promise.catch((error) => {
            console.log(error);
        })
    }

}