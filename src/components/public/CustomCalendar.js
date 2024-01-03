import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { styled } from "styled-components";
import "./CustomCalendar.css";
import { MOVE_DAY } from "../../redux/foodRedux";
import { useDispatch, useSelector } from "react-redux";
import { CalendarOutlined, SearchOutlined } from "@ant-design/icons";
const CustomCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(false);

  const dispatch = useDispatch();
  const { day } = useSelector((state) => state.foodRedux);
  const onClickVisible = () => {
    setCalendarVisible(!calendarVisible);
  };

  const dateToRedux = (date) => {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    return year + "." + month + "." + day;
  };
  const dateToStr = (date) => {
    var week = new Array("일", "월", "화", "수", "목", "금", "토");

    var localTime = date.toLocaleTimeString();

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var dayName = week[date.getDay()];

    return dayName + "요일, " + month + "월 " + day + "일 ";
  };
  useEffect(() => {
    dispatch({
      type: MOVE_DAY,
      data: dateToRedux(value),
    });
  }, [value]);
  return (
    <CalendarWrapper>
      <CalendarHeader>
        <CalenderIcon>
          <CalendarOutlined />
        </CalenderIcon>
        <p className="text-center" onClick={onClickVisible}>
          {dateToStr(value)}
        </p>
        <Select>
          <SearchOutlined />
        </Select>
      </CalendarHeader>
      <CalendarContainer>
        <Calendar
          onChange={onChange}
          value={value}
          className={`calendar-container${calendarVisible ? " visible" : ""}`}
        />
      </CalendarContainer>
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 100%;
`;
const CalendarHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #228b22;

  text-align: center;
  line-height: 50px;
`;
const CalendarContainer = styled.div``;
const CalenderIcon = styled.div`
  margin-left: 20px;
  font-size: 20px;
`;
const Select = styled.div`
  margin-right: 20px;
  font-size: 20px;
`;
export default CustomCalendar;
