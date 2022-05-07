import React, { Fragment, useEffect } from "react";
import { Popover, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { TTLichChieuHTR } from "../../redux/action/QuanLyRap/QuanLyRap";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

export default function BookTickerTheater() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { DSCumRap } = useSelector((state) => state.ListMovieTheaterReducer);

  useEffect(() => {
    dispatch(TTLichChieuHTR());
  }, []);
  const renderLichChieuTheoCumRap = (danhSachPhim) => {
    return danhSachPhim.map((phim, index) => {
      return (
        <Popover key={index} title={phim.tenPhim}>
          <button
            style={{
              height: 200,
              width: 100,
              backgroundColor: "black",
              margin: "5px",
            }}
            onClick={() => {
              history.push(`/detail/${phim.maPhim}`);
            }}
          >
            <img
              src={phim.hinhAnh}
              alt={phim.tenPhim}
              className=" img-fluid "
            />
          </button>
        </Popover>
      );
    });
  };

  const renderHeTHongRapCumRap = (lstCumRap) => {
    if (lstCumRap.length === 0)
      return (
        <div className="mx-auto p-5">
          <h3 className="text-center text-danger">Hiện Phim Đã Dừng Chiếu</h3>
          <h4>Cảm Ơn Quý Khách Đã Quan Tâm Bộ Phim Này</h4>
        </div>
      );
    else
      return lstCumRap?.map((rap, index) => {
        return (
          <TabPane
            tab={
              <div>
                <img
                  src={rap.hinhAnh}
                  alt={rap.tenCumRap}
                  style={{ height: 80, width: 80 }}
                />
                <span>{rap.tenCumRap}</span>
              </div>
            }
            key={index}
          >
            <div className="text-center p-2">
              <h3 className="text-primary">{rap.tenCumRap}</h3>
              <h4>{rap.diaChi}</h4>
              <h4>Danh Sach Phim Cum Rap</h4>
              <div className="d-flex flex-wrap ">
                {renderLichChieuTheoCumRap(rap.danhSachPhim)}
              </div>
            </div>
          </TabPane>
        );
      });
  };
  const rederHeThongRap = () => {
    return DSCumRap.map((rap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={rap.logo}
              alt={rap.tenHeThongRap}
              style={{ height: 100, width: 100 }}
            />
          }
          key={index}
        >
          <Tabs tabPosition="left">
            {renderHeTHongRapCumRap(rap.lstCumRap)}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div className="container overflow-auto">
      <Tabs tabPosition={"left"}>{rederHeThongRap()}</Tabs>
    </div>
  );
}
