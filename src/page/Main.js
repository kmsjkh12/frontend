import React from "react";
import Header from "../components/public/Header";
import CardList from "../Product/CardList";
import Carousel from "../components/public/Carousel";
import TagCardList from "../Product/TagCardList";
const Main = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <TagCardList />
      <TagCardList />
      <TagCardList />
      <TagCardList />
    </div>
  );
};

export default Main;
