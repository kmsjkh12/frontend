import React from "react";
import Menu from "../components/public/DropDown";
import Carousel from "../components/public/Carousel";
import TagCardList from "../components/Product/ProductList/TagCardList";
const Main = () => {
  return (
    <div>
      <Carousel />
      <TagCardList />
      <TagCardList />
      <TagCardList />
      <TagCardList />
    </div>
  );
};

export default Main;
