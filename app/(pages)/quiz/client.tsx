"use client";
import { AppTopNavbar, AppWrapper } from "@/comps";
import { MdPublish, MdPreview } from "react-icons/md";
import React from "react";

export default function QuizClient() {
  return (
    <div>
      <AppTopNavbar
        title={"Quiz"}
        icons={[<MdPublish key={1} />, <MdPreview key={2} />]}
      />
      <AppWrapper>
        <div>Quiz Page</div>
      </AppWrapper>
    </div>
  );
}
