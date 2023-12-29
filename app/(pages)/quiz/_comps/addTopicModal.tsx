import { trpc } from "@/_trpc";
import {
  AppButton,
  AppInput,
  AppToaster,
  AppToasterController,
  ModalContentWrapper,
} from "@/comps";
import { AppStyles } from "@/lib";
import React, { useState } from "react";
import { styled } from "styled-components";

export function AddTopicModal(props: { onCancel: VoidFunction }) {
  const addBook = trpc.quiz_topics.create.useMutation();
  const [formData, setFormData] = useState<{
    title: string;
    desc: string;
  }>({
    title: "",
    desc: "",
  });
  const resetFormData = () => {
    setFormData({
      title: "",
      desc: "",
    });
  };
  const handleFormSubmission = () => {
    if (formData.title && formData.desc) {
      addBook
        .mutateAsync({
          title: formData.title,
          desc: formData.desc,
        })
        .then((msg) => {
          AppToasterController("Added successfully");
          resetFormData();
        });
    }
  };
  return (
    <ModalContentWrapper>
      <Content>
        <AppInput
          label={"Title"}
          name={"title"}
          placeholder={"Which topic will these questions address"}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <AppInput
          label={"Description"}
          name={"desc"}
          placeholder={"Short note about quiz questions"}
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
        />
        <div className="buttons">
          <AppButton onClick={props.onCancel}>Cancel</AppButton>
          <div className="spacer" />
          <AppButton onClick={handleFormSubmission}>Submit</AppButton>
        </div>
      </Content>
      <AppToaster />
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
