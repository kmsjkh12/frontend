import React, { useState } from "react";
import { styled } from "styled-components";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import MealTimeContent from "./MealTimeContent";
const MealTimeTitle = ({ time, cal, onClickFood, foodList }) => {
  const [visible, setVisible] = useState(false); //메뉴 더보기

  const onClickVisible = () => {
    setVisible(!visible);
  };

  return (
    <MealTimeComponent>
      <MealTimeTop
        onClick={() => {
          onClickFood();
        }}
      >
        <WhatMealTime>
          <Time>{time}식사</Time>
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
        <IntakeWrapper>
          <SpanTag>10</SpanTag>
        </IntakeWrapper>
        <IntakeWrapper>
          <SpanTag>10</SpanTag>
        </IntakeWrapper>
        <IntakeWrapper>
          <SpanTag>10</SpanTag>
        </IntakeWrapper>
        <IntakeWrapper>
          <SpanTag>10</SpanTag>
        </IntakeWrapper>
        <IntakeWrapper>
          <SpanTag>
            <DownOutlined />
          </SpanTag>
        </IntakeWrapper>
      </MealTimeBottom>
      <MealVisible className={`${visible ? " visible" : "none"}`}>
        <MealTimeContent visible={visible} foodList={foodList} />
      </MealVisible>
    </MealTimeComponent>
  );
};

const MealTimeComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  border-radius: 6px;
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
  background-color: #a9a9a9;
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
`;
const Time = styled.span`
  font-size: 17px;
  position: relative;
  top: 10px;
  left: 20%;
  font-weight: bold;
`;
const Calorie = styled.span`
  font-weight: bold;
  position: relative;
  top: 10%;
`;

const Plus = styled.div`
  width: 15%;
`;

const IntakeWrapper = styled.div`
  width: 20%;
  padding: 5px 0px 0px 20px;
`;

const SpanTag = styled.span`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 20px;
  position: relative;
  left: 30%;
`;
const MealVisible = styled.div`
  visibility: hidden;
  width: 100%;
  height: 0vh;
  transition: all 0.3s;
  &.visible {
    visibility: visible;
    height: 250px;
  }
`;
export default MealTimeTitle;
