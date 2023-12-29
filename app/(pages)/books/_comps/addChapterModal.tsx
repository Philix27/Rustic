"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import { trpc } from "@/_trpc";
import { AppButton, AppInput, ModalContentWrapper } from "@/comps";

export function AddChapterModal(props: {
  onClose: VoidFunction;
  book_id: string;
}) {
  const addChapter = trpc.book_chapter.create.useMutation();
  const [docContent, setDocContent] = useState<{
    title: string;
  }>({
    title: "",
  });

  const handleFormSubmission = () => {
    addChapter.mutate({
      title: docContent.title,
      book_id: props.book_id,
    });
    console.log("docContent", docContent);
  };

  return (
    <ModalContentWrapper>
      <Container>
        <AppInput
          type={"text"}
          placeholder="Chapter title"
          onChange={(e) =>
            setDocContent({
              ...docContent,
              title: e.target.value,
            })
          }
          value={docContent.title}
          label={"Chapter title"}
          name={"chapter"}
        />
        <div className="buttons">
          <AppButton onClick={props.onClose}>Cancel</AppButton>
          <div className="spacer" />
          <AppButton onClick={handleFormSubmission}>Submit</AppButton>
        </div>
      </Container>
    </ModalContentWrapper>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .spacer {
      width: 50px;
    }
  }
`;
