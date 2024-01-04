"use client";
import { AppButton, AppInput, AppToasterController } from "@/comps";
import React from "react";
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
  isEdit: boolean;
  editTopicId: string;
  docContent: {
    title: string;
    content: string;
  };
  setDocContent: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >;
}) {
  const { mutateAsync } = trpc.book_chapter_topics.create.useMutation();
  const { mutateAsync: updateAsync } =
    trpc.book_chapter_topics.update.useMutation();

  const handleFormSubmission = () => {
    if (props.isEdit) {
      updateAsync({
        id: props.editTopicId,
        title: props.docContent.title,
        content: props.docContent.content,
      }).then((e) => {
        AppToasterController.success("Topic added successfully");
        props.setDocContent({ title: "", content: "" });
      });
    } else {
      mutateAsync({
        title: props.docContent.title,
        book_id: props.book_id,
        chapter_id: props.chapter_id,
        content: props.docContent.content,
      }).then((e) => {
        AppToasterController.success("Topic added successfully");
        props.setDocContent({ title: "", content: "" });
      });
    }
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
