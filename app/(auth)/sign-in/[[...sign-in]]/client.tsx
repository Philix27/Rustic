"use client";
import { AppTopNavbar } from "@/comps";

import { SignIn } from "@clerk/nextjs";
import React from "react";
import { styled } from "styled-components";

export default function Client() {
  return (
    <Wrapper>
      <AppTopNavbar title={"Sign in"} icons={[]} />
      <div className="content">
        <SignIn appearance={{}} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100% - 40px);
    transform: scale(1.75);
    @media ${(props) => props.theme.breakpoints.sm} {
      transform: scale(1.2);
    }
  }
`;
