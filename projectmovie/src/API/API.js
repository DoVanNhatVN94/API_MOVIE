import { http } from "../util/setting"

export const urlChiTietPhim = "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim="

class Manager {
    getDSPhim = () => {
        return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`)
    }
    getDSBanner = () => {
        return http.get('/api/QuanLyPhim/LayDanhSachBanner')
    }
    postNDlogin = () => {
        return http.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }

    // devNam
    themPhimUploadHinh = (formData) => {
        return http.post('/api/QuanLyPhim/ThemPhimUploadHinh', formData)
    }
}
const manager = new Manager()
export default manager