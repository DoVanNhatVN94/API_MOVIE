
import manager from "../../../API/API";


export const layDSPhimAdmin = (maNhom = "GP01") => {
  //trả về 1 hàm chưa gọi
  return async (dispatch2) => {
    try {
      const result = await manager.getDSPhim();
      if (result.status === 200) {
        dispatch2({
          type: "LAY_DS_PHIM_AD",
          mangPhim: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
