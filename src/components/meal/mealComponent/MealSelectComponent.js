//필요 기능들을 종합하는 컴포넌트

import React from "react";
import { styled } from "styled-components";
import FoodSelect from "../mealSelect/FoodSelect";
import MealSelectHeader from "../mealSelect/MealSelectHeader";
import { useDispatch } from "react-redux";
import { ADD_FOOD } from "../../../redux/userRedux";
const MealSelectComponent = ({
  onClickFood,
  cs,
  mealTime,
  date,
  onClickDetails,
}) => {
  const dispatch = useDispatch();

  return (
    <MealSelectComponentWrapper className={cs}>
      <MealSelectHeader
        onClickFood={onClickFood}
        mealTime={mealTime}
        date={date}
      />
      <FoodSelect
        mealTime={mealTime}
        date={date}
        onClickPage={onClickFood}
        onClickDetails={onClickDetails}
      />
    </MealSelectComponentWrapper>
  );
};

const MealSelectComponentWrapper = styled.div`
  &.card {
    opacity: 0;
    transform: translateY(15px);
    transition: opacity 1s ease, transform 1s ease;
  }
  &.card.in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default MealSelectComponent;
