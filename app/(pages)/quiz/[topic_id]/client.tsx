"use client";
import { AppButton, AppModal, AppTopNavbar, Text } from "@/comps";
import React, { useState } from "react";
import styled from "styled-components";
import { AppStyles } from "@/lib";
import { questionsList } from "./questions";
import { AddQuestionModal } from "../_comps";


export function QuestionsPageClient(props: { topic_id: string }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Wrapper>
      <AppTopNavbar title={"Quiz"} icons={[]} />
      <GridWrapper>
        <div className="grid">
          {questionsList.map((val, i) => (
            <GridItem key={i}>
              <Text variant={"B4"} className="title">
                {i + 1}. {val.question}
              </Text>
              <hr style={{ border: `solid 0.5px ${AppStyles.colors.grey1}` }} />
              <ol className="subtitle">
                <li>
                  <Text variant={"B5"}>{val.option1}</Text>
                </li>
                <li>
                  <Text variant={"B5"}>{val.option2}</Text>
                </li>
              </ol>
              <Footer>
                <Text variant={"B5"}>Ans: {val.answer}</Text>
              </Footer>
            </GridItem>
          ))}
        </div>
      </GridWrapper>
      <AppModal isMounted={showModal}>
        <AddQuestionModal onCancel={() => setShowModal(false)} />
      </AppModal>
      <div className="button_container">
        <AppButton onClick={() => setShowModal(true)}> Add topic</AppButton>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  .button_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  .grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 60%;
    margin-bottom: 50px;

    @media ${AppStyles.breakpoints.sm} {
      width: 90%;
    }
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
    list-style: lower-alpha;
    li {
      list-style: lower-alpha;
      list-style-type: lower-alpha;
      color: ${AppStyles.colors.offWhite1};
      margin-left: 20px;
      margin-bottom: 10px;
      p {
        margin-left: 5px;
      }
    }
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${AppStyles.colors.background};
  padding: 10px 20px;
`;
