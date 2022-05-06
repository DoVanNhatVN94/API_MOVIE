import manager from "../../../API/API";
import { displayLoading, hideLoading } from "../LoadingAction/LoadingAction";
import { layBanner, layChiTietPhim, TypeLayDSPHIM } from "../Type";

export const ActionLayDSPhim = () => {
  return async (dispatch2) => {
    try {
      const result = await manager.getDSPhim();
      if (result.status === 200)
        dispatch2({
          type: TypeLayDSPHIM,
          DS: result.data.content,
        });
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const ActionQLPLayDSBanner = () => {
  return async (dispatch2) => {
    try {
      const result = await manager.getDSBanner();
      if (result.status === 200)
        await dispatch2({
          type: layBanner,
          DS: result.data.content,
        });
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const QLRLayChiTietPhim = (maPhim) => {
  return async (dispatch2) => {
    try {
      dispatch2(displayLoading);
      const result = await manager.getChiTietPhim(maPhim);
      if (result.status === 200) {
        await dispatch2({
          type: layChiTietPhim,
          detailMovie: result.data.content,
        });
        dispatch2(hideLoading);
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      dispatch2(hideLoading);
    }
  };
};
