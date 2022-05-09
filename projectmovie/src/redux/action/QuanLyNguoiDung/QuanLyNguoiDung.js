import { history } from "../../../App";
import manager from "../../../API/API";
import { ktLogin, loginError, loginSuccess, LAY_DANH_SACH_NGUOI_DUNG_AD, LAY_THONG_TIN_NGUOI_DUNG_AD, CapNhapNDMessage } from "../Type";
import { displayLoading, hideLoading } from "../LoadingAction/LoadingAction";
import { Alert } from "react-bootstrap";

export const dangKy = (thongTinND) => {
  return async (dispatch2) => {
    try {
      const result = await manager.postDangKy(thongTinND);
      console.log({ result });
      history.push("/home");
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const capNhapND = (thongTinND) => {
  return async (dispatch2) => {
    try {
      const result = await manager.putCapNhapThongTinND(thongTinND);
        await dispatch2({
          type: CapNhapNDMessage,
          message: result.data.message,
        });
        dispatch2({
          type: ktLogin,
          user: result.data.content,
        });
     
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const dangNhap = (thongTinND) => {
  return async (dispatch2) => {
    try {
      const result = await manager.postLogin(thongTinND);
      if (result.status === 200) {
        const data = JSON.stringify(result.data.content.accessToken);
        const ma = JSON.stringify(result.data.content.maLoaiNguoiDung);
      await  localStorage.setItem("accessToken", data);
      await  localStorage.setItem("maLoaiNguoiDung", ma);

      await  dispatch2({
          type: ktLogin,
          user: result.data.content,
        });

       await dispatch2({
          type: loginSuccess,
          message: result.data.message,
        });
        if (history.location.pathname === "/login") history.goBack();
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      dispatch2({
        type: loginError,
        message: "Tài Khoản Hoặc Mật Khẩu Không Đúng",
      });
    }
  };
};

export const ktNDLogin = () => {
  return async (dispatch2) => {
    try {
      dispatch2(displayLoading)
      const result = await manager.postNDlogin();
      if (result.status === 200)
      await  dispatch2({
          type: ktLogin,
          user: result.data.content,
        });
        dispatch2(hideLoading)
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      dispatch2(hideLoading)
    }
  };
};

export const layDanhSachNguoiDungAdmin = (nguoiDung='') => {
  return async (dispatch2) => {
    try {
      const result = await manager.layDanhSachNguoiDungAD(nguoiDung);
      if (result.status === 200)
        dispatch2({
          type: LAY_DANH_SACH_NGUOI_DUNG_AD,
          danhSachND: result.data.content,
        });
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};


export const themNguoiDungAdmin = (nguoiDung) => {
  return async (dispatch) => {
    try {
      let result = await manager.themNguoiDungAdmin(nguoiDung);
      alert('Thêm người dùng thành công');
      console.log(result.data.content);
      // dispatch(layDanhSachNguoiDungAdmin());
      history.push('/admin/user');
    } catch (error) {
      console.log(error)
    }
  }
}

export const layThongTinNguoiDungAD = (taiKhoan) => {
  return async (dispatch) => {
    try {
      let result = await manager.layThongTinNguoiDung(taiKhoan);
      let action = {
        type: LAY_THONG_TIN_NGUOI_DUNG_AD,
        layThongTinND: result.data.content
      }
      dispatch(action)
    } catch (error) {
      console.log(error.response?.data)
    }
  }
}

export const capNhatNguoiDungAD = (nguoiDung) => {
  return async (dispatch) => {
      try {
          let result = await manager.capNhatNguoiDung(nguoiDung);
          alert('Cập nhật người dùng thành công');
          console.log(result.data.content);

          history.push('/admin/user');

      } catch (error) {
          console.log(error)
      }
  }
}

export const xoaNguoiDungAD = (taiKhoan) => {
  return async (dispatch) => {
      try {
          let result = await manager.xoaNguoiDung(taiKhoan);
          console.log(result.data.content);
          alert('Xóa người dùng thành công');
          dispatch(layDanhSachNguoiDungAdmin())
          history.push('/admin/user');
      } catch (error) {
          console.log(error)
      }
  }
}