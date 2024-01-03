export const SEARCH_FOOD_REQUEST = "SEARCH_FOOD_REQUEST";
export const SEARCH_FOOD_SUCCESS = "SEARCH_FOOD_SUCCESS";
export const SEARCH_FOOD_FAILURE = "SEARCH_FOOD_FAILURE";

// 인원 선택 리스트

export const CHOICE_FOOD = "CHOICE_FOOD";
export const NOT_CHOICE_FOOD = "NOT_CHOICE_FOOD";
export const PAGE_PLUS = "PAGE_PLUS";
export const PAGE_INIT = "PAGE_INIT";
export const MOVE_DAY = "MOVE_DAY";
const initalState = {
  search_food_loading: false,
  search_food_done: false,
  search_food_error: false,

  choice_food_loading: false,
  choice_food_done: false,
  choice_food_error: false,
  day: "",
  page: 0,
  search_food: [],
  last: "",
  choice_food: [],
  foodname: "",
  prevfoodname: "",
  nowfoodname: "",

  fat: 0,
  syn: 0,
  protein: 0,
  recommend: 0,
  sum: 0,
};

const foodRedux = (state = initalState, action) => {
  switch (action.type) {
    case MOVE_DAY:
      return {
        ...state,
        day: action.data,
      };
    // 좌석 조회 케이스들
    case SEARCH_FOOD_REQUEST:
      return {
        ...state,
        search_food_loading: true,
        search_food_done: false,
        search_food_error: false,
      };
    case SEARCH_FOOD_SUCCESS:
      let food_scroll;
      //검색 후
      if (state.foodname === action.foodname) {
        food_scroll = state.search_food.concat(action.data.content);
      } else if (state.foodname !== action.foodname) {
        food_scroll = action.data.content;
      }
      return {
        ...state,
        search_food_loading: false,
        search_food_done: true,
        search_food_error: false,
        search_food: food_scroll,
        last: action.data.last,
        foodname: action.foodname,
        page: action.data.pageable.pageNumber + 1,
      };
    case SEARCH_FOOD_FAILURE:
      return {
        ...state,
        search_food_loading: false,
        search_food_done: false,
        search_food_error: true,
        foodname: "",
      };

    case CHOICE_FOOD:
      const update_fat = parseInt(state.fat) + parseInt(action.data.fat);
      const update_protein =
        parseInt(state.protein) + parseInt(action.data.protein);
      const update_syn = parseInt(state.syn) + parseInt(action.data.syn);
      const update_sum =
        parseInt(state.sum) + parseInt(action.data.foodCalorie);
      return {
        ...state,
        choice_food: [...state.choice_food, action.data],
        fat: update_fat,
        syn: update_syn,
        protein: update_protein,
        recommend: "",
        sum: update_sum,
      };
    case NOT_CHOICE_FOOD:
      const delete_fat = parseInt(state.fat) - parseInt(action.data.fat);
      const delete_protein =
        parseInt(state.protein) - parseInt(action.data.protein);
      const delete_syn = parseInt(state.syn) - parseInt(action.data.syn);
      const delete_sum =
        parseInt(state.sum) - parseInt(action.data.foodCalorie);

      const food = state.choice_food.filter((el) => el.id !== action.data.id);
      return {
        ...state,
        choice_food: food,
        fat: delete_fat,
        syn: delete_syn,
        protein: delete_protein,
        recommend: "",
        sum: delete_sum,
      };
    default:
      return state;
  }
};
export default foodRedux;
