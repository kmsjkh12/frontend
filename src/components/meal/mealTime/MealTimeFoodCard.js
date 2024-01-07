import React from "react";
import { styled } from "styled-components";
import { RightOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { DETAILS_FOOD } from "../../../redux/foodRedux";

const MealTimeFoodCard = ({ d, onClickDetails }) => {
  const dispatch = useDispatch();
  return (
    <MealTimeFoodCardWrapper
      onClick={() => {
        dispatch({
          type: DETAILS_FOOD,
          data: d,
        });
        onClickDetails();
      }}
    >
      <FoodInfo>
        <FoodName>
          <Name>{d.foodname}</Name>
        </FoodName>
        <FoodWeight>
          <Count>{d.foodcount}개</Count>
          <Weight>{d.foodServing}g</Weight>
        </FoodWeight>
        <FoodIntake>
          <IntakeWrapper>
            <SpanTag>{d.fat}</SpanTag>
          </IntakeWrapper>
          <IntakeWrapper>
            <SpanTag>{d.syn}</SpanTag>
          </IntakeWrapper>
          <IntakeWrapper>
            <SpanTag>{d.protein}</SpanTag>
          </IntakeWrapper>
          <IntakeWrapper>
            <SpanTag>{d.cal}</SpanTag>
          </IntakeWrapper>
        </FoodIntake>
      </FoodInfo>
      <FoodCalorie>
        <CalorieWrapper>
          <Carlorie>{d.cal}</Carlorie>
          <br />
          칼로리
        </CalorieWrapper>
      </FoodCalorie>
      <MoreFood>
        <RightOutlined style={{ position: "relative", top: "20px" }} />
      </MoreFood>
    </MealTimeFoodCardWrapper>
  );
};

const MealTimeFoodCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  border-top: 1px solid black;
  display: flex;
`;
const FoodInfo = styled.div`
  width: 270px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const FoodName = styled.div`
  width: 270px;
  height: 20px;

  padding: 3px 5px 0px 25px;
`;
const Name = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const FoodWeight = styled.div`
  width: 100%;
  padding: 0px 5px 0px 25px;
`;
const Count = styled.span`
  font-size: 15px;
`;
const Weight = styled.span`
  margin-left: 30px;
  font-size: 15px;
`;
const FoodIntake = styled.div`
  width: 100%;
  display: flex;
`;
const FoodCalorie = styled.div`
  width: 30%;
  height: 100%;
`;

const IntakeWrapper = styled.div`
  width: 20%;
  padding: 0px 0px 0px 20px;
`;

const SpanTag = styled.span`
  width: 100%;
  color: black;
  font-size: 13px;
  position: relative;
  left: 30%;
`;
const CalorieWrapper = styled.div`
  width: 70%;
  height: 100%;
  font-size: 15px;
  text-align: center;
  padding-top: 10px;
`;
const Carlorie = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const MoreFood = styled.div`
  width: 10%;
  height: 100%;
`;
export default MealTimeFoodCard;
