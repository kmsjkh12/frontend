import React from "react";
import { styled } from "styled-components";
import MealTimeFoodCard from "./MealTimeFoodCard";
import { useSelector } from "react-redux";

const MealTimeContent = ({ visible, foodList }) => {
  const { day } = useSelector((state) => state.foodRedux);

  const dev = [1, 2, 3, 4];
  return (
    <div>
      {foodList.map((d) => (
        <MealTimeFoodCard d={d} />
      ))}
    </div>
  );
};

export default MealTimeContent;
