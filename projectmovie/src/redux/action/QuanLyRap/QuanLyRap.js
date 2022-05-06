import manager from "../../../API/API";
import { LayThongTinLichChieuHeThongRapType, layTTLichChieuPhim } from "../Type";

// export const QLRLayThongTinLichChieuPhim = (maPhim) => {
//   return async (dispatch2) => {
//     try {
//       const result = await manager.getTTlichChieuPhim(maPhim);
//       console.log(result.data.content);
//       if (result.status === 200)
//         dispatch2({
//           type: layTTLichChieuPhim,
//           data: result.data.content,
//         });
//     } catch (error) {
//       console.log("error", error);
//       console.log("error", error.response?.data);
//     }
//   };
// };
export const TTLichChieuHTR = ()=>{
  return async dispatch2=>{
    try {
      const result = await manager.getThongTinLichCHieuPhimHeThongRap()
      if (result.status === 200)
      dispatch2({
        type: LayThongTinLichChieuHeThongRapType,
        DSCumRap:result.data.content
      })
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}
