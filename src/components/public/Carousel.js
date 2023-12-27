import React, { useRef, useState } from "react";
import styled from "styled-components";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
const Carousel = () => {
  const containerRef = useRef(null);
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseOut = () => {
    setMouseOver(false);
  };
  const translateContainer = (direction) => {
    const selectedBtn = direction === 1 ? "prev" : "next";
    containerRef.current.style.transitionDuration = "500ms";
    containerRef.current.style.transform = `translateX(${
      direction * (100 / 5)
    }%)`;
    containerRef.current.ontransitionend = () => reorganizeEl(selectedBtn);
  };

  const reorganizeEl = (selectedBtn) => {
    containerRef.current.removeAttribute("style");
    if (selectedBtn === "prev") {
      containerRef.current.insertBefore(
        containerRef.current.lastElementChild,
        containerRef.current.firstElementChild
      );
    } else {
      containerRef.current.appendChild(containerRef.current.firstElementChild);
    }
  };
  return (
    <CarouselWrapper>
      <Window>
        <Container
          className="container"
          ref={containerRef}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Img src="https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/4e6b1a71-b38c-4871-afe0-7b1d23ab6e2a.jpg" />
          <Img src="https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg" />
        </Container>
      </Window>

      <CarouselLeftButton
        className="prev"
        onClick={() => translateContainer(1)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        mouseOver={mouseOver}
      >
        <LeftCircleFilled />
      </CarouselLeftButton>
      <CarouselRightButton
        className="next"
        onClick={() => translateContainer(-1)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        mouseOver={mouseOver}
      >
        <RightCircleFilled />
      </CarouselRightButton>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  position: relative;
  max-width: 1900px;
  height: 370px;
  margin: 0px auto 40px;
`;
const Window = styled.div`
overflow:hidden;
position:relative;
top:52%;
transform:
translateY(-50%);
translateX(-50%);
height: 370px;
width:100%; 

`;

const Container = styled.div`
  position: absolute;
  height: 370px;
  width: 100%;
`;
const Img = styled.img`
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const CarouselLeftButton = styled.button`
  position: absolute;
  top: 45%;
  left: 5%;
  font-size: 40px;
  color: grey;
  height: 52px;
  width: 52px;
  outline: none;
  border: none;
  background-color: initial;
  transition: ${(props) => (props.mouseOver ? "all 0.5s ease 0s" : "none")};
  opacity: ${(props) => (props.mouseOver ? "1" : "0")};
  cursor: pointer;
`;

const CarouselRightButton = styled.button`
  position: absolute;
  top: 45%;
  right: 5%;
  font-size: 40px;
  color: grey;
  height: 52px;
  width: 52px;
  outline: none;
  border: none;
  background-color: initial;
  transition: ${(props) => (props.mouseOver ? "all 0.5s ease 0s" : "none")};
  opacity: ${(props) => (props.mouseOver ? "1" : "0")};

  cursor: pointer;
`;

export default Carousel;
