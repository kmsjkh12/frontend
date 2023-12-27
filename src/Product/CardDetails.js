import React from "react";
import styled from "styled-components";
const CardDetails = () => {
  const info = [
    {
      title: "배송",
      description: "샛별배송",
    },
    {
      title: "판매자",
      description: "판매자",
    },
    {
      title: "포장타입",
      description: "냉장",
    },
    {
      title: "판매타입",
      description: "1팩",
    },
    {
      title: "중량",
      description: "중량",
    },
    {
      title: "알레르기",
      description:
        "- 우유, 대두, 밀, 돼지고기, 토마토, 쇠고기 함유 알류, 메밀, 땅콩, 고등어, 게, 새우, 복숭아, 아황산류, 호두, 닭고기, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조",
    },
    {
      title: "유통기한",
      description: "수령일 포함 최소 3일 남은 제품을 보내드립니다.",
    },
    {
      title: "상품선택",
      description: "샛별배송",
    },
  ];
  return (
    <CardDetailWrapper>
      <CardDetailImage></CardDetailImage>
      <CardDetailInfo>
        <KdeliveryWrapper>샛별배송</KdeliveryWrapper>
        <NameWrapper>
          <Title>[프레시지] 블랙라벨 스테이크</Title>
          <TitleInfo>손쉽게 만드는 근사한 메인 요리</TitleInfo>
        </NameWrapper>
        <DiscountPriceWrapper>
          <Discount>50%</Discount>
          <Price>50,000</Price>
          <Won>원</Won>
        </DiscountPriceWrapper>
        <PriceWrapper>
          <Cost>60000원</Cost>
        </PriceWrapper>
        <FromWrapper>원산지: 상품설명/상세정보 참조</FromWrapper>
        <LoginWrapper>로그인 후, 적립 혜택이 적용됩니다.</LoginWrapper>
        <PointWrapper>
          <Point>
            <strong>적립금 + 할인 쿠폰 받고 구매하기</strong>
          </Point>
        </PointWrapper>
        <ProductInfoList>
          {info.map((item) => (
            <ProductInfo>
              <TableTitle>{item.title}</TableTitle>
              <TableInfo>
                <TableP>{item.description}</TableP>
              </TableInfo>
            </ProductInfo>
          ))}
        </ProductInfoList>
      </CardDetailInfo>
    </CardDetailWrapper>
  );
};

const CardDetailWrapper = styled.main`
  display: flex;
`;
//이미지
const CardDetailImage = styled.div`
  width: 430px;
  height: 552px;
  background-size: cover;
  background-color: #f5f5f5;
`;
const CardDetailInfo = styled.section`
  width: 560px;
  margin-left: 100px;
`;
const KdeliveryWrapper = styled.div`
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #999;
  margin-bottom: 6px;
  width: 500px;
`;
const NameWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
`;
const Title = styled.h1`
  width: 500px;
  font-weight: 500;
  font-size: 24px;
  color: #333;
  line-height: 34px;
  letter-spacing: -0.5px;
  margin-right: 20px;
`;
const TitleInfo = styled.h2`
  width: 500px;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #b5b5b5;
  line-height: 19px;
  letter-spacing: -0.5px;
`;
const DiscountPriceWrapper = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-top: 20px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: -0.5px;
`;
const Discount = styled.span`
  padding-right: 9px;
  font-size: 28px;
  color: #fa622f;
`;
const Price = styled.span`
  padding-right: 4px;
  font-size: 28px;
  color: #333;
`;
const Won = styled.span`
  display: inline-block;
  position: relative;
  top: 3px;
  font-size: 18px;
  color: #333;
  vertical-align: top;
`;
const PriceWrapper = styled.span`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;
const Cost = styled.span`
  font-size: 16px;
  color: #b5b5b5;
  letter-spacing: -0.5px;
  text-decoration: line-through;
  margin-right: 1px;
`;
const FromWrapper = styled.p`
  color: #333;
  font-size: 24px;
  letter-spacing: -0.5px;
  margin-top: 8px;
`;

const LoginWrapper = styled.div`
  font-size: 14px;
  color: #5f0080;
  line-height: 19px;
  height: 19px;
  letter-spacing: -0.5px;
  margin-top: 14px;
`;
const PointWrapper = styled.div`
  display: inline-flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 350px;
  min-height: 38px;
  padding: 10px 14px 10px 16px;
  background-color: rgba(189, 118, 255, 0.08);
  border-radius: 4px;
  margin-top: 12px;
`;
const Point = styled.p`
  font-weight: 400;
  line-height: 16px;
  color: rgb(51, 51, 51);
  letter-spacing: -0.5px;
  font-size: 13px;
`;
const ProductInfoList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
`;
const ProductInfo = styled.li`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  padding: 17px 0 18px;
  border-top: 1px solid #f4f4f4;
  font-size: 14px;
  letter-spacing: -0.5px;
`;
const TableTitle = styled.dt`
  width: 128px;
  height: 100%;
  color: #666;
  font-weight: 400;
  line-height: 19px;
`;
const TableInfo = styled.dd`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const TableP = styled.p`
  color: #333;
  font-weight: 400;
  line-height: 19px;
  white-space: pre-line;
  word-break: break-all;
  overflow: hidden;
`;
export default CardDetails;
