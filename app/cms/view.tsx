"use client";
import React, { useState } from "react";
import CmsArticle from "./articles";
import { CmsTopBar } from "./topBar";
import CmsMcq from "./mcq";
import CmsTutorial from "./tutorial";

export default function CmsView() {
  const [activeForm, setActiveForm] = useState("value");
  return (
    <div>
      <CmsTopBar activeTab={"MCQ"} setActive={() => {}} />
      {getActiveForm(activeForm)}
    </div>
  );
}

function getActiveForm(activeForm: string): JSX.Element {
  switch (activeForm) {
    case "value":
      return <CmsMcq />;
    case "value":
      return <CmsTutorial />;
    case "value":
      return <CmsMcq />;

    default:
      return <CmsArticle />;
  }
}
