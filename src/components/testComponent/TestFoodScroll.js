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
  PAGE_PLUS,
  PAGE_INIT,
} from "../../redux/foodRedux";
const TestFoodScroll = () => {
  const dispatch = useDispatch();
  const { search_food, foodname } = useSelector((state) => state.foodRedux);
  const CARD_SIZE = 500;
  const PAGE_SIZE = 10 * Math.ceil(visualViewport.width / CARD_SIZE);
  const [isFetching, setFetching] = useState(false); //검색 상태를 나타냄
  const [checkedInputs, setCheckedInputs] = useState([]); //체크 상태 확인
  const [food, setFood] = useState("");
  const paged = useRef();
  const page = useRef(0);
  const [loading, setLoading] = useState(false);
  const loadMore = () => {
    dispatch({
      type: PAGE_PLUS,
    });
  };

  const onChangeFood = (e) => {
    console.log(food);
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
    observer.observe(paged.current);
  }, []);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return; // entry가 interscting 중이 아니라면 함수를 실행하지 않음
      if (loading) return; // 현재 page가 불러오는 중임을 나타내는 flag를 통해 불러오는 중이면 함수를 실행하지 않음
      // 실행할 함수
      fetchUsers();
    });
  });

  const fetchUsers = () => {
    setLoading(true);

    dispatch({
      type: SEARCH_FOOD_REQUEST,
      data: {
        foodname: food,
        page: page.current,
        size: PAGE_SIZE,
      },
    });
    page.current += 1;

    loadMore();

    setLoading(false);
    setFetching(true);
  };

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
        {food}
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
