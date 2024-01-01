//담기 기능
import React, { useRef, useState } from "react";
import styled from "styled-components";
import AfterBag from "./AfterBag";
import BeforeBag from "./BeforeBag";

const Bag = () => {
  const bagRef = useRef(null);
  const beforeBagRef = useRef(null);

  const onDragstart = (e) => {
    e.target.classList.add("dragging");
    console.log(e);
  };
  const onDragEnd = (e) => {
    e.target.classList.remove("dragging");
    console.log(e);
  };

  const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.childNodes].filter(
      (child) =>
        child.classList.contains("draggable") &&
        !child.classList.contains("dragging")
    );

    return draggableElements.reduce(
      (closet, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closet.offset) {
          return { offset: offset, element: child };
        } else {
          return closet;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  const handleOver = (e) => {
    const afterDraggle = getDragAfterElement(bagRef.current, e.clientY);
    const nowDraggable = bagRef.current.querySelector(".dragging");
    bagRef.current.insertBefore(nowDraggable, afterDraggle);
  };
  return (
    <BagWrapper>
      <BeforeBag
        bagRef={beforeBagRef}
        onDragstart={onDragstart}
        onDragEnd={onDragEnd}
        handleOver={handleOver}
      />
      <AfterBag
        bagRef={bagRef}
        onDragstart={onDragstart}
        onDragEnd={onDragEnd}
        handleOver={handleOver}
      />
    </BagWrapper>
  );
};
const BagWrapper = styled.div`
  width: 1080px;
  margin: 0;
  display: flex;
`;

export default Bag;
