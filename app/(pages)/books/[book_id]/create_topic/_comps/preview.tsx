"use client";
import { AppWrapper, MarkdownStyledComp, Text } from "@/comps";
import React from "react";
import ReactMarkdown from "react-markdown";

export function PreviewComp(props: {
  title: string;
  subtitle: string;
  markdown: string;
}) {
  return (
    <AppWrapper>
      <div className="flex items-center justify-center w-full">
        <Text variant={"BarTitle"} className="mt-3">{props.title}</Text>
        <Text variant={"B3"}>{props.subtitle}</Text>
      </div>
      <div className="flex items-center justify-center w-full">
        <MarkdownStyledComp>
          <ReactMarkdown>{props.markdown}</ReactMarkdown>
        </MarkdownStyledComp>
      </div>
    </AppWrapper>
  );
}
