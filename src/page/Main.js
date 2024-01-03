import React, { useState } from "react";
import CustomCalendar from "../components/public/CustomCalendar";
import MealTime from "../components/food/MealTime";
import FoodSelect from "../components/food/FoodSelect";
import TestFoodScroll from "../components/testComponent/TestFoodScroll";
import InfiniteScroll from "../components/testComponent/InfiniteScroll";
const Main = () => {
  const [move_food, setMove_food] = useState(false);
  const onClickFood = () => {
    setMove_food(!move_food);
  };

  return (
    <div>
      {move_food ? (
        <>
          <InfiniteScroll />
        </>
      ) : (
        <>
          <CustomCalendar />
          <MealTime onClickFood={onClickFood} />
        </>
      )}
    </div>
  );
};

export default Main;
