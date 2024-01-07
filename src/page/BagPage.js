import React, { useState } from "react";
import "./fade.css";
import useMountTransition from "../hooks/useMountTransition";
import { styled } from "styled-components";
const BagPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const hasTransitionedIn = useMountTransition(isMounted, 1000);
  return (
    <div className="container">
      <button onClick={() => setIsMounted(!isMounted)}>
        {`${isMounted ? "Hide" : "Show"} Element`}
      </button>

      <div className="content">
        {(hasTransitionedIn || isMounted) && (
          <Visible
            className={`card ${hasTransitionedIn && "in"} ${
              isMounted && "visible"
            }`}
          >
            Card Content
          </Visible>
        )}
      </div>
    </div>
  );
};

const Visible = styled.div`
  &.card {
    opacity: 0;
    transform: translateY(15px);
    transition: opacity 1s ease, transform 1s ease;
  }
  &.card.in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
export default BagPage;
