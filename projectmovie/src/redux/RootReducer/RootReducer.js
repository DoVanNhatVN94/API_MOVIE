import { combineReducers } from "redux";
import { ListMovieReducer } from "../Reducer/ListMovieReducer/ListMovieReducer"
import {ModalReducer} from "../Reducer/ModalReducer/ModalReducer"
import {ListMovieTheaterReducer} from "../Reducer/ListMovieTheaterReducer/ListMovieTheaterReducer"

export const rootReducer = combineReducers({
  ListMovieReducer,
  ModalReducer,
  ListMovieTheaterReducer,
});
;