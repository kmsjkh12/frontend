import { combineReducers } from "redux";
import foodRedux from "./foodRedux";
import healthRedux from "./healthRedux";
const rootReducer = combineReducers({ foodRedux, healthRedux });
export default rootReducer;
