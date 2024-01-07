import React from "react";
import { styled } from "styled-components";
import * as fun from "../../public/func/FoodFunc";
const Intake = ({ data }) => {
  return (
    <IntakeWrapper>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>지방</IntakeTitle>
          <IntakeNumber>{Math.round(fun.extractTotalFat(data))}</IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>탄수</IntakeTitle>
          <IntakeNumber>{Math.round(fun.extractTotalSyn(data))}</IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>단백질</IntakeTitle>
          <IntakeNumber>
            {Math.round(fun.extractTotalProtein(data))}
          </IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>권장</IntakeTitle>
          <IntakeNumber>
            {Math.round(fun.권장섭취량_계산(fun.extractTotalCal(data)))}%
          </IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>종합</IntakeTitle>
          <IntakeNumber>{Math.round(fun.extractTotalCal(data))}</IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
    </IntakeWrapper>
  );
};

const IntakeWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  background-color: rgb(247, 247, 247);
`;

const IntakeDiv = styled.div`
  width: 20%;
  height: 100%;
  text-align: center;
`;
const IntakeInfo = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const IntakeTitle = styled.span`
  width: 100%;
  float: left;
  padding-bottom: 10px;
  color: grey;
`;

const IntakeNumber = styled.span`
  width: 100%;
  float: left;
  font-size: 14px;
`;
export default Intake;
