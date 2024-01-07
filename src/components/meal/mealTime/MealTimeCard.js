import React, { useState } from "react";
import { styled } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import MealTimeContent from "./MealTimeContent";
import MealTimeIngredient from "./MealTimeIngredient";
const MealTimeCard = ({
  time,
  cal,
  onClickFood,
  foodList,
  date,
  foodCount,
  onClickDetails,
}) => {
  const [visible, setVisible] = useState(false); //메뉴 더보기

  const onClickVisible = () => {
    setVisible(!visible);
    console.log(foodCount);
  };
  let food;

  if (time === "morning") {
    food = "아침식사";
  } else if (time === "launch") {
    food = "점심식사";
  } else {
    food = "저녁식사";
  }
  return (
    <MealTimeComponent>
      <MealTimeTop
        onClick={() => {
          onClickFood(time, date);
        }}
      >
        <WhatMealTime>
          <Time>{food}</Time>
        </WhatMealTime>
        <CalorieWrapper>
          <Calorie>{cal}</Calorie> <br />
          칼로리
        </CalorieWrapper>
        <Plus>
          <PlusOutlined
            style={{
              position: "relative",
              fontWeight: "bold",
              fontSize: "25px",
              top: "20%",
              left: "10%",
            }}
          />
        </Plus>
      </MealTimeTop>
      <MealTimeBottom
        onClick={() => {
          onClickVisible();
        }}
      >
        <MealTimeIngredient foodList={foodList} />
      </MealTimeBottom>
      <MealVisible
        className={`${visible ? " visible" : "none"}`}
        foodCount={foodCount}
      >
        <MealTimeContent
          visible={visible}
          foodList={foodList}
          foodCount={foodCount}
          onClickDetails={onClickDetails}
        />
      </MealVisible>
    </MealTimeComponent>
  );
};

const MealTimeComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid black;
  flex-direction: column;
  margin-bottom: 20px;
`;
const MealTimeTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  cursor: pointer;
`;
const MealTimeBottom = styled.div`
  width: 100%;
  height: 50%;
  border-top: 1px solid black;
  background-color: rgb(247, 247, 247);
  display: flex;
`;
const WhatMealTime = styled.div`
  width: 60%;
  height: 100%;
`;
const CalorieWrapper = styled.div`
  width: 25%;
  height: 100%;
  text-align: center;
  font-size: 14px;
`;
const Time = styled.span`
  font-size: 17px;
  position: relative;
  top: 7px;
  left: 20%;
  font-weight: 500;
`;
const Calorie = styled.span`
  font-weight: 600;
  position: relative;
  top: 10%;
`;

const Plus = styled.div`
  width: 15%;
`;

const MealVisible = styled.div`
  visibility: hidden;
  width: 100%;
  height: 0vh;
  transition: all 0.3s;
  &.visible {
    visibility: visible;
    height: ${(props) => props.foodCount * 60}px;
  }
`;
export default MealTimeCard;
