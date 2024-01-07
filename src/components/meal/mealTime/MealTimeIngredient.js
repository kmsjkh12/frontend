import React from "react";
import { styled } from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import * as fun from "../../public/func/FoodFunc";
const MealTimeIngredient = ({ foodList }) => {
  return (
    <MealTimeIngredientWrapper>
      <IntakeWrapper>
        <SpanTag className="지">{Math.round(fun.지_합산(foodList))}</SpanTag>
      </IntakeWrapper>
      <IntakeWrapper>
        <SpanTag className="탄">{Math.round(fun.탄_합산(foodList))}</SpanTag>
      </IntakeWrapper>
      <IntakeWrapper>
        <SpanTag className="단">{Math.round(fun.단_합산(foodList))}</SpanTag>
      </IntakeWrapper>
      <IntakeWrapper>
        <SpanTag className="종합 칼로리">
          {Math.round(fun.칼_합산(foodList))}
        </SpanTag>
      </IntakeWrapper>
      <IntakeWrapper>
        <SpanTag>
          <DownOutlined />
        </SpanTag>
      </IntakeWrapper>
    </MealTimeIngredientWrapper>
  );
};

const MealTimeIngredientWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
`;

const IntakeWrapper = styled.div`
  width: 20%;
  padding: 5px 0px 0px 20px;
`;

const SpanTag = styled.span`
  width: 100%;
  height: 100%;
  color: black;
  font-size: 14px;
  position: relative;
  left: 30%;
`;
export default MealTimeIngredient;
