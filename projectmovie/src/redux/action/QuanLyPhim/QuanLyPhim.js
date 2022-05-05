import manager from "../../../API/API";
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

export const LayChiTietPhim = (maPhim) => {
  return async (dispatch2) => {
    try {
      const result = await manager.getChiTietPhim(maPhim);
      if (result.status === 200) {
        dispatch2({
          type: layChiTietPhim,
          ob: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
