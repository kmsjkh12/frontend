//필요 기능들을 종합하는 컴포넌트
import React from "react";
import { styled } from "styled-components";
import CustomCalendar from "../../public/CustomCalendar";
import { useSelector } from "react-redux";
import MealTime from "../mealTime/MealTime";
import Intake from "../mealTime/Intake";
import ErrorBoundary from "../../../error/ErrorBoundary";
import ListFetchers from "../../../error/ListFetchers";
const MealTimeComponent = ({ onClickFood, onClickDetails }) => {
  const { user_save_data, my_data_done } = useSelector(
    (state) => state.userRedux
  );
  const { day } = useSelector((state) => state.foodRedux);

  return (
    <MealTimeComponentWrapper>
      <CustomCalendar />
      <ErrorBoundary>
        <ListFetchers>
          {my_data_done ? (
            user_save_data.date === day ? (
              <>
                <Intake data={user_save_data} />

                <MealTime
                  data={user_save_data}
                  onClickFood={onClickFood}
                  onClickDetails={onClickDetails}
                />
              </>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </ListFetchers>
      </ErrorBoundary>
    </MealTimeComponentWrapper>
  );
};

const MealTimeComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
export default MealTimeComponent;
