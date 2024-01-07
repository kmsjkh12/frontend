import React, { useState } from "react";
import { styled } from "styled-components";
import FoodCard from "./FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { CHOICE_FOOD, NOT_CHOICE_FOOD } from "../../../redux/foodRedux";
import InfiniteScroll from "./InfiniteScroll";
import { ADD_FOOD } from "../../../redux/userRedux";
const FoodList = ({ foodname, mealTime, date, onClickDetails }) => {
  const dispatch = useDispatch();
  const { choice_food, day } = useSelector((state) => state.foodRedux);
  const { user } = useSelector((state) => state.userRedux);
  const onChangeHandler = (checked, card) => {
    if (checked) {
      dispatch({
        type: CHOICE_FOOD,
        data: { card, mealdate: day, id: user.id, mealtime: mealTime },
      });
    } else {
      dispatch({
        type: NOT_CHOICE_FOOD,
        data: card,
      });
    }
  };

  return (
    <FoodListWrapper>
      <InfiniteScroll
        foodname={foodname}
        onChangeHandler={onChangeHandler}
        onClickDetails={onClickDetails}
        mealTime={mealTime}
      />
    </FoodListWrapper>
  );
};
const FoodListWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
`;

export default FoodList;
