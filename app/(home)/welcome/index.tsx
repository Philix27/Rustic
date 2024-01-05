"use client";
import React from "react";
import { styled } from "styled-components";

import { AppTopNavbar, AppFooter } from "@/comps";
import { CardsSection } from "./cards";
import { HeroSection } from "./hero";

export default function WelcomeView(props: { title: string }) {
  return (
    <Wrapper>
      <AppTopNavbar title={"Welcome"} icons={[]} />
      <HeroSection />
      <CardsSection />
      <AppFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
