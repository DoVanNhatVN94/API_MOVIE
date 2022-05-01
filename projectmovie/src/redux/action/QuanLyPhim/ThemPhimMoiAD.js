import axios from "axios";
// import { history } from "../../App";
import { TOKEN_MOVIE } from "../../../util/setting";

export const themPhimMoi = (thongTinND) => {

    return (dispatch2) => {
        let promise = axios({
            method: "post",
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh`,
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            },
            data: thongTinND
        });

        promise.then((result) => {
            //lay data thanh cong
            console.log(result)
            // chuyen nguoi dung sang login
            // alert('Dang ky thanh cong roi, chuan bi login di')
            // history.push('/login')
        })

        promise.catch((error) => {
            console.log(error)
        })

    }

}