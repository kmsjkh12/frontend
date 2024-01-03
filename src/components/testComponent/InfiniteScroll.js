import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { http } from "../../lib/http";
import { styled } from "styled-components";
import { throttle } from "../../hooks/customScroll/throttle";
import { useInfiniteScroll } from "../../hooks/customScroll/useInfiniteScroll";
import { fetchFood } from "../../hooks/customScroll/fetchFood";
import FoodCard from "../food/FoodCard";
import { useSelector } from "react-redux";
const InfiniteScroll = () => {
  const { search_food, page } = useSelector((state) => state.foodRedux);

  const { isFetching } = useInfiniteScroll({
    pagesize: 10,
    foodname: "",
    page: page,
  });
  const [foodData, setFooddata] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  return (
    <Container className="infinite">
      {foodData.map((d) => (
        <FoodCard></FoodCard>
      ))}
      {search_food.map((d) => (
        <FoodCard></FoodCard>
      ))}
      {true && <Loading />}
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 500px;
  margin: 0 auto;
  overflow: scroll;
`;

const Loading = styled.div``;
export default InfiniteScroll;
