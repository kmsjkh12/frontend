import React from "react";
import { styled } from "styled-components";
import MealDetailCard from "../mealDetail/MealDetailCard";
import MealFoodDetailInfo from "../mealDetail/MealFoodDetailInfo";

const FoodDetailComponent = ({ cs, onClickDetails, mealTime }) => {
  return (
    <FoodDetailComponentWrapper className={cs}>
      <MealDetailCard onClickDetails={onClickDetails} mealTime={mealTime} />
      <MealFoodDetailInfo />
    </FoodDetailComponentWrapper>
  );
};
const FoodDetailComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  &.card {
    opacity: 0;
    transform: translateY(15px);
    transition: opacity 1s ease, transform 1s ease;
  }
  &.card.in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
export default FoodDetailComponent;
