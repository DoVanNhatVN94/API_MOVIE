import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Tabs } from "antd";

import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import "../../asset/css/BookMovie/BookMovie.css";

import {
  datGheAction,
  LayChiTietDatVeAction,
  UserDatVe,
} from "../../redux/action/QuanLyDatVe/QuanLyDatVe";
import { SuLyGheKhachDat, SuLySauKhiDatVe } from "../../redux/action/Type";
import moment from "moment";

import { connection } from "../..";
import { ktNDLogin } from "../../redux/action/QuanLyNguoiDung/QuanLyNguoiDung";
import { useHistory } from "react-router-dom";
const { TabPane } = Tabs;

export default function BookMovie(props) {
  var _ = require("lodash");

  const history = useHistory();
  const dispatch = useDispatch();

  const { thongTinND } = useSelector((state) => state.UserReducer);
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDangDat } =
    useSelector((state) => state.QuanLyDatVeReducer);

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const { thongTinDatVe } = thongTinND;

  useEffect(() => {
    dispatch(ktNDLogin());
    dispatch(LayChiTietDatVeAction(props.match.params.id));

    connection.on("datVeThanhCong", () => {
      dispatch(LayChiTietDatVeAction(props.match.params.id));
    });
    connection.invoke("loadDanhSachGhe", props.match.params.id);

    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
      dsGheKhachDat = dsGheKhachDat?.filter(
        (item) => item.taiKhoan !== thongTinND.taiKhoan
      );

      let arrGheKhachDat = dsGheKhachDat?.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);

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
      title: "B???n Ch??a Ch???n Gh???",

      onOk() {},
    });
  };
  const success = () => {
    Modal.success({
      content: "?????t V?? Th??nh C??ng",
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
                Ng??y Gi??? Chi???u:
                <span className=" text-danger  pl-3">
                  {` ${moment(item.ngayDat).format("hh:mm A - DD-MM-YYYY")}`}
                </span>
              </div>
              <div className="card-text">
                T??n C???m R???p:
                <span className=" text-danger ml-1">
                  {" "}
                  {item.danhSachGhe[0].tenHeThongRap}
                </span>
              </div>
              <div className="card-text">
                R???p S??? :
                <span className=" text-danger ml-1">
                  {" "}
                  {item.danhSachGhe[0].tenRap}
                </span>
              </div>
              <p className=" card-text "></p>
              <div className=" p-1 row">
                <h6 className="text-center">Gh??? b???n ???? ?????t</h6>
                {item.danhSachGhe.map((chair, index) => {
                  return (
                    <span
                      style={{
                        color: "white",
                        backgroundColor: "brown",
                        borderRadius: "5px",
                      }}
                      className=" m-1 py-1 col-2 "
                      key={`so ghe ${index}`}
                    >
                      {chair.tenGhe}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Fragment>
      );
    });
  };
  return (
    <Fragment>
      <Tabs defaultActiveKey="1">
        <TabPane tab="* Ch???n Gh??? & ?????t V??" key="1">
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
                  <h5 className="screen">M??n h??nh</h5>
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
                      <th>Gh??? Ch??a ?????t</th>
                      <th>Gh??? ??ang ?????t</th>
                      <th>Gh??? Kh??ch ??ang ?????t</th>
                      <th>Gh??? Vip</th>
                      <th>Gh??? ???? ?????t</th>
                      <th>Gh??? B???n ?????t</th>
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
                {rederReducer(danhSachGheDangDat)} ??
              </h4>
              <hr />
              <h5>{thongTinPhim?.tenPhim}</h5>
              <p className="py-1 ">?????a ??i???m : {thongTinPhim?.diaChi}</p>
              <p>
                Ng??y Chi???u : {thongTinPhim?.ngayChieu} ---{" "}
                {thongTinPhim?.tenRap}
              </p>
              <hr />
              <div className="row">
                <div className="col-8 py-1">
                  {_.sortBy(danhSachGheDangDat, ["stt"])?.map((chair, index) => {
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
                <p>H??? T??n :</p>
                <h5>{thongTinND?.hoTen}</h5>
              </div>
              <div className="pt-1">
                <p>Email</p>
                <h5>{thongTinND?.email}</h5>
              </div>
              <div className="py-1">
                <p>S??? ??i???n Tho???i</p>
                <h5>{thongTinND?.soDT}</h5>
              </div>
              <div className="btnButton">
                <button
                  onClick={() => {
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
                  ?????T V??
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
                  H???y
                </button>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="L???ch S??? ?????t V??" key="2">
          <div className="container">
            <div className="w-50 mx-auto py-3 text-center">
              <h4 className="text-success p-1">
                L???ch S??? ?????t V?? C???a Kh??ch H??ng
              </h4>
              <h6>
                H??y xem th??ng tin th???i gian v?? ?????a ch??? ????? xem phim vui v??? nh?? !
              </h6>
            </div>
            <div className="p-3 row">{renderLichSuDatVe()}</div>
          </div>
        </TabPane>
      </Tabs>
    </Fragment>
  );
}