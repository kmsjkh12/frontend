import { all, fork } from "redux-saga/effects";
import foodSaga from "./foodSaga";
export default function* rootSaga() {
  yield all([fork(foodSaga)]);
}
