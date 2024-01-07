import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { DETAILS_FOOD } from "../../../redux/foodRedux";
const FoodCard = ({
  foodname,
  cal,
  onChangeHandler,
  user,
  v,
  onClickDetails,
}) => {
  const dispatch = useDispatch();
  const { choice_food } = useSelector((state) => state.foodRedux);
  return (
    <FoodCardWrapper>
      <FoodInfoWrapper
        onClick={() => {
          dispatch({
            type: DETAILS_FOOD,
            data: v,
          });
          onClickDetails();
        }}
      >
        <FoodNameSpan>{foodname}</FoodNameSpan>
        <br />
        <FondCountSpan>1개</FondCountSpan>
        <FoodKalSpan>{cal}kal</FoodKalSpan>
      </FoodInfoWrapper>
      <FoodCheck>
        <FoodCheckBox
          type="checkbox"
          onChange={(e) => {
            onChangeHandler(e.currentTarget.checked, v);
          }}
          checked={
            choice_food.some((food) => food.foodid === v.foodid) ? true : false
          }
        />
        <label for="check1"></label>
      </FoodCheck>
    </FoodCardWrapper>
  );
};
const FoodCardWrapper = styled.li`
  width: 100%;
  height: 50px;
  border: 1px solid rgb(247, 247, 247);
  font-family: "omyu_pretty";
  display: flex;
`;

const FoodInfoWrapper = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px 0px 10px 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const FoodNameSpan = styled.span`
  font-size: 17px;
`;
const FondCountSpan = styled.span`
  color: green;
`;

const FoodKalSpan = styled.span`
  margin-left: 20px;
`;
const FoodCheck = styled.div`
  width: 10%;
  border-left: 1px solid rgb(247, 247, 247);
  float: right;
`;
const FoodCheckBox = styled.input`
  position: relative;
  top: 30%;
  left: 80%;
`;
export default FoodCard;
