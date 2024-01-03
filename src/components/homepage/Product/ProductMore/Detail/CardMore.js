import React from "react";
import styled from "styled-components";
import Info from "../Info/Info";
import InquiryList from "../Inquiry/InquiryList";
import ReviewList from "../Review/ReviewList";
import Intro from "../Intro/Intro";
const CardMore = () => {
  return (
    <CardMoreWrapper>
      <Intro></Intro>
      <Info></Info>
      <ReviewList></ReviewList>
      <InquiryList></InquiryList>
    </CardMoreWrapper>
  );
};

const CardMoreWrapper = styled.div`
  margin: 0;
`;

export default CardMore;
