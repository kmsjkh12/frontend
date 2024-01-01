import React from "react";
import styled from "styled-components";
import Inquiry from "./Inquiry";

const InquiryList = () => {
  return (
    <InquiryWrapper>
      <InquiryHeaderWrapper>
        <InquiryButtonWrapper>
          <InquiryButton>
            <span>문의하기</span>
          </InquiryButton>
        </InquiryButtonWrapper>
        <InquiryHeaderContent>
          <InquiryHeader>상품 문의</InquiryHeader>
          <InquiryDesList>
            <InquiryDes>
              상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
              글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
            </InquiryDes>
            <InquiryDes>
              배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내
            </InquiryDes>
          </InquiryDesList>
        </InquiryHeaderContent>
      </InquiryHeaderWrapper>
      <InquiryContent>
        <InquiryTable>
          <InquiryThead>
            <tr>
              <InquiryTitle className="title">제목</InquiryTitle>
              <InquiryTitle className="author">작성자</InquiryTitle>
              <InquiryTitle className="date">작성일</InquiryTitle>
              <InquiryTitle className="status">답변상태</InquiryTitle>
            </tr>
          </InquiryThead>
          <InquiryTbody>
            <Inquiry></Inquiry>
          </InquiryTbody>
        </InquiryTable>
      </InquiryContent>
    </InquiryWrapper>
  );
};

const InquiryWrapper = styled.div`
  position: relative;
  width: 1010px;
  padding-bottom: 100px;
`;
const InquiryHeaderWrapper = styled.div`
  margin-bottom: 60px;
`;
const InquiryButtonWrapper = styled.div`
  position: absolute;
  right: 0px;
`;
const InquiryButton = styled.button`
  border-radius: 3px;

  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 120px;
  height: 40px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
`;

const InquiryHeaderContent = styled.div`
  padding-bottom: 40px;
  letter-spacing: -0.5px;
`;
const InquiryHeader = styled.strong`
  display: block;
  padding-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 21px;
  color: rgb(51, 51, 51);
`;

const InquiryDesList = styled.ul`
  line-height: 19px;
  font-weight: 400;
  color: rgb(153, 153, 153);
`;
const InquiryDes = styled.li`
  padding-left: 10px;
`;

const InquiryContent = styled.div``;
const InquiryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;
const InquiryThead = styled.thead`
  height: 58px;
  border-top: 2px solid rgb(51, 51, 51);
  border-bottom: 1px solid rgb(51, 51, 51);
`;

const InquiryTitle = styled.th`
  font-weight: 500;
  letter-spacing: -0.5px;
  color: rgb(51, 51, 51);

  &.title {
    width: 710px;
  }
  &.author {
    width: 110px;
  }
  &.date {
    width: 110px;
  }
  &.status {
    width: 100px;
  }
`;

const InquiryTbody = styled.tbody``;

export default InquiryList;
