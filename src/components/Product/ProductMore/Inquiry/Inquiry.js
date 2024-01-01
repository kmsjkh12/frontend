import React from "react";
import styled from "styled-components";

const Inquiry = () => {
  return (
    <InquiryTr>
      <InquiryTd>중량</InquiryTd>
      <InquiryTd>강**</InquiryTd>
      <InquiryTd>2023-12.28</InquiryTd>
      <InquiryTd>답변완료</InquiryTd>
    </InquiryTr>
  );
};
const InquiryTr = styled.tr`
  height: 64px;
  border-bottom: 1px solid rgb(244, 244, 244);
  line-height: 19px;
  letter-spacing: -0.5px;
`;
const InquiryTd = styled.td`
  text-align: left;
  padding: 0px 20px;
  cursor: pointer;
  color: rgb(153, 153, 153);
`;
export default Inquiry;
