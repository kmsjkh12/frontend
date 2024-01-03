import React from "react";
import ReviewCard from "./ReviewCard";
import styled from "styled-components";
const ReviewList = () => {
  return (
    <CardReview>
      <Review>
        <ReviewHeader>상품후기</ReviewHeader>
        <ReviewImageMore>
          <ReviewImageButton>
            <ReviewImage></ReviewImage>
          </ReviewImageButton>
        </ReviewImageMore>
        <ReviewInfo>
          <ReviewInfoLeft>
            <ReviewCount>총 100개</ReviewCount>
            <ReviewSort>
              <ReviewNewSort>최근순</ReviewNewSort>
              <ReviewNewInsertSort>최근등록순</ReviewNewInsertSort>
            </ReviewSort>
          </ReviewInfoLeft>
        </ReviewInfo>
        <ReviewCard></ReviewCard>
      </Review>
    </CardReview>
  );
};

const CardReview = styled.div`
  position: relative;
  width: 1010px;
  padding-bottom: 100px;
`;
const Review = styled.div``;
const ReviewHeader = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 41px;
  letter-spacing: -0.5px;
  color: rgb(51, 51, 51);
`;
const ReviewImageMore = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 3px;
  width: 100%;
  padding: 20px 0px 30px;
  overflow: hidden;
`;
const ReviewImageButton = styled.button`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  position: relative;
  width: 124px;
  height: 124px;
  overflow: hidden;
  background-color: rgb(244, 244, 244);
`;
const ReviewImage = styled.img`
  position: absolute;
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
const ReviewInfo = styled.div``;
const ReviewInfoLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;
const ReviewCount = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;
const ReviewSort = styled.div`
  display: flex;
  gap: 17px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;
const ReviewNewSort = styled.button`
  position: relative;
  font-weight: 500;
  font-size: 12px;
  color: rgb(51, 51, 51);
`;
const ReviewNewInsertSort = styled.button`
  position: relative;
  font-weight: 400;
  font-size: 12px;
  color: rgb(153, 153, 153);
`;
export default ReviewList;
