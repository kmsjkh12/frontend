import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { SearchBox, InputSearch, InputButton } from "../../../css/BasicInput";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import FoodList from "./FoodList";
import { ADD_DATA_REQUEST, ADD_FOOD } from "../../../redux/userRedux";
import { SEARCH_FOOD_REQUEST, SEARCH_WORD } from "../../../redux/foodRedux";

const FoodSelect = ({ mealTime, date, onClickPage, onClickDetails }) => {
  const dispatch = useDispatch();
  const [food, setFood] = useState(null);
  const [isFetching, setFetching] = useState(false);
  const { search_food, search_food_done, choice_food } = useSelector(
    (state) => state.foodRedux
  );

  const onChangeFood = (e) => {
    setFood(e.target.value);
  };

  const onClickFood = () => {
    dispatch({
      type: SEARCH_FOOD_REQUEST,
      data: {
        foodname: food,
        page: 0,
        size: 15,
      },
    });
    dispatch({
      type: SEARCH_WORD,
      data: food,
    });
  };
  const onAddFood = () => {
    dispatch({
      type: ADD_DATA_REQUEST,
      data: {
        card: {
          date: date,
          mealtime: mealTime,
          array: choice_food,
        },
      },
    });
    onClickPage();
  };

  return (
    <FoodSelectWrapper>
      <SearchBox className="big">
        <InputSearch onChange={onChangeFood} value={food}></InputSearch>
        <InputButton onClick={onClickFood}>
          <SearchOutlined />
        </InputButton>
      </SearchBox>
      <FoodListWrapper>
        <FoodList
          food={search_food}
          done={search_food_done}
          setFetching={setFetching}
          isFetching={isFetching}
          foodname={food}
          mealTime={mealTime}
          date={date}
          onClickDetails={onClickDetails}
        />
      </FoodListWrapper>
      <FoodAddButton>
        <AddButton
          onClick={() => {
            onAddFood();
          }}
        >
          추가
        </AddButton>
      </FoodAddButton>
    </FoodSelectWrapper>
  );
};

const FoodSelectWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin: auto;
`;
const FoodListWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
`;
const FoodAddButton = styled.div`
  width: 100%;
  height: 40px;
`;
const AddButton = styled.button`
  width: 100%;
  height: 30px;
  color: white;
  background-color: green;
`;
export default FoodSelect;
