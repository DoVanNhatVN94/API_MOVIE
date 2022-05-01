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
    
<<<<<<< HEAD
    // devNam

=======
>>>>>>> devNam5
    getTTlichChieuPhim=(maPhim)=>{
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }  
    // getTTCumRapTheoHeThong=(maRap)=>{
    //     return http.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`)
    // }
}
const manager = new Manager()
export default manager