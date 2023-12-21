import { AppStyles } from "@/lib";
import React from "react";
import styled from "styled-components";
import { Text } from "@/comps";
import { TabsTypes } from "./types";

export default function TopBar(props: {
  activeTab: TabsTypes;
  setActive: React.Dispatch<React.SetStateAction<TabsTypes>>;
}) {
  return (
    <Wrapper>
      <Item
        $isActive={props.activeTab === "ARTICLE"}
        onClick={() => {
          props.setActive("ARTICLE");
          console.log("Article");
        }}
      >
        <Text variant="B1">Tutorials</Text>
      </Item>
      <Item
        $isActive={props.activeTab === "ARTICLE"}
        onClick={() => {
          props.setActive("ARTICLE");
          console.log("Article");
        }}
      >
        <Text variant="B1">Articles</Text>
      </Item>
      <Item
        $isActive={props.activeTab === "MCQ"}
        onClick={() => {
          props.setActive("MCQ");
          console.log("MCQ");
        }}
      >
        <Text variant="B1">MCQ</Text>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${AppStyles.colors.backgroundLight};
  /* padding: 0 20px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div<{ $isActive: boolean }>`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  border-bottom: solid 2px ${(props) => (props.$isActive ? "white" : "#303030")};

  &:hover {
    border-bottom: solid 2px white;
    p {
      color: white;
    }
  }
`;
