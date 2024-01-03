import { combineReducers } from "redux";
import foodRedux from "./foodRedux";
import healthRedux from "./healthRedux";
import userRedux from "./userRedux";
const rootReducer = combineReducers({ foodRedux, healthRedux, userRedux });
export default rootReducer;
