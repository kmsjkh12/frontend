import { css, styled } from "styled-components";

export const SearchBox = styled.div`
  &.big {
    width: 400px;
    height: 50px;
  }
  &.middle {
    width: 300px;
    height: 50px;
  }
  &.small {
    width: 150px;
    height: 50px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  border: 1px solid rgb(95, 0, 128);
  border-radius: 6px;
  background-color: white;
  box-shadow: rgb(247, 247, 247) 0px 0px 0px 1px inset;
`;
export const InputSearch = styled.input`
  width: 300px;
  background-color: inherit;

  border: none;
  outline: none;
  font-size: 16px;
  letter-spacing: -0.33px;
`;
export const InputButton = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  margin: 10px;
  opacity: 0.5;
  font-size: 20px;
  border: 0;
  background-color: transparent;
`;
