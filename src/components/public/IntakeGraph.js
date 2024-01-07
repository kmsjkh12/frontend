import React from "react";
import { styled } from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";
const IntakeGraph = ({ data }) => {
  return (
    <PieChart
      series={[
        {
          data,
        },
      ]}
      width={400}
      height={300}
    />
  );
};
const TotalWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;
export default IntakeGraph;
