import { AllMcq, AppStyles, AppHelperFn } from "@/lib";
import React from "react";
import styled from "styled-components";
import { Text } from "@/comps";
import MainTopBar from "./TopBar";

export default function MainComp(props: { title: string }) {
  let dataList = AllMcq.filter(
    (v, index) =>
      AppHelperFn.remove_whitespace(v.title.toLowerCase()) ===
      props.title.toLowerCase()
  )[0];

  return (
    <Wrapper>
      <MainTopBar />
      <ContentsWrapper>
        <CardList>
          {dataList &&
            dataList.list.length &&
            dataList.list.map((v, i) => (
              <Card key={i}>
                <QuestionItem>
                  <div>{i + 1}.</div>
                  <Text variant="B3">{v.question}</Text>
                </QuestionItem>
                <OptionsSection>
                  <OptionsItem>
                    <div>a.</div>
                    <Text variant="B4" style={{ color: "white" }}>
                      {v.option1}
                    </Text>
                  </OptionsItem>
                  <OptionsItem>
                    <div>b.</div>
                    <Text variant="B4" style={{ color: "white" }}>
                      {v.option2}
                    </Text>
                  </OptionsItem>
                </OptionsSection>
              </Card>
            ))}
        </CardList>
      </ContentsWrapper>
    </Wrapper>
  );
}

const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 10px;
  }
`;
const OptionsItem = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 10px;
  }
`;
const OptionsSection = styled.div`
  margin-left: 30px;
  margin-top: 10px;
`;
const ContentsWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;
const CardList = styled.div`
  padding: 40px 50px;
  display: flex;
  background-color: ${AppStyles.colors.backgroundDark};
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 80%;
`;
const Card = styled.div`
  padding: 10px;
  width: 100%;
  border-bottom: solid 0.01px ${AppStyles.colors.backgroundLight};
`;
const Wrapper = styled.div`
  width: 100%;
  /* overflow-y: hidden; */
  overflow-y: auto;
  scroll-behavior: smooth;
`;
