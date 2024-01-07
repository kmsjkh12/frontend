import React from "react";
import Spinner from "../../assets/Spinner-1s-200px.gif";
import { styled } from "styled-components";
const Loading = () => {
  return (
    <LoadingWrapper>
      <h3>잠시만 기다려주세요</h3>
      <img src={Spinner} alt="로딩" width="10%" />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export default Loading;
