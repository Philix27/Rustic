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
      <div className="w-[80%] " style={{ width: "80%" }}>
        <Text variant={"BarTitle"}>{props.title}</Text>
        <Text variant={"B3"}>{props.subtitle}</Text>
        <MarkdownStyledComp>
          <ReactMarkdown>{props.markdown}</ReactMarkdown>
        </MarkdownStyledComp>
      </div>
    </AppWrapper>
  );
}
