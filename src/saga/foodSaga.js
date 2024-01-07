import { all, takeLatest, fork, put, call } from "redux-saga/effects";
import { http } from "../lib/http";
import {
  SEARCH_FOOD_FAILURE,
  SEARCH_FOOD_REQUEST,
  SEARCH_FOOD_SUCCESS,
} from "../redux/foodRedux";
import {
  ADD_DATA_REQUEST,
  MY_DATA_FAILURE,
  MY_DATA_REQUEST,
  MY_DATA_SUCCESS,
} from "../redux/userRedux";
const convertToInteger = (value) => parseInt(value, 10);

//음식 검색
function* searchFoodLoad(data) {
  const result = yield call(searchFood, data.data);

  const newDataArray = result.data.body.content.map((data) => ({
    foodid: data.id,
    foodCode: data.foodCode,
    dbBase: data.dbBase,
    foodname: data.foodname,
    foodMaker: data.foodMaker,
    foodCategory: data.foodCategory,
    foodDetailCategory: data.foodDetailCategory,
    foodcount: convertToInteger(data.foodcount),
    serving: data.serving,
    cal: convertToInteger(data.cal),
    protein: convertToInteger(data.protein),
    fat: convertToInteger(data.fat),
    syn: convertToInteger(data.syn),
    nat: convertToInteger(data.nat),
  }));
  if (result.status === 200) {
    yield put({
      type: SEARCH_FOOD_SUCCESS,
      data: result.data.body,
      food_data: newDataArray,
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

function* userFoodLoad(data) {
  const result = yield call(userFood, data.data);
  if (result.status === 200) {
    yield put({
      type: MY_DATA_SUCCESS,
      data: result.data,
    });
  } else {
    yield put({
      type: MY_DATA_FAILURE,
      error: result.response.status,
    });
  }
}

// 백엔드 호출
async function userFood(data) {
  try {
    const response = await http.get(
      `/save-food-server/finddata?userid=${data.userid}&mealtime=${data.mealtime}&mealdate=${data.mealdate}`
    );
    return response;
  } catch (error) {
    return error;
  }
}

function* addFoodLoad(data) {
  console.log(data);

  const result = yield call(addFood, data.data);
  console.log(result);

  if (result.status === 200) {
    yield put({
      type: MY_DATA_SUCCESS,
      data: result.data,
    });
  } else {
    yield put({
      type: MY_DATA_FAILURE,
      data: result.data,
    });
  }
}

// 백엔드 호출
async function addFood(data) {
  console.log(data);
  return await http
    .post(`/save-food-server/saveas`, data.card)
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

function* addFoodSaga() {
  yield takeLatest(ADD_DATA_REQUEST, addFoodLoad);
}

function* userFoodSaga() {
  yield takeLatest(MY_DATA_REQUEST, userFoodLoad);
}

export default function* foodSaga() {
  yield all([fork(searchFoodSaga), fork(userFoodSaga), fork(addFoodSaga)]);
}
