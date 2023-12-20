"use client";
import { MarkdownStyledComp, Text } from "@/comps";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export function PreviewComp(props: {
  title: string;
  subtitle: string;
  markdown: string;
}) {
  const [showDoc, setShowDoc] = useState<"WRITE" | "PREVIEW">("WRITE");
  return (
    <div
      className="min-h-screen"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="w-[80%] bg-blue-400 prose" style={{ width: "80%" }}>
        <Text variant={"BarTitle"}>{props.title}</Text>
        <Text variant={"B3"}>{props.subtitle}</Text>

        <MarkdownStyledComp>
          <ReactMarkdown>{props.markdown}</ReactMarkdown>
        </MarkdownStyledComp>
      </div>
    </div>
  );
}
