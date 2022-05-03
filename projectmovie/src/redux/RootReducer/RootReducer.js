import { combineReducers } from "redux";
import { ListMovieReducer } from "../Reducer/ListMovieReducer/ListMovieReducer"
import {ModalReducer} from "../Reducer/ModalReducer/ModalReducer"
import {ListMovieTheaterReducer} from "../Reducer/ListMovieTheaterReducer/ListMovieTheaterReducer"
import {UserReducer} from "../Reducer/UserReducer/UserReducer"
import {QuanLyDatVeReducer} from "../Reducer/QuanLyDatVeReducer/QuanLyDatVeReducer"
import {LoadingReducer} from "../Reducer/LoadingReducer/LoadingReducer"

export const rootReducer = combineReducers({
  ListMovieReducer,
  ModalReducer,
  ListMovieTheaterReducer,
  UserReducer,
  QuanLyDatVeReducer,
  LoadingReducer,
});
;