import React from "react";
import { styled } from "styled-components";
import FoodDetailComponent from "../components/meal/mealComponent/FoodDetailComponent";
const FoodPage = () => {
  return (
    <FoodPageWrapper>
      <FoodDetailComponent />
    </FoodPageWrapper>
  );
};

const FoodPageWrapper = styled.div``;
export default FoodPage;
