import React, { useState } from "react";
import { styled } from "styled-components";
import MealTimeComponent from "../components/meal/mealComponent/MealTimeComponent";
import MealSelectComponent from "../components/meal/mealComponent/MealSelectComponent";
import useMountTransition from "../hooks/useMountTransition";
import FoodDetailComponent from "../components/meal/mealComponent/FoodDetailComponent";
import ListFetchers from "../error/ListFetchers";
import ErrorBoundary from "../error/ErrorBoundary";
const Main = () => {
  const [move_food, setMove_food] = useState(false);
  const [date, setDate] = useState(null);
  const [mealTime, setMealTime] = useState(null);

  const [isMounted, setIsMounted] = useState(false);
  const hasTransitionedIn = useMountTransition(isMounted, 1000);

  const [isFoodDetails, setIsFoodDetails] = useState(false);
  const hasFoodDetailsIn = useMountTransition(isFoodDetails, 1000);

  const [detailData, setDetailData] = useState(null);
  const onClickFood = (mealTime, date) => {
    setIsMounted(!isMounted);
    setMealTime(mealTime);
    setDate(date);
  };

  const onClickDetails = () => {
    setIsFoodDetails(!isFoodDetails);
  };
  return (
    <MainWrapper>
      {hasTransitionedIn || isMounted ? (
        hasFoodDetailsIn || isFoodDetails ? (
          <FoodDetailComponent
            onClickDetails={onClickDetails}
            mealTime={mealTime}
            cs={`card ${hasFoodDetailsIn && "in"} ${
              isFoodDetails && "visible"
            }`}
          />
        ) : (
          <>
            <MealSelectComponent
              onClickFood={onClickFood}
              onClickDetails={onClickDetails}
              cs={`card ${hasTransitionedIn && "in"} ${isMounted && "visible"}`}
              mealTime={mealTime}
              date={date}
            />
          </>
        )
      ) : hasFoodDetailsIn || isFoodDetails ? (
        <FoodDetailComponent
          onClickDetails={onClickDetails}
          mealTime={mealTime}
          cs={`card ${hasFoodDetailsIn && "in"} ${isFoodDetails && "visible"}`}
        />
      ) : (
        <>
          <MealTimeComponent
            onClickFood={onClickFood}
            onClickDetails={onClickDetails}
            mealTime={mealTime}
            setMealTime={setMealTime}
          />
        </>
      )}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 400px;
  height: 100%;
  margin: 0 auto;
`;
export default Main;
