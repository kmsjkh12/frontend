import React from "react";
import styled from "styled-components";
const ReviewCard = () => {
  return (
    <ReviewCardWrapper>
      <ReviewUserWrapper>
        <ReviewUser>
          <UserLevel>멤버스</UserLevel>
          <UserNickname>이**</UserNickname>
        </ReviewUser>
      </ReviewUserWrapper>
      <ReviewContentWrapper>
        <ReviewContent>
          <ReviewContentHeaderWrapper>
            <ReviewContentHeader>스테이크</ReviewContentHeader>
          </ReviewContentHeaderWrapper>
          <ReviewContentContent>맛있어용</ReviewContentContent>
          <ReviewImageWrapper>
            <ReviewImageButton>
              <ReviewImage></ReviewImage>
            </ReviewImageButton>
          </ReviewImageWrapper>
          <ReviewFooter>
            <ReviewDate>
              <ReviewDateSpan>2023-12-27</ReviewDateSpan>
            </ReviewDate>
            <ReviewUpButton>
              <ReviewUpSpan>UP</ReviewUpSpan>
            </ReviewUpButton>
          </ReviewFooter>
        </ReviewContent>
      </ReviewContentWrapper>
    </ReviewCardWrapper>
  );
};

const ReviewCardWrapper = styled.div`
  display: flex;
  padding: 30px 0px 19px 20px;
  border-bottom: 1px solid rgb(244, 244, 244);
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`;
const ReviewUserWrapper = styled.div`
  flex: 0 0 225px;
`;
const ReviewUser = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: -1px 0px 7px;
`;
const UserLevel = styled.span`
  display: inline-block;
  height: 18px;
  border: 1px solid rgb(77, 190, 215);
  border-radius: 3px;
  padding: 3px 4px 3px 5px;
  margin-right: 4px;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  word-break: keep-all;
  background-color: rgb(77, 190, 215);
  color: rgb(255, 255, 255);
`;
const UserNickname = styled.span`
  font-weight: 500;
`;
const ReviewContentWrapper = styled.div`
  flex: 1 1 0%;
  overflow: hidden;
`;

const ReviewContent = styled.div``;

const ReviewContentHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 19px;
  padding-right: 20px;
`;
const ReviewContentHeader = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: rgb(153, 153, 153);
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
`;
const ReviewContentContent = styled.p`
  padding-top: 12px;
  padding-right: 20px;
  word-break: break-word;
  white-space: pre-wrap;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: rgb(51, 51, 51);
`;
const ReviewImageWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 3px;
  overflow: auto hidden;
  padding: 15px 0px 2px;
`;
const ReviewImageButton = styled.button`
  width: 93px;
  height: 93px;
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

const ReviewFooter = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding-top: 19px;
  padding-right: 20px;
`;

const ReviewDate = styled.div``;

const ReviewDateSpan = styled.span`
  color: rgb(153, 153, 153);
`;

const ReviewUpButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 88px;
  height: 32px;
  padding: 0px 13px 0px 11px;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 20px;
  font-size: 12px;
  line-height: 20px;
  color: rgb(153, 153, 153);
`;

const ReviewUpSpan = styled.span``;
export default ReviewCard;
