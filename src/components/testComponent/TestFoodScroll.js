import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import FoodCard from "../food/FoodCard";
import { SearchBox, InputSearch, InputButton } from "../../css/BasicInput";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  SEARCH_FOOD_REQUEST,
  CHOICE_FOOD,
  NOT_CHOICE_FOOD,
} from "../../redux/foodRedux";
const TestFoodScroll = () => {
  const dispatch = useDispatch();
  const { search_food, last, search_food_done } = useSelector(
    (state) => state.foodRedux
  );
  const CARD_SIZE = 900;
  const PAGE_SIZE = 10 * Math.ceil(visualViewport.width / CARD_SIZE);
  const [page, setPage] = useState(0); //현재 페이지
  const [isFetching, setFetching] = useState(false); //검색 상태를 나타냄
  const [checkedInputs, setCheckedInputs] = useState([]); //체크 상태 확인
  const [food, setFood] = useState("");
  const paged = useRef();

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const onChangeFood = (e) => {
    setFood(e.target.value);
  };

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

  //페이지에 변화가 생기면 useEffect 작동해서 데이터 더 불러오기
  useEffect(() => {
    if (search_food_done) {
      if (isFetching && !last) {
        fetchUsers();
      }
    }
  }, [page]);

  useEffect(() => {
    if (search_food_done) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
            console.log("hhhh");
          }
        },
        { threshold: 1 }
      );
      observer.observe(paged.current);
    }
  }, [search_food_done]);

  const fetchUsers = useCallback(() => {
    dispatch({
      type: SEARCH_FOOD_REQUEST,
      data: {
        foodname: food,
        page: page,
        size: PAGE_SIZE,
      },
    });
    setFetching(true);
  }, [page, food]);

  //스크롤을 조정하는 함수
  return (
    <FoodSelectWrapper>
      <SearchBox className="middle">
        <InputSearch onChange={onChangeFood} value={food}></InputSearch>
        <InputButton onClick={fetchUsers}>
          <SearchOutlined />
        </InputButton>
      </SearchBox>
      <FoodListWrapper>
        <FoodCardList>
          {search_food.map((user, index) => (
            <FoodCard
              id={user.id}
              foodName={user.foodName}
              serusering={user.foodSerusering}
              unit={user.foodUnit}
              cal={user.foodCalorie}
              index={index}
              user={user}
              state={true}
              checkedInputs={checkedInputs}
              setCheckedInputs={setCheckedInputs}
              onChangeHandler={onChangeHandler}
            />
          ))}
          <div ref={paged} />
        </FoodCardList>
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
  height: 100%;
  position: relative;
  overflow: scroll;
`;

const FoodCardList = styled.ul`
  list-style-type: none;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

export default TestFoodScroll;
