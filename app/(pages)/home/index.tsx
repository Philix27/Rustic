import React from "react";
import { styled } from "styled-components";
import { AppStyles } from "@/lib";
import { AppTopNavbar, AppFooter } from "@/comps";


export default function HomeView(props: { title: string }) {
  return (
    <Wrapper>
      <AppTopNavbar title={"Welcome"} icons={[]} />
      <WrapperContent>
        <div>MCq</div>
        <div>Books</div>
      </WrapperContent>
      <AppFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${AppStyles.colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapperContent = styled.div`
  display: flex;
  height: 100%;
`;
