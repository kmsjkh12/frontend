import React, { useEffect } from "react";
import { styled } from "styled-components";

const PickerWidget = () => {
  const selector = "scrollports";
  const selected = "selected"; // 선택된 숫자
  const debounceTime = 250;

  useEffect(() => {
    const scrollWrapper = document.querySelector(`.${selector}`);
    const scrollPorts = document.getElementsByClassName(selector);
    const debounceFunc = debounce(onCheck, debounceTime);

    scrollWrapper.addEventListener("scroll", debounceFunc);

    return () => {
      scrollWrapper.removeEventListener("scroll", debounceFunc);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  const onCheck = (e) => {
    const rect = e.target.getBoundingClientRect();
    const centerCell = document.elementsFromPoint(
      rect.left + e.target.offsetWidth / 2,
      rect.top + e.target.offsetHeight / 2
    )[0];

    const cells = e.target.getElementsByClassName("cell");
    for (const cell of cells) {
      cell.classList.remove(selected);
    }

    centerCell.classList.add(selected);
  };

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };
  return (
    <PickerWidgetWrapper>
      <ScrollWrapper className={`ScrollWrapper ${selector}`}>
        <Cell class="cell">09</Cell>
        <Cell className={`cell ${selected}`}>10</Cell>
        <Cell class="cell">11</Cell>
        <Cell class="cell">12</Cell>
        <Cell class="cell">13</Cell>
        <Cell class="cell">14</Cell>
        <Cell class="cell">15</Cell>
        <Cell class="cell">16</Cell>
      </ScrollWrapper>
    </PickerWidgetWrapper>
  );
};

const PickerWidgetWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 10rem;
  height: 22rem;
  border-radius: 3rem;
  border: solid 0.2rem #b2b2c2;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 9.4rem;
  height: 22rem;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; 
`;

const Cell = styled.div`
  display: block;
  scroll-snap-align: center;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e9e9f2;
  font-size: 2.4rem;

  &.selected {
    font-size: 3rem;
    font-weight: bold;
    color: #0073e6;
  }
`;
export default PickerWidget;
