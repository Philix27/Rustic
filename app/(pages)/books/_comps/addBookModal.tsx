"use client";
import { AppStyles } from "@/lib";
import React, { useState } from "react";
import { styled } from "styled-components";
import { trpc } from "@/_trpc";
import { AppButton, AppInput, ModalContentWrapper } from "@/comps";

export function AddBookModal(props: { onClose: VoidFunction }) {
  const addBook = trpc.books.create.useMutation();
  const [docContent, setDocContent] = useState<{
    title: string;
    subtitle: string;
    content: string;
  }>({
    title: "",
    subtitle: "",
    content: "",
  });

  const handleFormSubmission = () => {
    addBook.mutate({
      title: docContent.title,
      desc: docContent.content,
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

        <textarea
          placeholder="Story"
          value={docContent.content}
          onChange={(e) =>
            setDocContent({
              ...docContent,
              content: e.target.value,
            })
          }
        ></textarea>
        <div className="flex flex-row" style={{ flexDirection: "row" }}>
          <AppButton onClick={props.onClose}>Cancel</AppButton>
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

  textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 48vh;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 10px;
    color: ${AppStyles.colors.offWhite1};
    background-color: ${AppStyles.colors.backgroundDark};
    font-size: 16px;
    font-weight: 400;
    font-family: sans-serif;
    line-height: 25px;
    border-radius: 5px;
  }
`;
