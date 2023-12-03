"use client";
import React from "react";
import { TabsTypes } from "@/(pages)/home/sidebar/types";
import { AppStyles } from "@/lib/utils";
import styled from "styled-components";
import { Text } from "../../comps/text/Text";
// import { TextHeader } from "@/comps";

export function CmsTopBar(props: {
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
        <Text variant="BarTitle">Tutorials</Text>
      </Item>
      <Item
        $isActive={props.activeTab === "ARTICLE"}
        onClick={() => {
          props.setActive("ARTICLE");
          console.log("Article");
        }}
      >
        <Text variant="BarTitle">Mcq</Text>
      </Item>
      <Item
        $isActive={props.activeTab === "ARTICLE"}
        onClick={() => {
          props.setActive("ARTICLE");
          console.log("Article");
        }}
      >
        <Text variant="BarTitle">Article</Text>
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
