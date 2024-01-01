import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { SearchBox, InputSearch, InputButton } from "../../css/BasicInput";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import FoodList from "./FoodList";
import { SEARCH_FOOD_REQUEST } from "../../redux/foodRedux";

const FoodSelect = () => {
  const PAGE_SIZE = 10 * Math.ceil(visualViewport.width / 1000);
  const dispatch = useDispatch();
  const [food, setFood] = useState(null);
  const [page, setPage] = useState(0);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);
  const { search_food, search_food_done } = useSelector(
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
        page: page,
        size: PAGE_SIZE,
      },
    });
  };

  useEffect(() => {
    if (search_food_done) {
      setPage(search_food.pageable.pageNumber + 1);
      setNextPage(search_food.content.last);
      setFetching(false);
    }
  }, [search_food_done]);

  useEffect(() => {
    if (isFetching && hasNextPage) onClickFood();
    else if (!hasNextPage) setFetching(false);
  }, [isFetching]);

  return (
    <FoodSelectWrapper>
      <SearchBox className="middle">
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
        />
      </FoodListWrapper>
    </FoodSelectWrapper>
  );
};

const FoodSelectWrapper = styled.div`
  width: 300px;
  height: 500px;
  margin: auto;
`;
const FoodListWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
`;
export default FoodSelect;
