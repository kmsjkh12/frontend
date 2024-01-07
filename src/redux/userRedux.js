import * as func from "../components/public/func/mealFunc";

export const ADD_FOOD = "ADD_FOOD";
export const LOGIN = "LOGIN";

export const MY_DATA_REQUEST = "MY_DATA_REQUEST";
export const MY_DATA_SUCCESS = "MY_DATA_SUCCESS";
export const MY_DATA_FAILURE = "MY_DATA_FAILURE";

export const ADD_DATA_REQUEST = "ADD_DATA_REQUEST";
export const ADD_DATA_SUCCESS = "ADD_DATA_SUCCESS";
export const ADD_DATA_FAILURE = "ADD_DATA_FAILURE";
const initalState = {
  my_data_loadning: false,
  my_data_done: false,
  my_data_error: null,
  add_data_loadning: false,
  add_data_done: false,
  add_data_error: null,
  user: {
    id: "user-1234",
    password: "1234",
    키: 177,
    몸무게: 83,
    기초대사량: 0,
    권장칼로리: 0,
  },

  user_save_data: [],
};

const userRedux = (state = initalState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
      };

    case MY_DATA_REQUEST:
      return {
        ...state,
        my_data_loadning: true,
        my_data_done: false,
        my_data_error: null,
      };
    case MY_DATA_SUCCESS:
      return {
        ...state,
        my_data_loadning: false,
        my_data_done: true,
        my_data_error: null,
        user_save_data: action.data.body,
      };
    case MY_DATA_FAILURE:
      return {
        ...state,
        my_data_loadning: false,
        my_data_done: false,
        my_data_error: action.error,
      };

    case ADD_DATA_REQUEST:
      return {
        ...state,
        add_data_loadning: true,
        add_data_done: false,
        add_data_error: null,
      };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        add_data_loadning: false,
        add_data_done: true,
        add_data_error: null,
      };
    case ADD_DATA_FAILURE:
      return {
        ...state,
        add_data_loadning: false,
        add_data_done: false,
        add_data_error: action.error,
      };
    default:
      return state;
  }
};
export default userRedux;
