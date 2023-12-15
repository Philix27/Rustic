"use client";
import React from "react";
import { styled } from "styled-components";
import { AppStyles } from "@/lib";
import { AppTopNavbar, AppFooter, Text } from "@/comps";

export default function HomeView(props: { title: string }) {
  return (
    <Wrapper>
      <AppTopNavbar title={"Explore"} icons={[]} />
      <WrapperContent>
        <Text variant={"B1"}>Explore our collections</Text>

        <Text variant={"B1"}>Welcome to the Rustic Guide</Text>
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
  align-items: center;
`;

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  /* background-color: #2b1e07; */
  align-items: center;
  /* justify-content: center; */
  padding: 50px 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  /* background-color: #07232b; */
  width: 100%;
  margin: 50px 0;
  div {
    background-color: ${AppStyles.colors.backgroundDark};
    border: solid 0.2px ${AppStyles.colors.grey2};
    padding: 15px;
    border-radius: 10px;
    min-height: 200px;

    &:hover {
      border: solid 0.2px ${AppStyles.colors.offWhite1};
    }
  }
`;
