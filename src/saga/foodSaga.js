import { all, takeLatest, fork, put, call } from "redux-saga/effects";
import { http } from "../lib/http";
import {
  SEARCH_FOOD_FAILURE,
  SEARCH_FOOD_REQUEST,
  SEARCH_FOOD_SUCCESS,
} from "../redux/foodRedux";

//음식 검색
function* searchFoodLoad(data) {
  const result = yield call(searchFood, data.data);
  console.log(result);
  console.log(result.data.body.pageable.pageNumber + 1);
  if (result.status === 200) {
    yield put({
      type: SEARCH_FOOD_SUCCESS,
      data: result.data.body,
      page: result.data.body.pageable.pageNumber + 1,
      foodname: data.data.foodname,
    });
  } else {
    yield put({
      type: SEARCH_FOOD_FAILURE,
    });
  }
}

// 백엔드 호출
async function searchFood(data) {
  return await http
    .get(
      `/food-server/food?foodname=${data.foodname}&page=${data.page}&pagesize=${data.size}`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

function* searchFoodSaga() {
  yield takeLatest(SEARCH_FOOD_REQUEST, searchFoodLoad);
}

export default function* foodSaga() {
  yield all([fork(searchFoodSaga)]);
}
