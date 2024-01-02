"use client";
import { AppButton, AppInput, AppWrapper, InputSelect } from "@/comps";
import React, { useState } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { trpc } from "@/lib";
import { styled } from "styled-components";

export function WriteComp(props: {
  book_id: string;
  chapter_id: string;
  onClose: VoidFunction;
  docContent: {
    title: string;
    subtitle: string;
    content: string;
  };
  setDocContent: React.Dispatch<
    React.SetStateAction<{
      title: string;
      subtitle: string;
      content: string;
    }>
  >;
}) {
  const { mutateAsync } = trpc.book_chapter_topics.create.useMutation();

  const handleFormSubmission = () => {
    mutateAsync({
      title: props.docContent.title,
      book_id: props.book_id,
      chapter_id: props.chapter_id,
      content: props.docContent.content,
    })
      .then((e) => {})
      .catch(() => {});
  };

  return (
    <Wrapper>
      <div className="inner_wrapper">
        <div className="content">
          <AppInput
            label={"Title"}
            name={"title"}
            placeholder={"Topic title"}
            onChange={(e) =>
              props.setDocContent({
                ...props.docContent,
                title: e.target.value,
              })
            }
            value={props.docContent.title}
          />

          <CodeMirror
            value={props.docContent.content}
            minHeight="500px"
            className="code_mirror"
            theme={vscodeDark}
            extensions={[
              markdown({ base: markdownLanguage, codeLanguages: languages }),
            ]}
            onChange={(val) =>
              props.setDocContent({
                ...props.docContent,
                content: val,
              })
            }
          />
          <div className="buttons">
            <AppButton onClick={props.onClose}>Cancel</AppButton>
            <div className="spacer" />
            <AppButton status="Loading" onClick={() => handleFormSubmission()}>
              Submit
            </AppButton>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  .inner_wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
      justify-content: space-around;

      .code_mirror {
        width: 100%;
      }
    }
  }
`;
