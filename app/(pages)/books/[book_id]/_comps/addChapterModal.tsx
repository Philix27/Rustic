"use client";
import { AppStyles } from "@/lib";
import React, { useState } from "react";
import { styled } from "styled-components";
import { trpc } from "@/_trpc";

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
    <>
      <Container>
        <div>
          <input
            type={"text"}
            placeholder="Chapter title"
            onChange={(e) =>
              setDocContent({
                ...docContent,
                title: e.target.value,
              })
            }
            value={docContent.title}
          />
        </div>
        <ButtonGroup style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={handleFormSubmission}>Submit</button>
          <button onClick={props.onClose}>Cancel</button>
        </ButtonGroup>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: ${AppStyles.colors.background3};
  border: solid 0.1px ${AppStyles.colors.grey2};
  padding: 20px;
  width: 50%;
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    input {
      min-width: 100%;
      border: none;
      outline: none;
      margin-bottom: 20px;
      color: ${AppStyles.colors.offWhite1};
      background-color: ${AppStyles.colors.backgroundDark};
      font-size: 16px;
      font-weight: 600;
      padding: 10px;
      border-radius: 5px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  button {
    padding: 8px 20px;
    background-color: ${AppStyles.colors.backgroundLight};
    border-radius: 5px;
    margin-top: 20px;

    &:hover {
      background-color: ${AppStyles.colors.backgroundDark};
    }
  }
`;
