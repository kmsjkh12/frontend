import React from "react";
import { styled } from "styled-components";
import FoodSelect from "../components/food/FoodSelect";
import Intake from "../components/food/Intake";
import Total from "../components/food/Toltal";
const FoodPage = () => {
  return (
    <FoodPageWrapper>
      <Intake />
      <FoodSelect />
      <Total />
    </FoodPageWrapper>
  );
};

const FoodPageWrapper = styled.div``;
export default FoodPage;
