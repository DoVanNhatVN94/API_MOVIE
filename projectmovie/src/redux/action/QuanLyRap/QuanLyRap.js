
import manager from "../../../API/API";
import { layThongTinRap, layTTLichChieuPhim } from "../Type";


export const QLRLayThongTinLichChieuPhim = (maPhim) => {
  return (dispatch2) => {
    const promise = manager.getTTlichChieuPhim(maPhim);
    promise.then((result) => {
      console.log(result.data.content);
      dispatch2({
        type: layTTLichChieuPhim,
        data: result.data.content,
      });
    });
    promise.catch((error) => {
      console.log(error);
    });
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
