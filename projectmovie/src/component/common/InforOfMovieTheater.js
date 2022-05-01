import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import { layThongTinRap } from "../../redux/action/Type";

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
  // var _ = require('lodash');
  // const a =_.split('a-b-c', '-', 3);
  // console.log(a);
  // // => ['a', 'b']
  const string ="2019-01-01T10:10:00"
    const date = moment(string)
    console.log(date._d);

  console.log(arrRap, objLichChieuTheoMaPhim);

  useEffect(() => {
    // dispatch(QLRLayThongTinHeThongRap());
  }, []);

  // const rederLichCHieu = (rap) => {
  //   const arr = [];

  //   rap.map((lichChieu) => {
  //       arr.push(moment(lichChieu.ngayChieuGioChieu)._d);
  //     });
  //     console.log("mang sau khi format",arr);


  //   return arr.map((lichChieu,index)=>{
  //   return  <button key={`lc ${index}`}>{lichChieu}</button>
  //   })
  // };

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
              <div className="row">{rap.lichChieuPhim?.slice(0,12).map((lc,index)=>{
                return <div className="col-1 text-danger" key={`lc ${index}`}>{moment(lc.ngayChieuGioChieu).format('hh:mm:A') }</div>
              })}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderCardLogoRap = () => {
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

  const callback = (key) => {
    console.log(key);
  };

  return (
    <div className="container">
      <Tabs defaultActiveKey="1" centered style={{ color: "white" }}>
        <TabPane
          tab={
            <span>
              <VideoCameraOutlined />
              Thông Tin Lich Chiếu
            </span>
          }
          key="1"
          icon
        >
          <Tabs defaultActiveKey="1" onChange={callback} tabPosition={"left"}>
            {renderCardLogoRap()}
          </Tabs>
        </TabPane>
        <TabPane
          tab="Thông Tin Phim"
          key="2"
          style={{ height: "200px", color: "red" }}
        >
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Dánh Giá" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      {/*  */}
    </div>
  );
}
