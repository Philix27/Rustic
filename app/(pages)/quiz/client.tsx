"use client";
import { AppTopNavbar, AppWrapper } from "@/comps";
import { MdPublish, MdPreview } from "react-icons/md";
import React from "react";

export default function QuizClient() {
  return (
    <div>
      <AppTopNavbar title={"Quiz"} icons={[]} />
      <AppWrapper>
        <div>Quiz Page</div>
      </AppWrapper>
    </div>
  );
}
