import React from "react";
import styled from "styled-components";

const Info = () => {
  return (
    <CardDeatail>
      <img
        src="https://img-cf.kurly.com/shop/data/goodsview/20230224/gv00000496183_1.jpg"
        alt="자세히보기 이미지"
        class="css-1d3w5wq es6jciw0"
      ></img>
      <GoodsWrapper>
        <ContextHeader>
          <small>상품고시정보</small>
        </ContextHeader>

        <ProductInfoList>
          <ProductInfo>제품명</ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>식품의 유형</ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>
            생산자 및 소재지 (수입품의 경우 생산자, 수입자 및 제조국)
          </ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>제조연월일, 소비기한 또는 품질유지기한</ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>포장단위별 내용물의 용량(중량), 수량</ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>
            원재료명 (｢농수산물의 원산지 표시 등에 관한 법률｣에 따른 원산지 표시
            포함) 및 함량(원재료 함량 표시대상 식품에 한함)
          </ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>영양성분 (영양성분 표시대상 식품에 한함)</ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>유전자변형식품에 해당하는 경우의 표시</ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>
            소비자 안전을 위한 주의사항 (｢식품 등의 표시ㆍ광고에 관한 법률
            시행규칙｣ 제5조 및 [별표 2]에 따른 표시사항을 말함)
          </ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>
            수입식품의 경우 “수입식품안전관리 특별법에 따른 수입신고를 필함”의
            문구
          </ProductInfo>
          <ProductInfo>상품설명 및 상품이미지 참조</ProductInfo>
          <ProductInfo>소비자 상담 관련 전화번호</ProductInfo>
          <ProductInfo>컬리 고객행복센터 (1644-1107)</ProductInfo>
        </ProductInfoList>
      </GoodsWrapper>
      <GoodsWrapper>
        <ContextHeader>
          <small>판매자정보</small>
        </ContextHeader>
        <ProductInfoList>
          <ProductInfo>판매자정보</ProductInfo>
          <ProductInfo>판매자</ProductInfo>
        </ProductInfoList>
        <ContextHeader>
          <small>WHY KURLY</small>
        </ContextHeader>
        <WhyWrapper>
          <WhyTable>
            <WhyElement>깐깐한 상품위원회</WhyElement>
            <WhyDes>
              나와 내 가족이 먹고 쓸 상품을 고르는
              <br />
              마음으로 매주 상품을 직접 먹어보고,
              <br />
              경험해보고 성분, 맛, 안정성 등 다각도의 <br />
              기준을 통과한 상품만을 판매합니다.
            </WhyDes>
          </WhyTable>
          <WhyTable>
            <WhyElement>깐깐한 상품위원회</WhyElement>
            <WhyDes>
              나와 내 가족이 먹고 쓸 상품을 고르는
              <br />
              마음으로 매주 상품을 직접 먹어보고,
              <br />
              경험해보고 성분, 맛, 안정성 등 다각도의 <br />
              기준을 통과한 상품만을 판매합니다.
            </WhyDes>
          </WhyTable>
          <WhyTable>
            <WhyElement>깐깐한 상품위원회</WhyElement>
            <WhyDes>
              나와 내 가족이 먹고 쓸 상품을 고르는
              <br />
              마음으로 매주 상품을 직접 먹어보고,
              <br />
              경험해보고 성분, 맛, 안정성 등 다각도의 <br />
              기준을 통과한 상품만을 판매합니다.
            </WhyDes>
          </WhyTable>
          <WhyTable>
            <WhyElement>깐깐한 상품위원회</WhyElement>
            <WhyDes>
              나와 내 가족이 먹고 쓸 상품을 고르는
              <br />
              마음으로 매주 상품을 직접 먹어보고,
              <br />
              경험해보고 성분, 맛, 안정성 등 다각도의 <br />
              기준을 통과한 상품만을 판매합니다.
            </WhyDes>
          </WhyTable>
          <WhyTable>
            <WhyElement>깐깐한 상품위원회</WhyElement>
            <WhyDes>
              나와 내 가족이 먹고 쓸 상품을 고르는
              <br />
              마음으로 매주 상품을 직접 먹어보고,
              <br />
              경험해보고 성분, 맛, 안정성 등 다각도의 <br />
              기준을 통과한 상품만을 판매합니다.
            </WhyDes>
          </WhyTable>
        </WhyWrapper>
      </GoodsWrapper>
    </CardDeatail>
  );
};
const CardDeatail = styled.div`
  position: relative;
  width: 1010px;
  padding-bottom: 100px;
`;

const ProductInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 36px;
  font-size: 15px;
  color: #333;
  line-height: 18px;
  list-style-type: none;
  letter-spacing: -0.5px;
`;
const GoodsWrapper = styled.div`
  width: 1010px;
  margin: 0 auto;
  font-family: "Noto Sans";
  font-weight: 300;
  letter-spacing: 0;
`;
const ContextHeader = styled.h3`
  display: block;
  margin: 75px 0 0 0;
  padding-bottom: 35px;
  font-size: 38px;
  line-height: 46px;
  text-align: center;
  border-bottom: 1px solid #c1c1c1;
  color: #666;
`;
//짝수, 홀수
const ProductInfo = styled.li`
  &:nth-child(odd) {
    width: 160px;
    padding: 0 18px 18px;
    padding-top: 18px;
    background-color: #f7f7f7;
    word-break: break-all;
    white-space: pre-line;
  }

  &:nth-child(even) {
    display: flex;
    width: 325px;
    padding: 0 18px 18px;
    padding-top: 18px;
    color: #666;
    white-space: pre-line;
  }
`;

const WhyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 21px;
`;
const WhyTable = styled.dl`
  width: 315px;
  padding-top: 59px;
`;
const WhyElement = styled.dt`
  display: block;
  font-weight: 500;
  font-size: 18px;
  color: #5f0080;
  line-height: 27px;
  text-align: center;
`;
const WhyDes = styled.dd`
  padding-top: 22px;
  font-weight: 300;
  font-size: 16px;
  color: #333;
  line-height: 25px;
  text-align: center;
`;

export default Info;
