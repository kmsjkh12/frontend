import React from "react";
import MealTimeFoodCard from "./MealTimeFoodCard";

const MealTimeContent = ({ foodList, onClickDetails }) => {
  return (
    <div>
      {foodList.map((d, index) => (
        <MealTimeFoodCard d={d} key={index} onClickDetails={onClickDetails} />
      ))}
    </div>
  );
};

export default MealTimeContent;
