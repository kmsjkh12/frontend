import React, { useState } from "react";
import { styled } from "styled-components";
import FoodCard from "./FoodCard";
import { useDispatch } from "react-redux";
import { CHOICE_FOOD, NOT_CHOICE_FOOD } from "../../redux/foodRedux";
const FoodList = ({ food, done, state }) => {
  const dispatch = useDispatch();
  const [checkedInputs, setCheckedInputs] = useState([]);

  const onChangeHandler = (checked, card) => {
    if (checked) {
      dispatch({
        type: CHOICE_FOOD,
        data: card,
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
      <FoodCardList>
        {done
          ? food.map((v, index) => (
              <FoodCard
                id={v.id}
                foodName={v.foodName}
                serving={v.foodServing}
                unit={v.foodUnit}
                cal={v.foodCalorie}
                index={index}
                v={v}
                state={state}
                checkedInputs={checkedInputs}
                setCheckedInputs={setCheckedInputs}
                onChangeHandler={onChangeHandler}
              />
            ))
          : ""}
      </FoodCardList>
    </FoodListWrapper>
  );
};
const FoodListWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
`;

const FoodCardList = styled.ul`
  list-style-type: none;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;
export default FoodList;
