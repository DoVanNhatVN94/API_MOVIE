import { GROUP_ID, http } from "../util/setting";

class Manager {
  //Lay DS PHIM Cho user va admin
  getDSPhim = () => {
    return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };
  //LayChiTietPhim
  getChiTietPhim = (maPhim) => {
    return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
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
  putCapNhapThongTinND = (user) => {
    return http.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user);
  };

  // devNam
  layDanhSachPhimAD = (tenPhim) => {
    if (tenPhim.trim() !== "") {
      return http.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`
      );
    }
    return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };
  themPhimUploadHinh = (formData) => {
    return http.post("/api/QuanLyPhim/ThemPhimUploadHinh", formData);
  };
  layThongTinPhim = (maPhim) => {
    return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
  capNhatPhimUpload = (formData) => {
    return http.post("/api/QuanLyPhim/CapNhatPhimUpload", formData);
  };
  xoaPhim = (maPhim) => {
    return http.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };

  //Rap

  layDanhSachHeThongRap = () => {
    return http.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  };
  // layThongTinLichChieuPhim = (maPhim) => {
  //     return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
  // }
  layThongTinhHeThongRap = () => {
    return http.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  };
  layThongTinCumRap = (maHeThongRap) => {
    return http.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  };

  getThongTinLichCHieuPhimHeThongRap = () => {
    return http.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    );
  };
  // getTTlichChieuPhim = (maPhim) => {
  //   return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  // };
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
