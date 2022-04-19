import { combineReducers } from "redux";
import { ListMovieReducer } from "../Reducer/ListMovieReducer/ListMovieReducer"
import {ModalReducer} from "../Reducer/ModalReducer/ModalReducer"

export const rootReducer = combineReducers({
  ListMovieReducer,
  ModalReducer,
});
