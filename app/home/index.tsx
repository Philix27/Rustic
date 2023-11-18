import React from "react";
import { styled } from "styled-components";
import Sidebar from "./sidebar";
import MainComp from "./main";

export default function HomeView() {
  return (
    <Wrapper>
      <WrapperContent>
        <Sidebar />
        <MainComp />
      </WrapperContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #282828;
  width: 100vw;
  height: 100vh;
`;
const WrapperContent = styled.div`
  display: flex;
  height: 100%;
`;
