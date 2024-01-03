import React, { useState } from "react";
import "./fade.css";
import TestFoodScroll from "../components/testComponent/TestFoodScroll";
import Total from "../components/food/Toltal";
import Intake from "../components/food/Intake";
const BagPage = () => {
  return (
    <div>
      <Intake />
      <TestFoodScroll />
      <Total />
    </div>
  );
};
export default BagPage;
