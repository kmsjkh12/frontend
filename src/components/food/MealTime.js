import React, { useState } from "react";
import { styled } from "styled-components";
import { PlusOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
const MealTime = ({ page, setPage }) => {
  return (
    <MealTimeWrapper>
      <MealTimeComponent>
        <MealTimeTop
          onClick={() => {
            setPage("2");
          }}
        >
          <WhatMealTime>
            <Time>아침 식사</Time>
          </WhatMealTime>
          <CalorieWrapper>
            <Calorie>300</Calorie> <br />
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
        <MealTimeBottom>
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
      </MealTimeComponent>
      <MealTimeComponent>
        <MealTimeTop>
          <WhatMealTime>
            <Time>점심 식사</Time>
          </WhatMealTime>
          <CalorieWrapper>
            <Calorie>300</Calorie> <br />
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
        <MealTimeBottom>
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
      </MealTimeComponent>
      <MealTimeComponent>
        <MealTimeTop>
          <WhatMealTime>
            <Time>저녁 식사</Time>
          </WhatMealTime>
          <CalorieWrapper>
            <Calorie>300</Calorie> <br />
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
        <MealTimeBottom>
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
      </MealTimeComponent>
    </MealTimeWrapper>
  );
};

const MealTimeWrapper = styled.div`
  width: 300px;
  margin: 40px auto auto auto;
  height: 100px;
`;

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
  top: 30%;
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
  padding: 12px 0px 0px 20px;
`;

const SpanTag = styled.span`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 20px;
  position: relative;
  left: 30%;
`;
export default MealTime;
