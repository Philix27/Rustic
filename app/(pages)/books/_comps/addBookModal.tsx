"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import { trpc } from "@/_trpc";
import { AppButton, AppInput, ModalContentWrapper } from "@/comps";

export function AddBookModal(props: { onClose: VoidFunction }) {
  const addBook = trpc.books.create.useMutation();
  const [docContent, setDocContent] = useState<{
    title: string;
    subtitle: string;
  }>({
    title: "",
    subtitle: "",
  });

  const handleFormSubmission = () => {
    addBook.mutate({
      title: docContent.title,
      desc: docContent.subtitle,
      img_url: docContent.subtitle,
    });
    // console.log("docContent", docContent);
  };

  return (
    <ModalContentWrapper>
      <Container>
        <AppInput
          label={"Book title"}
          name={"title"}
          placeholder={"Write the title of the book"}
          value={docContent.title}
          onChange={(e) =>
            setDocContent({
              ...docContent,
              title: e.target.value,
            })
          }
          className="mb-5"
        />
        <AppInput
          label={"Image url"}
          name={"img"}
          placeholder={"Image Link"}
          value={docContent.subtitle}
          className="mb-5"
          onChange={(e) =>
            setDocContent({
              ...docContent,
              subtitle: e.target.value,
            })
          }
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
    .spacer {
      width: 50px;
    }
  }
`;
