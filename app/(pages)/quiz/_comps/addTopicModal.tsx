import { AppButton, AppInput, ModalContentWrapper } from "@/comps";
import { AppStyles } from "@/lib";
import React from "react";
import { styled } from "styled-components";

export function AddTopicModal(props: { onCancel: VoidFunction }) {
  return (
    <ModalContentWrapper>
      <Content>
        <AppInput
          label={"Title"}
          name={"title"}
          placeholder={"title of input"}
        />
        <AppInput
          label={"Title"}
          name={"title"}
          placeholder={"title of input"}
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
