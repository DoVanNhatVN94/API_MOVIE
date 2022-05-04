import { http } from "../util/setting"
import { GROUP_ID } from "../util/setting"

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
    layDanhSachPhimAD = (tenPhim) => {
        if (tenPhim.trim() !== '') {
            return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`)
        }
        return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    }
    themPhimUploadHinh = (formData) => {
        return http.post('/api/QuanLyPhim/ThemPhimUploadHinh', formData)
    }
    layThongTinPhim = (maPhim) => {
        return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
    capNhatPhimUpload = (formData) => {
        return http.post('/api/QuanLyPhim/CapNhatPhimUpload', formData)
    }
    xoaPhim = (maPhim) => {
        return http.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    }

    // devNam



    getTTlichChieuPhim = (maPhim) => {
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }  
    postDatVe=(ttDatVe)=>{
        return http.post(`/api/QuanLyDatVe/DatVe`,ttDatVe)
    }
    
    getChiTietPhongVe = (maLichChieu) => {
        return http.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    postLichSuDatVe = ()=>{
        return http.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
}
const manager = new Manager()
export default manager