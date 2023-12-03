import React from "react";
import { styled } from "styled-components";
import Sidebar from "./sidebar";
import MainComp from "./main";
import { McqList } from "@/lib/docs/mcq/types";
import { AppStyles } from "@/lib/utils";

export default function HomeView(props: { title: string }) {
  return (
    <Wrapper>
      <WrapperContent>
        <Sidebar title={props.title} />
        <MainComp title={props.title} />
      </WrapperContent>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  background-color: ${AppStyles.colors.background};
  width: 100vw;
  height: 100vh;
`;

const WrapperContent = styled.div`
  display: flex;
  height: 100%;
`;
