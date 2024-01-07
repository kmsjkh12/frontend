import React from "react";
import { styled } from "styled-components";
import MealTimeCard from "./MealTimeCard";
import * as fun from "../../public/func/FoodFunc";
const MealTime = ({ data, onClickFood, onClickDetails }) => {
  return (
    <MealTimeWrapper>
      <MealTimeCard
        time={"morning"}
        foodList={data.morning}
        foodCount={data.morning.length}
        date={data.date}
        cal={Math.round(fun.칼_합산(data.morning))}
        onClickFood={onClickFood}
        onClickDetails={onClickDetails}
      />
      <MealTimeCard
        time={"launch"}
        foodList={data.launch}
        foodCount={data.launch.length}
        date={data.date}
        cal={Math.round(fun.칼_합산(data.launch))}
        onClickFood={onClickFood}
        onClickDetails={onClickDetails}
      />
      <MealTimeCard
        time={"dinner"}
        foodList={data.dinner}
        foodCount={data.dinner.length}
        date={data.date}
        cal={Math.round(fun.칼_합산(data.dinner))}
        onClickFood={onClickFood}
        onClickDetails={onClickDetails}
      />
    </MealTimeWrapper>
  );
};

const MealTimeWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px auto;
`;
export default MealTime;
