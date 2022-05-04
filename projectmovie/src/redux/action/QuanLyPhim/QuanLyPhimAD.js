

import manager from "../../../API/API"

import { layThongTinPhimAD,layDSPhimAD } from '../Type'
import { history } from '../../../App'

export const layDSPhimAdmin = (tenPhim='') => {

    return async (dispatch) => {
        try {
            let result = await manager.layDanhSachPhimAD(tenPhim);
            // console.log(result.data.content);
            let action = {
                type: layDSPhimAD,
                mangPhim: result.data.content
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}

// LAY_THONG_TIN_PHIM_AD
export const thongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await manager.layThongTinPhim(maPhim);
            // console.log(result.data.content);
            let action = {
                type: layThongTinPhimAD,
                layThongTinPhim: result.data.content
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}


// Cập nhật phim AD
export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await manager.capNhatPhimUpload(formData);
            alert('Cập nhật phim thành công');
            console.log(result.data.content);

            // dispatch(layDSPhimAdmin());
            history.push('/admin/films');

        } catch (error) {
            console.log(error)
        }
    }
}

export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await manager.xoaPhim(maPhim);
            console.log(result.data.content);
            alert('Xóa phim thành công');
            dispatch(layDSPhimAdmin());
            history.push('/admin/films');
        } catch (error) {
            console.log(error)
        }
    }
}

