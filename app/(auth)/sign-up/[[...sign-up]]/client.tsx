"use client";
import { AppTopNavbar } from "@/comps";
import { AppStyles } from "@/lib";
import { SignUp } from "@clerk/nextjs";
import React from "react";
import { styled } from "styled-components";

export default function Client() {
  return (
    <Wrapper>
      <AppTopNavbar title={"Sign in"} icons={[]} />
      <div className="content">
        <SignUp />
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
    @media ${AppStyles.breakpoints.sm} {
      transform: scale(1.2);
    }
  }
`;
