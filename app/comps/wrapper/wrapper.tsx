"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { AppStyles } from "@/lib";

export function AppWrapper(props: { children: ReactNode }) {
  return (
    <Container>
      <Inner>
        <Content>{props.children}</Content>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Inner = styled.div`
  width: 75%;
  min-height: 100vh;
  background-color: ${AppStyles.colors.backgroundLight};
  margin: 40px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
const Content = styled.div`
  min-height: 100vh;
`;
