import { AppButton, AppInput, ModalContentWrapper } from "@/comps";
import { AppStyles } from "@/lib";
import React from "react";
import { styled } from "styled-components";

export function AddQuestionModal(props: { onCancel: VoidFunction }) {
  return (
    <ModalContentWrapper>
      <Content>
        <AppInput label={"Question"} name={"ques"} placeholder={"Question"} />
        <AppInput label={"Option 1"} name={"opt1"} placeholder={"option 1"} />
        <AppInput label={"Option 2"} name={"opt1"} placeholder={"option 2"} />
        <AppInput label={"Option 3"} name={"opt1"} placeholder={"option 3"} />
        <AppInput label={"Option 4"} name={"opt1"} placeholder={"option 4"} />
        <AppInput label={"Option 5"} name={"opt1"} placeholder={"option 5"} />
        <AppInput
          label={"Answer Index"}
          name={"ans_index"}
          placeholder={"Answer index"}
        />
        <AppInput
          label={"Answer"}
          name={"ans"}
          placeholder={"Explanation of answer"}
        />
        <div className="buttons">
          <AppButton onClick={props.onCancel}>Cancel</AppButton>
          <div className="spacer" />
          <AppButton onClick={function (): void {}}>Submit</AppButton>
        </div>
      </Content>
    </ModalContentWrapper>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  width: 100%;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${AppStyles.colors.offWhite1};
    .spacer {
      width: 50px;
    }
  }
`;
