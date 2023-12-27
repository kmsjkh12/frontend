import React from "react";
import Main from "./page/Main";
import ProductDetail from "./page/ProductDetail";
import GlobalStyle from "./css/GlobalStyle";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
      <ProductDetail />
    </>
  );
};

export default App;
