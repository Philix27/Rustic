"use client";
import { AppTopNavbar, Text } from "@/comps";
import React from "react";
import styled from "styled-components";
import { quizList } from "./list";
import { AppStyles } from "@/lib";

export default function QuizClient() {
  return (
    <div className="min-h-full">
      <AppTopNavbar title={"Quiz"} icons={[]} />
      <GridWrapper>
        <Grid>
          {quizList.map((val, i) => (
            <GridItem key={i}>
              <Text variant={"B2"} className="text-white mb-2 px-[20px] mt-5">
                {val.topic}
              </Text>
              <hr style={{ border: `solid 0.5px ${AppStyles.colors.grey1}` }} />
              <div className="px-[20px] py-5">
                <Text variant={"B3"}>{val.subtitle}</Text>
              </div>
              <Footer>
                <Text variant={"B4"}>Questions: {val.questionCount}</Text>
                <Text variant={"B4"}>Views: {val.viewsCount}</Text>
              </Footer>
            </GridItem>
          ))}
        </Grid>
      </GridWrapper>
    </div>
  );
}

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
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${AppStyles.colors.background};
  padding: 10px 20px;
`;
