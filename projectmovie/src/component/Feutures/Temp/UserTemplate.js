import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../common/Header";

export const UserTemplate = (props) => {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header/>
            <div className="user_bg py-5">
              <div className="container ">
                <div className="row">
                  <div className="col-sm-5 col-12">
                    <div className="intro p-3">
                      <div className="intro_head text-lg-center p-3">
                        <h1 className="text-black-50 ">API MOVIE</h1>
                        <h3 className="text-success">WELLCOME To API MOVIE</h3>
                      </div>
                      <div className="intro_bottom text-lg-center text-primary p-3">
                        <h4>
                          Xin Vui Lòng Đăng Nhập Để Sử Dụng
                          <br />
                          Nếu Bạn Chưa Có Tài Khoản
                          <br />
                          Xin Vui Lòng Đăng Ký Để Sử Dụng Dịch Vụ Đặt Vé Trực
                          Tuyến{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7 col-12 pt-5">
                    <props.component {...propsRoute} />
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
      }}
    />
  );
};