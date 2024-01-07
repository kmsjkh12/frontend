import React from "react";
import { styled } from "styled-components";
import { useInfiniteScroll } from "../../../hooks/customScroll/useInfiniteScroll";
import FoodCard from "./FoodCard";
import { CHOICE_FOOD, NOT_CHOICE_FOOD } from "../../../redux/foodRedux";
import { useSelector, useDispatch } from "react-redux";
const InfiniteScroll = ({ onChangeHandler, onClickDetails }) => {
  const dispatch = useDispatch();
  const { search_food, page, search_word, mealTime } = useSelector(
    (state) => state.foodRedux
  );
  const { isFetching } = useInfiniteScroll({
    pagesize: 15,
    foodname: search_word,
    page: page,
  });

  return (
    <Container className="infinite">
      {search_food.map((d, index) => (
        <FoodCard
          id={d.id}
          foodname={d.foodname}
          serving={d.foodServing}
          unit={d.foodUnit}
          cal={d.cal}
          index={index}
          v={d}
          mealTime={mealTime}
          onChangeHandler={onChangeHandler}
          onClickDetails={onClickDetails}
        ></FoodCard>
      ))}
      {true && <Loading />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  overflow: scroll;
`;

const Loading = styled.div``;
export default InfiniteScroll;
