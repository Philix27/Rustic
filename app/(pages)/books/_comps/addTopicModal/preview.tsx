"use client";
import { AppWrapper, MarkdownStyledComp, Text } from "@/comps";
import React from "react";
import ReactMarkdown from "react-markdown";

export function PreviewComp(props: {
  title: string;
  markdown: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-center w-full py-6">
        <Text variant={"B1"}>{props.title}</Text>
      </div>
      <div className="flex items-center justify-center w-full">
        <MarkdownStyledComp>
          <ReactMarkdown>{props.markdown}</ReactMarkdown>
        </MarkdownStyledComp>
      </div>
    </div>
  );
}
