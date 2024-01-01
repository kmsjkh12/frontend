import React from "react";
import CardList from "./CardList";
import styled from "styled-components";
const TagCardList = () => {
  return (
    <TagCardListWrapper>
      <Tag>
        <Link>
          <TagSpan>함께하기 좋은 연말파티음식🍲</TagSpan>
        </Link>
        <TagInfo>한식부터 양식까지 호불호 없는 파티메뉴 총집합</TagInfo>
      </Tag>
      <CardList />
    </TagCardListWrapper>
  );
};

const TagCardListWrapper = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
`;
const Tag = styled.div`
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  position: relative;
  display: flex;
  padding: 8px 0px;
`;
const TagSpan = styled.span`
  color: rgb(51, 51, 51);
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.26px;
  font-weight: 500;
`;

const TagInfo = styled.p`
  ont-size: 16px;
  font-weight: normal;
  line-height: 1.45;
  letter-spacing: -0.2px;
  text-align: center;
  color: rgb(153, 153, 153);
`;
export default TagCardList;
