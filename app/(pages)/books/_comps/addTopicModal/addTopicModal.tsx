"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import { AppToaster, ModalContentWrapper } from "@/comps";
import { ToggleButton } from "./toggleButton";
import { WriteComp } from "./write";
import { PreviewComp } from "./preview";

export function AddBookTopicModal(props: {
  onClose: VoidFunction;
  book_id: string;
  chapter_id: string;
}) {
  const [showDoc, setShowDoc] = useState<"WRITE" | "PREVIEW">("WRITE");
  const [docContent, setDocContent] = useState<{
    title: string;
    subtitle: string;
    content: string;
  }>({
    title: "",
    subtitle: "",
    content: "",
  });

  return (
    <ModalContentWrapper>
      <Container>
        <ToggleButton showDoc={showDoc} setShowDoc={setShowDoc} />
        {showDoc === "PREVIEW" ? (
          <PreviewComp
            title={docContent?.title}
            subtitle={docContent?.subtitle}
            markdown={docContent?.content}
          />
        ) : (
          <WriteComp
            docContent={docContent}
            setDocContent={setDocContent}
            book_id={props.book_id}
            onClose={props.onClose}
            chapter_id={props.chapter_id}
          />
        )}
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
