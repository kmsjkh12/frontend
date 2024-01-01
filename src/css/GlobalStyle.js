import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
        margin:0;
        box-sizing: border-box;
    }
  button {
    overflow: visible;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  ul{
    list-style: none; 
    padding-left:0;
  }
`;

export default GlobalStyle;
