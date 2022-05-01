import manager from "../../../API/API"

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => { 
        try {
            let result = await manager.themPhimUploadHinh(formData);
            alert('Thêm phim thành công');
            console.log(result.data.content)
        } catch (error) {
            console.log(error)
        }
     }
}

