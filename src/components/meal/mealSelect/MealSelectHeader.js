import React from "react";
import { styled } from "styled-components";

const MealSelectHeader = ({ onClickFood, mealTime, date }) => {
  let foodtime;

  if (date === "morning") {
    foodtime = "아침식사";
  } else if (date === "launch") {
    foodtime = "점심식사";
  } else {
    foodtime = "저녁식사";
  }
  return (
    <MealSelectHeaderWrapper>
      <MealSelectLeftWrapper>
        <MealTime>
          <Time>{foodtime}</Time>
        </MealTime>
        <MealDate>
          <Date>{date}</Date>
        </MealDate>
      </MealSelectLeftWrapper>
      <MealSelectRightWrapper>
        <CloseWrapper
          onClick={() => {
            onClickFood();
          }}
        >
          <Close>취소</Close>
        </CloseWrapper>
      </MealSelectRightWrapper>
    </MealSelectHeaderWrapper>
  );
};
const MealSelectHeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
`;
const MealSelectLeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin: 5px;
`;
const MealTime = styled.div`
  width: 100%;
  heigt: 50%;
`;
const Time = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
const MealDate = styled.div`
  width: 100%;
  heigt: 50%;
`;
const Date = styled.span`
  font-size: 14px;
`;
const MealSelectRightWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin: 5px;
`;
const CloseWrapper = styled.div`
  margin: 20px auto;
  float: right;
  cursor: pointer;
`;
const Close = styled.span`
  color: green;
  font-size: 15px;
`;
export default MealSelectHeader;
