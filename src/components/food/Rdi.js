import React, { useState } from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { L_HEALTH } from "../../redux/healthRedux";
const Rdi = () => {
  const { metabolic, calorie } = useSelector((state) => state.healthRedux);

  const dispatch = useDispatch();
  const [height, onChangeHeight] = useInput("");
  const [weight, onChangeWeight] = useInput("");
  const [age, onChangeAge] = useInput("");
  const [health, onChangeHealth] = useInput("");
  const [type, onChangeType] = useInput("");

  //기초대사량
  const metabolic_s = () => {
    if (type === "man") {
      return 66.47 + 13.75 * weight + 5 * height - 6.75 * age;
    } else if (type === "woman") {
      return 655.1 + 9.56 * weight + 1.85 * height - 4.68 * age;
    }
  };

  //칼로리
  const calorie_s = (meta) => {
    return meta * health;
  };

  return (
    <RdiWrapper>
      <HealthWrapper>
        <Label>키</Label>
        <Input value={height} onChange={onChangeHeight} />
      </HealthWrapper>
      <HealthWrapper>
        <Label>몸무게</Label>
        <Input value={weight} onChange={onChangeWeight} />
      </HealthWrapper>

      <HealthWrapper>
        <Label>나이</Label>
        <Input value={age} onChange={onChangeAge} />
      </HealthWrapper>

      <HealthWrapper>
        <Label>활동량</Label>
        <Input value={health} onChange={onChangeHealth} />
      </HealthWrapper>
      <HealthWrapper>
        <Label>성별</Label>
        <Input value={type} onChange={onChangeType} />
      </HealthWrapper>
      <button
        onClick={() => {
          const meta_value = metabolic_s();
          dispatch({
            type: L_HEALTH,
            data: {
              meta: meta_value,
              cal: calorie_s(meta_value),
            },
          });
        }}
      >
        dodododo
      </button>
    </RdiWrapper>
  );
};

const RdiWrapper = styled.div`
  width: 300px;
`;

const HealthWrapper = styled.p``;
const Label = styled.label`
  display: inline-block;
  text-align: center;
  width: 20%;
  font-weight: bold;
`;
const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 80%;
`;
export default Rdi;
