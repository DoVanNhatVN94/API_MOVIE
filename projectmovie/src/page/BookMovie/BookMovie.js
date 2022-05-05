import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Tabs } from "antd";

import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import "../../asset/css/BookMovie/BookMovie.css";

import {
  datGheAction,
  LayChiTietDatVeAction,
  UserDatVe,
} from "../../redux/action/QuanLyDatVe/QuanLyDatVe";
import { SuLyGheKhachDat, SuLySauKhiDatVe } from "../../redux/action/Type";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { connection } from "../..";
import { ktNDLogin } from "../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung";
const { TabPane } = Tabs;

export default function BookMovie(props) {
  console.log(props.match.params.id);
  var _ = require("lodash");
  const history = useHistory();
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const { thongTinND } = useSelector((state) => state.UserReducer);
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDangDat } =
    useSelector((state) => state.QuanLyDatVeReducer);

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const { thongTinDatVe } = thongTinND;

  console.log("danhSachGheDangDat", danhSachGheDangDat);
  console.log("danhSachGheKhachDangDat", danhSachGheKhachDangDat);

  useEffect(() => {
    dispatch(ktNDLogin())
    dispatch(LayChiTietDatVeAction(props.match.params.id));

    connection.on("datVeThanhCong", () => {
      dispatch(LayChiTietDatVeAction(props.match.params.id));
    });
    connection.invoke("loadDanhSachGhe", props.match.params.id);

    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
      console.log("dsGheKhachDat", dsGheKhachDat);
      dsGheKhachDat = dsGheKhachDat?.filter(
        (item) => item.taiKhoan !== thongTinND.taiKhoan
      );

      let arrGheKhachDat = dsGheKhachDat?.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);
        console.log("arrGhe", arrGhe);

        return [...result, ...arrGhe];
      }, []);

      arrGheKhachDat = _.uniqBy(arrGheKhachDat, "maGhe");
      //dua dl khac dat ve rerdux
      dispatch({
        type: SuLyGheKhachDat,
        arrGheKhachDat,
      });
    });
    //cai sk khi reload trang
    window.addEventListener("beforeunload", clearGhe);
    return () => {
      clearGhe();
      window.removeEventListener("beforeunload", clearGhe);
    };
  }, []);

  const clearGhe = function (event) {
    connection.invoke("huyDat", thongTinND?.taiKhoan, props.match.params.id);
  };

  const info = () => {
    Modal.info({
      title: "Bạn Chưa Chọn Ghế",

      onOk() {},
    });
  };
  const success = () => {
    Modal.success({
      content: "Đặt Vé Thành Công",
    });
  };
  const rederReducer = (array1) => {
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (sum, chair) => sum + chair.giaVe,
      initialValue
    );
    return sumWithInitial;
  };

  const renderChair = () => {
    return danhSachGhe?.map((chair, index) => {
      let classGheVip = chair.loaiGhe === "Vip" ? "chair_bg_vip" : "";
      let classGheDaDat = chair.daDat === true ? "chair_bg_selected" : "";
      let classGheDD = "";
      let indexChairDD = danhSachGheDangDat?.findIndex(
        (chairDD) => chairDD.maGhe === chair.maGhe
      );
      if (indexChairDD !== -1) {
        classGheDD = "chair_bg_stand";
      }
      let classGheUser = "";
      if (thongTinND.taiKhoan === chair.taiKhoanNguoiDat) {
        classGheUser = "chair_bg_user";
      }
      let classGuestDD = "";
      let indexGuestDD = danhSachGheKhachDangDat?.findIndex(
        (chairDD) => chairDD.maGhe === chair.maGhe
      );
      if (indexGuestDD !== -1) {
        classGuestDD = "chair_bg_guest";
      }
      return (
        <Fragment key={`chair ${index}`}>
          <button
            onClick={() => {
              console.log("chair", chair);
              const action = datGheAction(chair, props.match.params.id);
              dispatch(action);
            }}
            disabled={chair.daDat | (classGuestDD !== "")}
            className={`chair ${classGheDD} chair_bg ${classGheDaDat} ${classGheVip} ${classGheUser} ${classGuestDD} text-center`}
          >
            {chair.daDat === false ? (
              classGheUser !== "" ? (
                <UserOutlined />
              ) : (
                chair.stt
              )
            ) : (
              <CloseOutlined />
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderLichSuDatVe = () => {
    return thongTinDatVe?.map((item, index) => {
      return (
        <Fragment key={`item ${index}`}>
          <div className="card col-3 ">
            <img
            alt=""
              src={item.hinhAnh}
              className="card-img-top"
              style={{ height: 300 }}
            />
            <div className="card-body">
              <h5 className="card-title text-success">{item.tenPhim}</h5>
              <div className="card-text">
                Ngày Giờ Chiếu:
                <span className=" text-danger  pl-3">
                  {` ${moment(item.ngayDat).format("hh:mm A - DD-MM-YYYY")}`}
                </span>
              </div>
              <div className="card-text">
                Tên Rạp:
                <span className=" text-danger ml-1">
                  {" "}
                  {item.danhSachGhe[0].tenHeThongRap}
                </span>
              </div>
              <div className="card-text">
                Tên Rạp:
                <span className=" text-danger ml-1">
                  {" "}
                  {item.danhSachGhe[0].tenRap}
                </span>
              </div>
              <p className=" card-text "></p>
              <Button type="success" onClick={showModal}>
                Danh Sách Ghế
              </Button>
              <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className=" p-3">
                  {item.danhSachGhe.map((chair, index) => {
                    return (
                      <span
                        className="text-primary p-1 m-1 bg-info"
                        key={`so ghe ${index}`}
                      >
                        {chair.tenGhe}
                      </span>
                    );
                  })}
                </div>
              </Modal>
            </div>
          </div>
        </Fragment>
      );
    });
  };
  return (
    <Fragment>
      <Tabs
        defaultActiveKey="1"
        onChange={() => {
          console.log("change");
        }}
      >
        <TabPane tab="* Chọn Ghế & Đặt Vé" key="1">
          <div className="row bookmovie vh-100">
            <div className="feature-section pt-2 pb-2 container col-md-9 text-center">
              <div
                className="list-seat"
                style={{
                  margin: "0 auto",
                  width: "80%",
                  position: "relative",
                  height: "auto",
                }}
              >
                <div className="screen-thumb text-center mb-3">
                  <h5 className="screen">Màn hình</h5>
                  <img
                    src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"
                    alt="movie"
                  />
                </div>
                <div className="allChair justify-content-center m-auto px-auto py-1 text-center">
                  {renderChair()}
                </div>
              </div>
              <div className="mt-5 flex justify-content-center text-center w-50 mx-auto">
                <table
                  className="table"
                  style={{ boder: "1px solid black", color: "white" }}
                >
                  <thead>
                    <tr style={{ color: "black" }}>
                      <th>Ghế Chưa Đặt</th>
                      <th>Ghế Đang Đặt</th>
                      <th>Ghế Khách Đang Đặt</th>
                      <th>Ghế Vip</th>
                      <th>Ghế Đã Đặt</th>
                      <th>Ghế Bạn Đặt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <button disabled className="chair chair_bg">
                          00
                        </button>
                      </td>
                      <td>
                        <button disabled className="chair chair_bg_stand">
                          00
                        </button>
                      </td>
                      <td>
                        <button disabled className="chair chair_bg_guest">
                          00
                        </button>
                      </td>
                      <td>
                        <button disabled className="chair chair_bg_vip">
                          00
                        </button>
                      </td>
                      <td>
                        <button disabled className="chair chair_bg_selected">
                          <CloseOutlined style={{ color: "black" }} />
                        </button>
                      </td>
                      <td>
                        <button disabled className="chair chair_bg_user">
                          00
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="container-fluid bookmovie_cart col-md-3 pb-3">
              <h4 className="text-center text text-danger pt-2">
                {rederReducer(danhSachGheDangDat)} đ
              </h4>
              <hr />
              <h5>{thongTinPhim?.tenPhim}</h5>
              <p className="py-1 ">Địa điểm : {thongTinPhim?.diaChi}</p>
              <p>
                Ngày Chiếu : {thongTinPhim?.ngayChieu} ---{" "}
                {thongTinPhim?.tenRap}
              </p>
              <hr />
              <div className="row">
                <div className="col-8 py-1">
                  {_.sortBy(danhSachGheDangDat, ["stt"]).map((chair, index) => {
                    if (danhSachGheDangDat !== [])
                      return (
                        <Fragment key={`chai dd ${index}`}>
                          <span className="text-center text-success m-1 ">
                            {chair.stt}
                          </span>
                          {(index + 1) % 6 === 0 ? <br /> : ""}
                        </Fragment>
                      );
                  })}
                </div>
                <div className="col-4 py-1">
                  <span>{rederReducer(danhSachGheDangDat)}</span>
                </div>
              </div>
              <hr />
              <div className="pt-1">
                <p>Họ Tên :</p>
                <h5>{thongTinND?.hoTen}</h5>
              </div>
              <div className="pt-1">
                <p>Email</p>
                <h5>{thongTinND?.email}</h5>
              </div>
              <div className="py-1">
                <p>Số Điện Thoại</p>
                <h5>{thongTinND?.soDT}</h5>
              </div>
              <button
                onClick={() => {
                  console.log(danhSachGheDangDat.lenght === 0);
                  if (danhSachGheDangDat.length === 0) {
                    info();
                  } else {
                    const ttDatVe = {
                      maLichChieu: props.match.params.id,
                      danhSachVe: [...danhSachGheDangDat],
                    };
                    dispatch(UserDatVe(ttDatVe));
                    success();
                    history.goBack();
                  }
                }}
                className="text-center btn btn-outline-success p-3"
              >
                ĐẶT VÉ
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: SuLySauKhiDatVe,
                    data: [],
                  });
                  history.push("/home");
                }}
                className="text-center btn btn-outline-danger p-3 mt-2"
              >
                Hủy
              </button>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Lịch Sử Đặt Vé" key="2">
          <div className="container">
            <div className="w-50 mx-auto py-3 text-center">
              <h4 className="text-success p-1">
                Lịch Sử Đặt Vé Của Khách Hàng
              </h4>
              <h6>
                Hãy xem thông tin thời gian và địa chỉ để xem phim vui vẻ nhé !
              </h6>
            </div>
            <div className="p-3 row">{renderLichSuDatVe()}</div>
          </div>
        </TabPane>
      </Tabs>
    </Fragment>
  );
}
