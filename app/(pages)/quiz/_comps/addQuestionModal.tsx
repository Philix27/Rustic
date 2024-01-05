import {
  AppButton,
  AppInput,
  AppToaster,
  AppToasterController,
  ModalContentWrapper,
} from "@/comps";
import { AppClerk, trpc } from "@/lib";
import React, { useState } from "react";
import { styled } from "styled-components";
import { FormDataType, initialValue } from "./dataType";
import { useSession } from "@clerk/nextjs";

export function AddQuestionModal(props: { onCancel: VoidFunction }) {
  const { session } = useSession();
  const userRole = AppClerk.getUserRole(session);
  const addBook = trpc.quiz_topics.create.useMutation();
  const [formData, setFormData] = useState<FormDataType>(initialValue);
  const resetFormData = () => {
    setFormData(initialValue);
  };
  const handleFormSubmission = () => {
    if (formData.question && formData.option1) {
      if (userRole === "ADMIN") {
        addBook
          .mutateAsync({
            title: formData.question,
            desc: formData.option1,
          })
          .then((msg) => {
            AppToasterController("Added successfully");
            resetFormData();
          });
      } else {
        AppToasterController.error("You are not an admin");
      }
    } else {
      AppToasterController.error("Some fields are missing");
    }
  };

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
    color: ${(props) => props.theme.colors.offWhite1};
    .spacer {
      width: 50px;
    }
  }
`;
