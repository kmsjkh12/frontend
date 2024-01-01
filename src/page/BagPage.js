import React, { useState } from "react";
import "./fade.css";
import TestFoodScroll from "../components/testComponent/TestFoodScroll";
import Total from "../components/food/Toltal";
import Intake from "../components/food/Intake";
import TestPage from "../components/testComponent/TestPage";
const BagPage = () => {
  return (
    <div>
      <Intake />
      <TestPage />
      <Total />
    </div>
  );
};
export default BagPage;
