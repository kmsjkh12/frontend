import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { CHOICE_FOOD } from "../../../redux/foodRedux";
const MealDetailCard = ({ onClickDetails, mealTime }) => {
  const dispatch = useDispatch();

  const selectList = ["g(그람)", "인분"];

  const [selected, setSelected] = useState("g(그람)");

  const { details_food, day } = useSelector((state) => state.foodRedux);
  const { user } = useSelector((state) => state.userRedux);
  const [mealCount, setMealCount] = useState("");

  const [foodData, setFoodData] = useState({
    cal: 0,
    syn: 0,
    protein: 0,
    fat: 0,
    nat: 0,
  });

  useEffect(() => {
    if (selected === "g(그람)") {
      const num = parseInt(mealCount) / details_food.foodcount;
      setFoodData((state) => ({
        ...state,
        cal: details_food.cal * num,
        syn: details_food.syn * num,
        protein: details_food.protein * num,
        fat: details_food.fat * num,
        nat: details_food.nat * num,
      }));
    }
    if (selected === "인분") {
      setFoodData((state) => ({
        ...state,
        cal: details_food.cal * mealCount,
        syn: details_food.syn * mealCount,
        protein: details_food.protein * mealCount,
        fat: details_food.fat * mealCount,
        nat: details_food.nat * mealCount,
      }));
    }
    if (mealCount === "") {
      setFoodData((state) => ({
        ...state,
        cal: details_food.cal,
        syn: details_food.syn,
        protein: details_food.protein,
        fat: details_food.fat,
        nat: details_food.nat,
      }));
    }
  }, [mealCount, selected]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const onChangeCount = (e) => {
    setMealCount(e.target.value);
    console.log(e.target.value);
  };

  //디테일 페이지에서 추가하기 버튼
  const onClickAddFood = () => {
    const card = details_food;
    card.cal = foodData.cal;
    card.syn = foodData.syn;
    card.protein = foodData.protein;
    card.nat = foodData.nat;
    card.fat = foodData.fat;
    card.count = parseInt(mealCount);
    card.serving = selected;

    delete card.id;

    console.log(card);

    dispatch({
      type: CHOICE_FOOD,
      data: { card, mealdate: day, id: user.id, mealtime: mealTime },
    });
    onClickDetails();
  };
  return (
    <MealDetailCardWrapper>
      <MealDetailTopWrapper>
        <MealSelectLeftWrapper>
          <MealBrand>
            <Brand></Brand>
          </MealBrand>
          <FoodName>
            <Name>{details_food.foodname}</Name>
          </FoodName>
        </MealSelectLeftWrapper>
        <MealDetailRightWrapper>
          <CloseWrapper
            onClick={() => {
              onClickDetails();
            }}
          >
            <Close>취소</Close>
          </CloseWrapper>
        </MealDetailRightWrapper>
      </MealDetailTopWrapper>
      <MealCountWrapper>
        <ButtonWrapper>
          <LabelWrapper>개수</LabelWrapper>
          <InputWrapper
            type="text"
            onChange={onChangeCount}
            value={mealCount}
          ></InputWrapper>
        </ButtonWrapper>
        <ButtonWrapper>
          <LabelWrapper>단위</LabelWrapper>
          <DropWrapper onChange={handleSelect} value={selected}>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </DropWrapper>
        </ButtonWrapper>
        <AddButton
          onClick={() => {
            onClickAddFood();
          }}
        >
          추가하기
        </AddButton>
      </MealCountWrapper>
      <FoodIntakeWrapper>
        <FoodIntakeCard>
          <Title>칼로리</Title>
          <Content>{Math.round(foodData.cal)}</Content>
        </FoodIntakeCard>
        <FoodIntakeCard>
          <Title>탄수화물</Title>
          <Content>{Math.round(foodData.syn)}</Content>
        </FoodIntakeCard>
        <FoodIntakeCard>
          <Title>지방</Title>
          <Content>{Math.round(foodData.fat)}</Content>
        </FoodIntakeCard>
        <FoodIntakeCard>
          <Title>단백질</Title>
          <Content>{Math.round(foodData.protein)}</Content>
        </FoodIntakeCard>
      </FoodIntakeWrapper>
    </MealDetailCardWrapper>
  );
};

const MealDetailCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
const MealDetailTopWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;
const MealCountWrapper = styled.div`
  width: 100%;
  height: 150px;
`;

const MealSelectLeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin: 5px;
`;
const MealBrand = styled.div`
  width: 100%;
  heigt: 50%;
`;
const Brand = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
const FoodName = styled.div`
  width: 100%;
  heigt: 50%;
`;
const Name = styled.span`
  font-size: 15px;
`;
const MealDetailRightWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin: 5px;
`;
const CloseWrapper = styled.div`
  margin: 20px auto;
  float: right;
  cursor: pointer;
`;
const Close = styled.span`
  color: green;
  font-size: 15px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
`;
const LabelWrapper = styled.label`
  padding-right: 20px;
  width: 20%;
`;
const InputWrapper = styled.input`
  width: 80%;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  padding: 0px 0px 0px 10px;
`;
const DropWrapper = styled.select`
  width: 80%;
  height: 40px;
  font-weight: bold;
  font-size: 17px;
  padding: 0px 0px 0px 10px;
`;
const AddButton = styled.button`
  width: 97%;
  height: 40px;
  border-radius: 5px;
  background-color: green;
`;
const FoodIntakeWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
`;
const FoodIntakeCard = styled.div`
  width: 48%;
  height: 48%;
  margin-right: 4px;
  text-align: center;
  background-color: #808080;
  color: white;
`;
const Title = styled.div`
  width: 200px;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
`;
const Content = styled.div`
  width: 200px;
  height: 50%;
  padding-top: 5px;
  font-size: 17px;

  text-align: center;
`;
export default MealDetailCard;
