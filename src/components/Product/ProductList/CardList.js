import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
const CardList = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const [transX, setTransX] = useState(0);

  const transPrev = () => {
    setTransX((prev) => prev + 1068);
  };
  const transNext = () => {
    setTransX((prev) => prev - 1068);
  };

  return (
    <CardListWrapper>
      <CardListSwiper trans={transX}>
        <Card c={1} />
        <Card c={2} />
        <Card c={3} />
        <Card c={4} />
        <Card c={5} />
        <Card c={6} />
        <Card c={7} />
        <Card c={8} />
        <Card c={9} />
      </CardListSwiper>

      <CarouselLeftButton
        className="prev"
        onClick={() => transPrev()}
        mouseOver={mouseOver}
      >
        <LeftCircleFilled />
      </CarouselLeftButton>
      <CarouselRightButton
        className="next"
        onClick={() => transNext()}
        mouseOver={mouseOver}
      >
        <RightCircleFilled />
      </CarouselRightButton>
    </CardListWrapper>
  );
};
const CardListWrapper = styled.div`
  overflow: hidden;
  width: 1070px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;
const CardListSwiper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  transition-duration: 500ms;

  transform: translateX(${(props) => props.trans}px);
`;
const CarouselLeftButton = styled.button`
  position: absolute;
  top: 30%;
  z-index: 999;
  font-size: 40px;
  color: grey;
  height: 52px;
  width: 52px;
  outline: none;
  border: none;
  background-color: initial;

  cursor: pointer;
`;

const CarouselRightButton = styled.button`
  position: absolute;
  top: 30%;
  z-index: 999;
  right: 1.8%;
  font-size: 40px;
  color: grey;
  height: 52px;
  width: 52px;
  border: none;
  background-color: initial;

  cursor: pointer;
`;
export default CardList;
