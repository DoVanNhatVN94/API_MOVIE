import { connection } from "../../..";
import manager from "../../../API/API";
import { displayLoading, hideLoading } from "../LoadingAction/LoadingAction";
import { DatVe, LayChiTietDatVe, SuLySauKhiDatVe } from "../Type";

export const UserDatVe = (ttDatVe) => {
  return async (dispatch2, getState) => {
    try {
      dispatch2(displayLoading);
      const result = await manager.postDatVe(ttDatVe);
      console.log(result.data.content);
      if (result.status === 200)
        await dispatch2({
          type: SuLySauKhiDatVe,
          data: [],
        });

      await dispatch2(LayChiTietDatVeAction(ttDatVe.maLichChieu));

      await dispatch2(hideLoading);
      let thongTinND = getState().UserReducer.thongTinND;
      await connection.invoke("datGheThanhCong", thongTinND.taiKhoan,ttDatVe.maLichChieu);
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      dispatch2(hideLoading);
    }
  };
};

export const LayChiTietDatVeAction = (maLichChieu) => {
  return async (dispatch2) => {
    try {
      const result = await manager.getChiTietPhongVe(maLichChieu);
      if (result.status === 200) {
        dispatch2({
          type: LayChiTietDatVe,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const datGheAction = (chair, maLichChieu) => {
  return async (dispatch2, getState) => {
    await dispatch2({
      type: DatVe,
      chair: chair,
    });

    let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
    let thongTinND = getState().UserReducer.thongTinND;

    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
    connection.invoke(
      "datGhe",
      thongTinND.taiKhoan,
      danhSachGheDangDat,
      maLichChieu
    );
  };
};
