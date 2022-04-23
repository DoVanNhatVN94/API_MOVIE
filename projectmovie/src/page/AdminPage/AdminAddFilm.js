import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminAddFilm() {
    let { arrMovie } = useSelector(state => state.ListMovieReducer);
    console.log(arrMovie)

    let dispatch = useDispatch();

    useEffect(() => {
        callAPI();
    }, [])

    const callAPI = () => {
        // const actionFunc = layDanhSachPhim("GP02");
        // dispatch(actionFunc);
    }

    return (
        <form>
            <h2 className='mb-3'>Thêm phim mới</h2>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Tên phim:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Trailer:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Mô tả:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" />
                </div>
            </div>
            <fieldset className="form-group row">
                <legend className="col-form-label col-sm-2 float-sm-left pt-0">Tình trạng:</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="gridRadios1">
                            Đang chiếu
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="gridRadios2">
                            Sắp chiếu
                        </label>
                    </div>
                </div>
            </fieldset>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Hình ảnh:</label>
                <div className="col-sm-10">
                    <input type="file" className="form-control-file" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Thêm phim</button>
                </div>
            </div>
        </form>
    )
}
