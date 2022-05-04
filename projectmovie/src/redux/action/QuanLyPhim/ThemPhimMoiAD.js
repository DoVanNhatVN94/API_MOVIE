import manager from "../../../API/API";
import { displayLoading, hideLoading } from "../LoadingAction/LoadingAction";

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoading);
      let result = await manager.themPhimUploadHinh(formData);

      console.log(result.data.content);
      await dispatch(hideLoading);
      await alert("Thêm phim thành công");
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      dispatch(hideLoading);
    }
  };
};
