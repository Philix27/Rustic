"use client";
import { AppButton, AppInput, AppWrapper, InputSelect } from "@/comps";
import React, { useState } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { trpc } from "@/lib";

export function WriteComp(props: {
  book_id: string;
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
  const [chapter_id, setChapterId] = useState<string>();
  const { mutateAsync } = trpc.book_chapter_topics.create.useMutation();
  const {
    isLoading,
    data: chapters,
    refetch,
  } = trpc.book_chapter.get_all.useQuery(
    {
      book_id: props.book_id,
    },
    { enabled: false }
  );
  const handleFormSubmission = () => {
    mutateAsync({
      title: props.docContent.title,
      book_id: props.book_id,
      chapter_id: chapter_id,
      content: props.docContent.content,
    })
      .then((e) => {})
      .catch(() => {});
  };
  if (isLoading) {
    return <div>Loading Chapters...</div>;
  }
  return (
    <AppWrapper>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center flex-col min-h-screen w-[80%]">
          <div className="w-[80%] flex flex-col items-center m-5 justify-around">
            <InputSelect
              label={"Chapters"}
              onChange={(e) => {
                setChapterId(e.target.value);
                console.log("Onchange select23", e.target.value);
              }}
              required={false}
              options={chapters.map((v, i) => {
                return { name: v.title, value: v.id };
              })}
            />
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
              className="w-full mt-6 "
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

            <AppButton onClick={handleFormSubmission}>Add</AppButton>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
}
