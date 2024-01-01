import React, { useRef } from "react";
import { styled } from "styled-components";
import { CoffeeOutlined } from "@ant-design/icons";
const DropDown = () => {
  const menu = [
    {
      mainMenu: "채소",
      subMenu: ["감자", "당근", "고구마", "양배추", "배추"],
      icon: <CoffeeOutlined style={{ fontSize: "20px", marginRight: "8px" }} />,
    },
    {
      mainMenu: "고기",
      subMenu: ["소고기", "돼지고기", "오리고기", "양고기", "염소고기"],
      icon: <CoffeeOutlined style={{ fontSize: "20px", marginRight: "8px" }} />,
    },
    {
      mainMenu: "생선",
      subMenu: ["생선", "굴비", "오징어", "낙지", "회"],
      icon: <CoffeeOutlined style={{ fontSize: "20px", marginRight: "8px" }} />,
    },
    {
      mainMenu: "면",
      subMenu: ["라면", "파스타", "스파게티", "짜장면", "식초"],
      icon: <CoffeeOutlined style={{ fontSize: "20px", marginRight: "8px" }} />,
    },
    {
      mainMenu: "베이커리",
      subMenu: ["소보로", "모닝빵", "바게트", "소보로", "게트바"],
      icon: <CoffeeOutlined style={{ fontSize: "20px", marginRight: "8px" }} />,
    },
    {
      mainMenu: "소스1",
      subMenu: ["식초1", "간장2", "소금3", "설탕4", "굴소스5"],
      icon: <CoffeeOutlined style={{ fontSize: "20px", marginRight: "8px" }} />,
    },
    {
      mainMenu: "소스2",
      subMenu: ["식초1", "간장2", "소금3", "설탕4", "굴소스5"],
      icon: <CoffeeOutlined style={{ fontSize: "20px", marginRight: "8px" }} />,
    },
    {
      mainMenu: "소스3",
      subMenu: ["식초1", "간장2", "소금3", "설탕4", "굴소스5"],
      icon: <CoffeeOutlined style={{ fontSize: "20px", marginRight: "8px" }} />,
    },
    {
      mainMenu: "소스4",
      subMenu: ["식초1", "간장2", "소금3", "설탕4", "굴소스5"],
      icon: <CoffeeOutlined style={{ fontSize: "20px", marginRight: "8px" }} />,
    },
  ];
  const dropDownRef = useRef(null);

  const removeSubMenu = (node) => {
    const subMenu = node.querySelector("ul");
    subMenu?.classList.remove("active");
  };

  const onNotClickMenuRemoveSubMenu = (value) => {
    const childNodes = Array.from(dropDownRef.current.childNodes);
    const filteredNodes = childNodes.filter((child, index) => index !== value);

    filteredNodes.forEach(removeSubMenu);
  };

  const onClickMenuAddSubMenu = (value) => {
    const clickMenu = dropDownRef.current.childNodes[value].querySelector("ul");
    clickMenu.classList.add("active");
  };

  const onClcikMenu = (e, value) => {
    onClickMenuAddSubMenu(value);
    onNotClickMenuRemoveSubMenu(value);
  };
  return (
    <MenuList
      onClick={() => {
        console.log(dropDownRef);
      }}
      ref={dropDownRef}
    >
      {menu.map((v, index) => {
        return (
          <Menus
            onMouseOver={(e) => {
              onClcikMenu(e, index);
            }}
            className={"menu1"}
          >
            <MenuText>
              {v.icon}
              {v.mainMenu}
            </MenuText>
            <SubMenuList>
              {v.subMenu.map((sub) => {
                return (
                  <SubMenu>
                    <MenuText className="sub">{sub}</MenuText>
                  </SubMenu>
                );
              })}
            </SubMenuList>
          </Menus>
        );
      })}
    </MenuList>
  );
};

const MenuList = styled.ul`
  background: #fff;
  list-style: none;
  position: absolute;
  z-index: 999;
  top: 77px;
  left: 10px;
  width: 150px;
  height: 360px;
  text-align: center;
  padding-left: 0px;
  display: block;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

const Menus = styled.li`
  float: left;
  width: 150px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;
const MenuText = styled.a`
  display: block;
  color: black;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 15px;
  text-decoration: none;
  text-align: left;

  &.sub {
    margin-left: 15px;
  }
`;

const SubMenuList = styled.ul`
  background: #fff;
  list-style: none;
  position: absolute;
  top: 0px;
  left: 150px;
  width: 100%;
  height: 360px;
  text-align: center;
  display: block;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  opacity: 0;
  visibility: hidden;
  padding-left: 0;
  background-color: rgb(247, 247, 247);
  cursor: pointer;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const SubMenu = styled.li`
  text-align: center;
  float: left;
  width: 100%;
  height: 40px;
  &:hover {
    color: rgb(95, 0, 128);
    text-decoration: underline;
  }
`;
export default DropDown;
