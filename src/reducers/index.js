import { combineReducers } from "redux";
import { HomeReducer } from "./HomeReducer";

export const rootReducer = combineReducers({
  Home: HomeReducer
});
