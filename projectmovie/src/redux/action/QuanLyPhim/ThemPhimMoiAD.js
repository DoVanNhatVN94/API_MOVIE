
import manager from "../../../API/API"
import { history } from "../../../App";
import { layDSPhimAdmin } from "./QuanLyPhimAD";

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => { 
        try {
            let result = await manager.themPhimUploadHinh(formData);
            alert('Thêm phim thành công');
            console.log(result.data.content);
            dispatch(layDSPhimAdmin());
            history.push('/admin/films');
        } catch (error) {
            console.log(error)
        }
     }
}

