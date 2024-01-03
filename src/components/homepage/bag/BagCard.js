import React from "react";
import styled from "styled-components";
const BagCard = ({
  name,
  draggable,
  onDragStart,
  onDragEnd,
  onDragOver,
  v,
}) => {
  return (
    <BagCardWrapper
      className={name}
      draggable={draggable}
      onDragStart={(e) => {
        onDragStart(e);
      }}
      onDragEnd={(e) => {
        onDragEnd(e);
      }}
      onDragOver={(e) => {
        onDragOver(e);
      }}
    >
      <CardName>카드{v}</CardName>
      <CardDes></CardDes>
    </BagCardWrapper>
  );
};

const BagCardWrapper = styled.div`
  height: 82px;
  line-height: 82px;
  width: 250px;
  padding: 0 20px;
  background-color: white;
  border: 1px solid #c5cdd7;
  border-bottom: none;
  box-sizing: border-box;
  cursor: move;
`;

const CardName = styled.span`
  display: inline-block;
  vertical-align: inherit;
  width: 100%;
  height: 15px;
  background: url(./menu.png) no-repeat center top;
  background-size: cover;
`;

const CardDes = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export default BagCard;
