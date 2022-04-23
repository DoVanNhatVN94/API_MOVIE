import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { LayChiTietPhim } from "../../redux/action/QuanLyPhim/QuanLyPhim";

import "../../asset/css/DetailPage/DetailPage.css";

export default function DetailPage(props) {
  const match = useRouteMatch();

  console.log(match);
  const dispatch = useDispatch();

  const { detailMovie } = useSelector((state) => state.ListMovieReducer);

  console.log(detailMovie, "thong tin phim lay ddc");

  useEffect(() => {
    dispatch(LayChiTietPhim(match.params.id));
  }, []);

  return (
    <section
      className="detail_bg container-fluid py-5"
      style={{
        background: "#baa",
        maxWidth: "100% !important",
        borderTop: "1px solid",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="movie-details-banner">
              <div className="row">
                <div className="col-lg-3 col-sm-4">
                  <div className="details-banner-thumb">
                    <img
                      className="img-fluid"
                      src={detailMovie.hinhAnh}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8">
                  <div className="details-banner-info">
                    <h3 style={{ color: "#22272b" }}>{detailMovie.tenPhim}</h3>
                    <p style={{ color: "#22272b" }} />

                    <a
                      href={detailMovie.trailer}
                      className="popup-youtube"
                    >
                      <i className="fa fa-play" />
                      Trailer
                    </a>
                  </div>
                  <div className="movie-details-page-box">
                    <div className="tv-panel-list">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade active show"
                          id="pills-brief"
                          role="tabpanel"
                          aria-labelledby="pills-brief-tab"
                        >
                          <div className="tab-movies-details">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="tab-body">
                                  <p>{detailMovie.moTa}</p>
                                </div>
                              </div>
                            </div>
                            {/* End Row */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
