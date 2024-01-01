import React, { useRef } from "react";
import styled from "styled-components";
import { SearchBox, InputSearch, InputButton } from "../../css/BasicInput";
import { SearchOutlined } from "@ant-design/icons";
import BagCard from "./BagCard";
const AfterBag = ({ bagRef, onDragstart, onDragEnd, handleOver }) => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <AfterBagWrapper>
      <AfterBagList
        ref={bagRef}
        onDragOver={(e) => {
          handleOver(e);
        }}
      >
        <SearchBox className="middle">
          <InputSearch></InputSearch>
          <InputButton>
            <SearchOutlined />
          </InputButton>
        </SearchBox>
        {count.map((v) => (
          <BagCard
            name="draggable"
            v={v}
            draggable="true"
            onDragStart={onDragstart}
            onDragEnd={onDragEnd}
            onDragOver={handleOver}
          ></BagCard>
        ))}
      </AfterBagList>
    </AfterBagWrapper>
  );
};

const AfterBagWrapper = styled.div`
  min-width: 40%;
  max-height: 100%;
`;

const AfterBagList = styled.ul``;

// button

export default AfterBag;
