import React from "react";
import styled from "styled-components";
import MainTopBar from "./TopBar";

export default function MainComp() {
  return (
    <Wrapper>
      <MainTopBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
