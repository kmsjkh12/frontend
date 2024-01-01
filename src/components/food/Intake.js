import React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const Intake = () => {
  var metabolic;
  const { fat, syn, protein, recommend, sum } = useSelector(
    (state) => state.foodRedux
  );
  const { calorie } = useSelector((state) => state.healthRedux);
  const eat = (type, cm, kg, age) => {
    if (type === "man") {
      metabolic = 66.5 + 13.75 * kg + 5.003 * cm - 6.75 * age;
    } else if (type === "woman") {
      metabolic = 655.1 + 9.563 * kg + 1.85 * cm - 4.676 * age;
    }
    console.log(metabolic);
  };
  const recommend_s = () => {
    return (parseInt(sum) / 2700) * 100;
  };
  /*
  const protein = (kg) => {
    return kg * 1.2;
  };
  const fat = () => {
    return metabolic % 30;
  };
  const carbohydrate = () => {
    return metabolic % 55;
  };
*/
  return (
    <IntakeWrapper>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>지방</IntakeTitle>
          <IntakeNumber>{fat}</IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>탄수</IntakeTitle>
          <IntakeNumber>{syn}</IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>단백질</IntakeTitle>
          <IntakeNumber>{protein}</IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>권장</IntakeTitle>
          <IntakeNumber>{parseInt(recommend_s())}%</IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
      <IntakeDiv>
        <IntakeInfo>
          <IntakeTitle>종합</IntakeTitle>
          <IntakeNumber>{sum}</IntakeNumber>
        </IntakeInfo>
      </IntakeDiv>
    </IntakeWrapper>
  );
};

const IntakeWrapper = styled.div`
  width: 300px;
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
