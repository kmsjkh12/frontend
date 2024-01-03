import React from "react";
import { styled } from "styled-components";
import MealTimeTitle from "./mealTime/MealTimeTitle";
import { useSelector } from "react-redux";
const MealTime = ({ onClickFood }) => {
  const { user_data } = useSelector((state) => state.userRedux);
  const { day } = useSelector((state) => state.foodRedux);

  return (
    <MealTimeWrapper>
      {user_data.map((v) => {
        if (v.date === day) {
          return (
            <>
              <MealTimeTitle
                time={"아침"}
                foodList={v.morning}
                cal={300}
                onClickFood={onClickFood}
              />
              <MealTimeTitle
                time={"점심"}
                foodList={v.launch}
                cal={300}
                onClickFood={onClickFood}
              />
              <MealTimeTitle
                time={"저녁"}
                foodList={v.dinner}
                cal={300}
                onClickFood={onClickFood}
              />
            </>
          );
        }
      })}
    </MealTimeWrapper>
  );
};

const MealTimeWrapper = styled.div`
  width: 300px;
  height: 100%;
  margin: 20px auto;
`;
export default MealTime;
