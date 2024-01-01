import React from "react";
import styled from "styled-components";
import { MessageOutlined } from "@ant-design/icons";
// 사진<MessageOutlined />
// 이름
// 가격
// 댓글
const Card = ({ c }) => {
  return (
    <CardWrapper>
      <ImageContainer>
        <PruductImg
          alt="상품 이미지"
          src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/da9df7c8-be56-4c5a-ba45-7862a962d2e7.jpg"
        />
      </ImageContainer>
      <ProductInfo>
        <NameContainer>[해통령] 육수한알 진한 맛 (코인육수){c}</NameContainer>
        <PriceContainer>
          <DiscountPrice>
            <Price>
              <PriceSpan>8,700원</PriceSpan>
            </Price>
            <Price>
              <DiscountRateSpan>10%</DiscountRateSpan>
              <SalePriceSpan>9999</SalePriceSpan>
            </Price>
          </DiscountPrice>
        </PriceContainer>
        <CommentContainer>
          <CommentIcon>
            <MessageOutlined />
          </CommentIcon>
          <CommentSpan>9999</CommentSpan>
        </CommentContainer>
      </ProductInfo>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 250px;
  margin-right: 30px;
`;
const ImageContainer = styled.div`
  heigth: 320px;
  overflow: hidden;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
`;
const PruductImg = styled.img`
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 240px;
  height: 320px;

  object-fit: cover;
`;
const ProductInfo = styled.div`
  position: relative;
  padding: 8px 10px 0px 0px;
`;
const NameContainer = styled.h3`
  font-size: 16px;
  line-height: 23px;
  font-weight: 400;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const DiscountPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.div``;
const PriceSpan = styled.span`
  display: block;
  padding-top: 2px;
  color: rgb(181, 181, 181);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-decoration: line-through;
`;
const DiscountRateSpan = styled.span`
  margin-right: 7px;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  color: rgb(250, 98, 47);
`;
const SalePriceSpan = styled.span`
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  color: rgb(51, 51, 51);
`;

const CommentContainer = styled.div`
  padding-top: 8px;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  color: rgb(153, 153, 153);
`;
const CommentIcon = styled.div`
  width: 15px;
  height: 15px;
`;
const CommentSpan = styled.span`
  padding-left: 2px;
  font-weight: 400;
`;
export default Card;
