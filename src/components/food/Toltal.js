import React from "react";
import { styled } from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";
import { useSelector } from "react-redux";
const Total = () => {
  const { protein, fat, syn } = useSelector((state) => state.foodRedux);
  const data = [
    { id: 0, value: syn, label: "탄수화물" },
    { id: 1, value: protein, label: "단백질" },
    { id: 2, value: fat, label: "지방" },
  ];
  return (
    <TotalWrapper>
      <PieChart
        series={[
          {
            data,
          },
        ]}
        width={300}
        height={100}
      />
    </TotalWrapper>
  );
};
const TotalWrapper = styled.div`
  width: 300px;
  margin: 100px auto auto auto;
`;
export default Total;
