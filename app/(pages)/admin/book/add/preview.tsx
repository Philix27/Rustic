"use client";
import {  MarkdownStyledComp, Text } from "@/comps";
import React, { useState } from "react";

export default function PreviewComp(props: {
  title: string;
  subtitle: string;
  markdown: string;
}) {
  const [showDoc, setShowDoc] = useState<"WRITE" | "PREVIEW">("WRITE");
  return (
    <div>
      <Text variant={"BarTitle"}>{props.title}</Text>
      <Text variant={"B3"}>{props.subtitle}</Text>
      <MarkdownStyledComp>{props.markdown}</MarkdownStyledComp>
    </div>
  );
}
