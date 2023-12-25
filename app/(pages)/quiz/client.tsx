"use client";
import { AppTopNavbar, Text } from "@/comps";
import React from "react";
import styled from "styled-components";
import { quizList } from "./list";
import { AppStyles } from "@/lib";

export default function QuizClient() {
  return (
    <Wrapper>
      <AppTopNavbar title={"Quiz"} icons={[]} />
      <GridWrapper>
        <Grid>
          {quizList.map((val, i) => (
            <GridItem key={i}>
              <Text variant={"B4"} className="title">
                {val.topic}
              </Text>
              <hr style={{ border: `solid 0.5px ${AppStyles.colors.grey1}` }} />
              <div className="subtitle">
                <Text variant={"B5"}>{val.subtitle}</Text>
              </div>
              <Footer>
                <Text variant={"B4"}>Questions: {val.questionCount}</Text>
                <Text variant={"B4"}>Views: {val.viewsCount}</Text>
              </Footer>
            </GridItem>
          ))}
        </Grid>
      </GridWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
`;
const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  width: 80%;
  margin-bottom: 20px;

  @media ${AppStyles.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background-color: ${AppStyles.colors.backgroundLight};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: solid 1px ${AppStyles.colors.background};
  &:hover {
    border-bottom: solid 1px ${AppStyles.colors.grey1};
  }
  .title {
    color: white;
    margin-bottom: 10px;
    padding: 0 20px;
    margin-top: 15px;
  }
  .subtitle {
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 20px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${AppStyles.colors.background};
  padding: 10px 20px;
`;
