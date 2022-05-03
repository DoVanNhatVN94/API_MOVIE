import { http } from "../util/setting"

export const urlChiTietPhim = "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim="

 class Manager {
    getDSPhim= ()=>{
        return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`)
    }
    getDSBanner=()=>{
        return http.get('/api/QuanLyPhim/LayDanhSachBanner')
    }
    postNDlogin=()=>{
        return http.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
    } 
    getTTlichChieuPhim=(maPhim)=>{
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
const  manager = new Manager()
export default manager