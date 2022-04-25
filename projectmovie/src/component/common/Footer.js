import React from "react";
import "../../asset/css/Footer/Footer.css"

export default function Footer() {
  return (
    <div className="footer-top-area section_70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <a href="/home">
                <img src="https://movienew.cybersoft.edu.vn/hinhanh/loki-2022_gp02.png" className="img-fluid" alt="footer logo" />
              </a>
              <div className="footer-contact">
                <p>
                  Support: <a href="#">support@movie.vn</a>
                </p>
                <p>
                  Hotline: <a href="tell:1900 1722">1900 XXXX</a>
                </p>
                <ul>
                  <li>
                    <a href="#">
                    <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Chính sách</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    Điều khoản chung
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    Chính sách thanh toán
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    Chính sách thanh toán
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    Điều khoản chung
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Download App</h3>
              <div className="footer-app-box">
                <p>Tải ngay ứng dụng đặt vé online cho dế yêu của bạn !</p>
                <ul className="apps-list">
                  <li>
                    <a href="#">
                      <img src="" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
