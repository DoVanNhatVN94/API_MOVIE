import {  useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


import moment from "moment";
import { Tabs } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import "../../asset/css/DetailPage/DetailPage.css";

const { TabPane } = Tabs;
export default function InforOfMovieTheater() {
  const { heThongRapChieu } = useSelector(
    (state) => state.ListMovieReducer.detailMovie
  );
  

  const renderLichChieu = (lichChieuPhim) => {
    return lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
      return (
        <div className="col-2 text-danger" key={`lc ${index}`}>
          <NavLink to={`/bookmovie/${lichChieu.maLichChieu}`}>
            {moment(lichChieu.ngayChieuGioChieu).format("hh:mm:A")}
          </NavLink>
        </div>
      );
    });
  };

  const rederCumRap = (cumRapChieu) => {
    return cumRapChieu?.map((rap, index) => {
      return (
        <TabPane
          key={index}
          tab={
            <div>
              <img
                src={rap.hinhAnh}
                style={{ borderRadius: "5px", height: 100, width: 100 }}
                alt=""
              />
              <span>{rap.tenCumRap}</span> <br />
            </div>
          }
        >
          <div className="border border-info p-1">
            <div className="p-2 text-center">
              <h3>{rap.tenCumRap}</h3>
              <h4>{rap.diaChi}</h4>
            </div>
            <div className="row">{renderLichChieu(rap.lichChieuPhim)}</div>
          </div>
        </TabPane>
      );
    });
  };

  const renderCardLogoRap = () => {
    return heThongRapChieu?.map((rap, index) => {
      return (
        <TabPane
          key={index}
          tab={
            <div className="card">
              <img
                src={rap.logo}
                alt=""
                className="card-img-top"
                style={{ height: 100, width: 100 }}
              />
            </div>
          }
        >
          {" "}
          <Tabs defaultActiveKey="0" tabPosition={"left"}>
            {rederCumRap(rap.cumRapChieu)}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div className="container py-2">
      <Tabs defaultActiveKey="1" centered>
        <TabPane
          tab={
            <span>
              <VideoCameraOutlined />
              Th??ng Tin L???ch Chi???u
            </span>
          }
          key="1"
          icon
        >
          {heThongRapChieu?.length === 0 ? (
            <div className="text-center p-lg-5 ">
              <h3 className="text-danger ">
                Hi???n Phim T???m Th???i Ch??a C?? L???ch Chi???u
              </h3>
              <h4>C???m ??n Qu?? Kh??ch ???? Quan T??m T???i B??? Phim N??y</h4>
            </div>
          ) : (
            <Tabs defaultActiveKey="0" tabPosition={"left"}>
              {renderCardLogoRap()}
            </Tabs>
          )}
        </TabPane>

        <TabPane tab="D??nh Gi??" key="2"></TabPane>
      </Tabs>
    </div>
  );
}