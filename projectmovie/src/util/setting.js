
import axios from "axios";

const acces_stoken=JSON.parse(localStorage.getItem('accessToken'));
export const Acces_stoken ="Bearer "+acces_stoken


export const TOKEN_MOVIE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNSIsIkhldEhhblN0cmluZyI6IjE1LzA5LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2MzIwMDAwMDAwMCIsIm5iZiI6MTYzNDgzNTYwMCwiZXhwIjoxNjYzMzQ3NjAwfQ.uVU26Zzhj9Tt11v92mEFOSGk1Ow-on5dWy9q9vuSVt4";

export const DOMAIN = "https://movienew.cybersoft.edu.vn"

export const DOMAIN_BE = "https://localhost:5001"

export const GROUP_ID = "GP02";

//Địa chỉ ulr
export const QUAN_LY_PHIM_LAY_DANH_SACH_PHIM = `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`;

export const QUAN_LY_RAP_LAY_THONG_TIN_HE_THONG_RAP =
  "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";

export const QUAN_LY_RAP_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP = `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`;

export const QUAN_LY_RAP_LAY_THONG_TIN_LICH_CHIEU_PHIM = `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=`; //Lưu ý: sau "MaPhim=" là mã phim cung được cấp khi lick vào phim

export const QUAN_LY_DAT_VE_LAY_DANH_SACH_PHONG_VE =
  "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu="; // LƯU Ý: sau "MaLichChieu=" mã lich chiêu được cung cấp khi click vào lịch chiếu

export const QUAN_LY_NGUOI_DUNG_DANG_KY =
  "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";



export const QUAN_LY_PHIM_THEM_PHIM_UPLOAD_HINH =
  "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh";

export const QUAN_LY_PHIM_CAP_NHAP_PHIM_UPLOAD_HINH =
  "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload";

export const QUAN_LY_PHIM_XOA_PHIM =
  "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim="; // sau trường "MaPhim=" là mã phim cần xóa

export const QUAN_LY_DAT_VE_TAO_LICH_CHIEU =
  "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu";

export const QUAN_LY_NGUOI_DUNG_THONG_TIN_TAI_KHOAN =
  "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan";

export const QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_NGUOI_DUNG_THEO_TU_KHOA = `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=`; // sau "tuKhoa=" là từ khóa cần research

export const QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_LOAI_NGUOI_DUNG =
  "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung";

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000, // thời gian nếu như load lâu sẽ out
});

http.interceptors.request.use(
  
  (confirm) => {
    confirm.headers = {
      ...confirm.headers,
      TokenCybersoft: TOKEN_MOVIE,
      Authorization: Acces_stoken
    };
    return confirm;
  },
  (error) => {
    return Promise.reject(error);
  }
);
