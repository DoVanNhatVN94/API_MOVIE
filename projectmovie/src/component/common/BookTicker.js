import React, { useEffect} from "react";
import { useSelector } from "react-redux";




export default function BookTicker() {
  const {arrMovie}=useSelector(state=>state.ListMovieReducer)
  
  console.log(arrMovie);
  useEffect(() => {
    console.log("didmount");
    // callAPI();
  }, []);

  const renderPhim = () => {
    //map duyet mangPhim
    return arrMovie.map((phim) => {
      return (
        <div className="col-2" key={phim.maPhim}>
          <div className="card">
            <img src={phim.hinhAnh} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{phim.tenPhim}</h5>
              <p className="card-text">{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  // const callAPI = async () => {
  //   try {
  //     let result = await axios({
  //       method: "get",
  //       url: QUAN_LY_PHIM_LAY_DANH_SACH_PHIM,
  //       headers: {
  //         TokenCybersoft: TOKEN_MOVIE,
  //       },
  //     });
  //     console.log(result.data.content);
  //     await setMangPhim(result.data.content);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="container-fluid row">
      {console.log("render")}
      {renderPhim()}
    </div>
  );
}
