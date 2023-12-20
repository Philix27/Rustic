"use client";
import { AppButton, AppInput, AppWrapper } from "@/comps";
import React from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export function WriteComp(props: {
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
  const code = "console.log('Code Mirror!');";
  return (
    <AppWrapper>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center flex-col min-h-screen w-[80%]">
          <div className="w-[80%] flex flex-col items-center m-5 justify-around">
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

            <AppButton onClick={() => {}}>Add</AppButton>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
}
