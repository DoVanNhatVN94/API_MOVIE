
import manager from "../../../API/API";
import {layTTLichChieuPhim } from "../Type";


export const QLRLayThongTinLichChieuPhim = (maPhim) => {
  return async (dispatch2) => {
    try {
      const result = await manager.getTTlichChieuPhim(maPhim)
      console.log(result.data.content);
      dispatch2({
        type: layTTLichChieuPhim,
        data: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
   
  };
};
// export const QLRLayThongTinHeThongRap = (maRap = "CGV") => {
//   return (dispatch2) => {
//     const promise = manager.getTTCumRapTheoHeThong(maRap);
//     promise.then((result) => {
//       console.log(result.data.content);
//       dispatch2({
//         type: layThongTinRap,
//         data: result.data.content,
//       });
//     });
//     promise.catch((error)=>{
//       console.log(error);
//     })
//   };
// };
