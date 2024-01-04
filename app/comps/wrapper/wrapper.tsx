"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { AppStyles } from "@/lib";

export function AppWrapper(props: { children: ReactNode }) {
  return (
    <Container>
      <Inner>
        <div className="content">{props.children}</div>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.offWhite1};
`;
const Inner = styled.div`
  width: 75%;
  min-height: 100vh;
  background-color: ${AppStyles.colors.backgroundLight};
  margin: 40px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media ${AppStyles.breakpoints.sm} {
    width: 100%;
    margin: 10px 0;
  }

  .content {
    min-height: 100vh;
    @media ${AppStyles.breakpoints.sm} {
    }
  }
`;
