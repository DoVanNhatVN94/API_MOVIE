import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";

import { layThongTinRap } from "../../redux/action/Type";
import { QLRLayThongTinLichChieuPhim } from "../../redux/action/QuanLyRap/QuanLyRap";

import moment from "moment";
import { Tabs } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import "../../asset/css/DetailPage/DetailPage.css";

export default function InforOfMovieTheater() {
  const { TabPane } = Tabs;
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const { arrRap, objLichChieuTheoMaPhim } = useSelector(
    (state) => state.ListMovieTheaterReducer
  );
  const { detailMovie } = useSelector((state) => state.ListMovieReducer);
  console.log(detailMovie);
  useEffect(() => {
    dispatch(QLRLayThongTinLichChieuPhim(match.params.id));
  }, []);



  const rederCumRap = () => {
    return arrRap.map((rap, index) => {
      return (
        <div className="card " key={`rap ${index}`}>
          <div className="row">
            <div className="col-1">
              <img
                src={rap.hinhAnh}
                style={{ borderRadius: "5px" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="card-body col-11">
              <h5 className="card-title">{rap.tenCumRap}</h5>
              <div className="row">
                {rap.lichChieuPhim?.slice(0, 12).map((lc, index) => {
                  return (
                    <div className="col-1 text-danger" key={`lc ${index}`}>
                      <NavLink to={`/bookmovie/${lc.maLichChieu}`}>
                        {moment(lc.ngayChieuGioChieu).format("hh:mm:A")}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderCardLogoRap = () => {
    if(objLichChieuTheoMaPhim.heThongRapChieu.length === 0)
    return <div className="mx-auto p-5"><h3 className="text-center text-danger">Hiện Phim Đã Dừng Chiếu</h3>
    <h4>Cảm Ơn Quý Khách Đã Quan Tâm Bộ Phim Này</h4></div>
    else
    return objLichChieuTheoMaPhim.heThongRapChieu.map((rap, index) => {
      return (
        <TabPane
          tab={
            <div className="card" key={`logo ${index}`}>
              <button
                onClick={() => {
                  dispatch({
                    type: layThongTinRap,
                    data: rap.cumRapChieu,
                  });
                }}
              >
                <img
                  src={rap.logo}
                  className="card-img-top"
                  style={{ height: "100px" }}
                />
              </button>
            </div>
          }
          key={index}
        >
          {rederCumRap()}
        </TabPane>
      );
    });
  };


  return (
    <div className="container">
      <Tabs defaultActiveKey="1" centered>
        <TabPane
          tab={
            <span>
              <VideoCameraOutlined />
              Thông Tin Lịch Chiếu
            </span>
          }
          key="1"
          icon
        >
          <Tabs defaultActiveKey="1" tabPosition={"left"}>
            {renderCardLogoRap()}
          </Tabs>
        </TabPane>

        <TabPane tab="Dánh Giá" key="2"></TabPane>
      </Tabs>
      {/*  */}
    </div>
  );
}
