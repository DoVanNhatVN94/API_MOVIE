import { http } from "../util/setting";

class Manager {
  //Lay DS PHIM Cho user va admin
  getDSPhim = () => {
    return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`);
  };
  getDSBanner = () => {
    return http.get("/api/QuanLyPhim/LayDanhSachBanner");
  };
  postNDlogin = () => {
    return http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };
  postLogin = (user) => {
    return http.post("/api/QuanLyNguoiDung/DangNhap", user);
  };
  postDangKy = (user) => {
    return http.post("/api/QuanLyNguoiDung/DangKy", user);
  };

  // devNam
  themPhimUploadHinh = (formData) => {
    return http.post("/api/QuanLyPhim/ThemPhimUploadHinh", formData);
  };

  getChiTietPhim = (maPhim) => {
    return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  getTTlichChieuPhim = (maPhim) => {
    return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };
  postDatVe = (ttDatVe) => {
    return http.post(`/api/QuanLyDatVe/DatVe`, ttDatVe);
  };

  getChiTietPhongVe = (maLichChieu) => {
    return http.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
  postLichSuDatVe = () => {
    return http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };
}
const manager = new Manager();
export default manager;
