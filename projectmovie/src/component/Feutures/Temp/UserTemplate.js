import { Route } from "react-router-dom";
import { Fragment } from "react";

export const UserTemplate = (props) => {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div className="container ">
            <div className="row">
              <div className="col-5 col-sm-12">
                <div className="intro p-3">
                    <div className="intro_head text-lg-center p-3">
                    <h3 className="text-success"><span className="text-black-50 fs-1">API MOVIE</span> --- WELLCOME To API MOVIE</h3>
                    </div>
                    <div className="intro_bottom text-lg-center text-primary p-3">
                        <h4>Xin Vui Lòng Đăng Nhập Để Sử Dụng</h4>
                        <h4>Nếu Bạn Chưa Có Tài Khoản<br/>Xin Vui Lòng Đăng Ký Để Sử Dụng Dịch Vụ Đặt Vé Trực Tuyến </h4>
                    </div>
                </div>
              </div>
              <div className="col-7 col-sm-12">
                <props.component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};
