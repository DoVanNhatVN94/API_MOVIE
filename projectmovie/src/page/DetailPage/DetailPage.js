import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { LayChiTietPhim } from "../../redux/action/QuanLyPhim/QuanLyPhim";

import "../../asset/css/DetailPage/DetailPage.css";

export default function DetailPage(props) {
  const match = useRouteMatch();
  const history =useHistory()

  const dispatch = useDispatch();

  const { detailMovie } = useSelector((state) => state.ListMovieReducer);



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

                    
                  </div>
                  <div className="movie-details-page-box">
                   
                      <div className="tab-content" id="pills-tabContent">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="tab-body">
                              <p>{detailMovie.moTa}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                    <div className="detail_btn row w-50">
                    <a href={detailMovie.trailer} className="col-6 btn btn-outline-primary">
                      <i className="fa fa-play" />
                      Trailer
                    </a>
                    <button type="button" className="btn btn-outline-success col-6" onClick={()=>{
                      history.push(`/bookmovie/01`)
                    }}>Add</button>
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
