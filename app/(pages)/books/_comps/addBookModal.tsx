"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import {
  AppButton,
  AppInput,
  ModalContentWrapper,
  AppToaster,
  AppToasterController,
} from "@/comps";
import { useSession } from "@clerk/nextjs";
import { AppClerk, trpc } from "@/lib";

export function AddBookModal(props: { onClose: VoidFunction }) {
  const { session } = useSession();
  const userRole = AppClerk.getUserRole(session);
  const addBook = trpc.books.create.useMutation();
  const [docContent, setDocContent] = useState<{
    title: string;
    desc: string;
    img_url: string;
  }>({
    title: "",
    desc: "",
    img_url: "",
  });
  const resetFormData = () => {
    setDocContent({
      title: "",
      desc: "",
      img_url: "",
    });
  };
  const handleFormSubmission = () => {
    addBook
      .mutateAsync({
        title: docContent.title,
        desc: docContent.desc,
        img_url: docContent.img_url,
      })
      .then((msg) => {
        AppToasterController("Added successfully");
        resetFormData();
      });
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
        label={"Short description"}
        name={"title"}
        placeholder={"Describe the book"}
        value={docContent.desc}
        onChange={(e) =>
          setDocContent({
            ...docContent,
            desc: e.target.value,
          })
        }
        className="mb-5"
      />
      <AppInput
        label={"Image url"}
        name={"img"}
        placeholder={"Image Link"}
        value={docContent.img_url}
        className="mb-5"
        onChange={(e) =>
          setDocContent({
            ...docContent,
            img_url: e.target.value,
          })
        }
      />
      <div className="buttons">
        <AppButton onClick={props.onClose}>Cancel</AppButton>
        <div className="spacer" />
        <AppButton onClick={() => handleFormSubmission()}>Submit</AppButton>
      </div>
      <AppToaster />
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
