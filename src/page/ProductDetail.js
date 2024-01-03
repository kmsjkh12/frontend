import React from "react";
import CardDetails from "../components/homepage/Product/ProductMore/Detail/CardDetails";
import styled from "styled-components";
import CardMore from "../components/homepage/Product/ProductMore/Detail/CardMore";
const ProductDetail = () => {
  return (
    <ProductPageWrapper>
      <CardDetails />
      <CardMore />
    </ProductPageWrapper>
  );
};

const ProductPageWrapper = styled.div`
  position: relative;
  width: 1050px;
  margin: 0 auto;
  padding-top: 30px;
`;
export default ProductDetail;
