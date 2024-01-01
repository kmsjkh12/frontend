import React, { useState } from "react";
import styled from "styled-components";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import DropDown from "./DropDown";
const Header = () => {
  const [visible, setVisible] = useState(false);

  const onMouseOver = () => {
    setVisible(true);
  };
  const onMouseOut = () => {
    setVisible(false);
  };
  return (
    <HeaderWrapper>
      <TopWrapper>
        <UserWrapper>
          <UserTab>회원가입</UserTab>
          <UserDiv />
          <UserTab>로그인</UserTab>
          <UserDiv />
          <UserTab>고객센터</UserTab>
        </UserWrapper>

        <MainWrapper>
          <Logo>oooo</Logo>
          <SearchBox>
            <InputSearch placeholder="검색어를 입력해주세요"></InputSearch>
            <InputButton>
              <SearchOutlined />
            </InputButton>
          </SearchBox>
        </MainWrapper>
        <IconWrapper>
          <IconBox>
            <UserOutlined />
          </IconBox>
          <IconBox>
            <HeartOutlined />
          </IconBox>
          <IconBox>
            <ShoppingCartOutlined />
          </IconBox>
        </IconWrapper>
      </TopWrapper>
      <MenuWrapper>
        <MenuDiv>
          <Category onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <CategorySpan>
              <MenuOutlined style={{ marginRight: "10px" }} />
              카테고리
            </CategorySpan>

            {visible ? <DropDown /> : ""}
          </Category>

          <MenuList>
            <Menu>
              <MenuSpan>신상품</MenuSpan>
            </Menu>
            <Menu>
              <MenuSpan>베스트</MenuSpan>
            </Menu>
            <Menu>
              <MenuSpan>알뜰쇼핑</MenuSpan>
            </Menu>
            <Menu>
              <MenuSpan>특가/혜택</MenuSpan>
            </Menu>
          </MenuList>

          <ProduceWrapper>
            <Produce>
              <ProduceSpan>안내사항</ProduceSpan>
            </Produce>
          </ProduceWrapper>
        </MenuDiv>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  margin: 0;
  box-sizing: border-box;
`;

const TopWrapper = styled.div`
  position: relative;
  width: 1080px;
  height: 100px;
  margin: 0 auto;
  letter-spacing: -0.3px;
`;
const UserWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const UserTab = styled.span`
  cursor: pointer;
`;
const UserDiv = styled.div`
  width: 1px;
  height: 13px;
  margin: 0px 12px;
  background-color: rgb(217, 217, 217);
`;

const MainWrapper = styled.div`
  height: 100px;
  padding-top: 36px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 63px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 325px;
  top: 55px;
  width: 400px;
  height: 50px;
  padding-left: 14px;
  border: 1px solid rgb(95, 0, 128);
  border-radius: 6px;
  background-color: white;
  box-shadow: rgb(247, 247, 247) 0px 0px 0px 1px inset;
`;
const InputSearch = styled.input`
  width: 300px;
  background-color: inherit;
  border: none;
  outline: none;
  font-size: 16px;
  letter-spacing: -0.33px;
`;
const InputButton = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  margin: 10px;
  opacity: 0.5;
  font-size: 20px;
  border: 0;
  background-color: transparent;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: -6px;
  top: 60px;
`;

const IconBox = styled.div`
  width: 36px;
  height: 36px;
  margin-left: 30px;
  cursor: pointer;
  font-size: 25px;

  opacity: 0.5;
`;
const MenuWrapper = styled.div`
  min-width: 1050px;
  letter-spacing: -0.3px;
  background-color: white;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;
  width: 100%;
`;
const MenuDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 22px;
  width: 1050px;
  height: 56px;
  margin: 0px auto;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  height: 100%;
`;

const CategorySpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: rgb(51, 51, 51);
`;

const MenuList = styled.ul`
  display: flex;
  margin-right: 50px;
  list-style-type: none;
`;

const Menu = styled.li`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 55px;
  padding-top: 5px;
  line-height: 20px;
  text-align: center;
`;
const MenuSpan = styled.span`
  height: fit-content;
  font-size: 16px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  cursor: pointer;
`;
const ProduceWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: -3px;
`;
const Produce = styled.div`
  padding: 6px 16px;
  border-radius: 18px;
  border: 1px solid rgb(238, 238, 238);
  color: rgb(102, 102, 102);
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.32px;
`;
const ProduceSpan = styled.span`
  font-weight: 500;
  color: rgb(95, 0, 128);
`;
export default Header;
