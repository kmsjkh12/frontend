export const L_METABOLIC = "L_METABOLIC";
export const L_HEALTH = "L_HEALTH";

const initalState = {
  search_food_loading: false,

  height: "",
  weight: "",
  age: "",
  health: "",
  type: "",
  metabolic: "",
  calorie: "",
};

const healthRedux = (state = initalState, action) => {
  switch (action.type) {
    // 좌석 조회 케이스들
    case L_HEALTH:
      return {
        ...state,
        metabolic: parseInt(action.data.meta),
        calorie: parseInt(action.data.cal),
      };
    default:
      return state;
  }
};
export default healthRedux;
