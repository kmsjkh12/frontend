import React from "react";
import { styled } from "styled-components";
import IntakeGraph from "../../public/IntakeGraph";
import { useSelector } from "react-redux";
const MealFoodDetailInfo = () => {
  const { details_food } = useSelector((state) => state.foodRedux);
  const data = [
    { id: 0, value: details_food.syn, label: "탄수화물" },
    { id: 1, value: details_food.protein, label: "단백질" },
    { id: 2, value: details_food.fat, label: "지방" },
    { id: 3, value: details_food.energy, label: "열량" },
    { id: 4, value: details_food.nat, label: "나트륨" },
    { id: 5, value: details_food.cal, label: "칼로리" },
  ];
  return (
    <MealFoodDetailInfoWrapper>
      <IntakeGraph data={data} />
    </MealFoodDetailInfoWrapper>
  );
};
const MealFoodDetailInfoWrapper = styled.div``;
export default MealFoodDetailInfo;
