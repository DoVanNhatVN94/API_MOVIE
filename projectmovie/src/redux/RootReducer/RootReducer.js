import { combineReducers } from "redux";
import { ListMovieReducer } from "../Reducer/ListMovieReducer/ListMovieReducer"

export const rootReducer = combineReducers({
  ListMovieReducer,
});
