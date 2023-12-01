"use client"
import React, { useState } from "react";
import CmsArticle from "./articles";
import CmsMcq from "./mcq";
import CmsTutorial from "./tutorial";

export default function CmsView() {
  const [activeForm, setActiveForm] = useState("value");
  switch (activeForm) {
    case "value":
      return <CmsArticle />;
    case "value":
      return <CmsTutorial />;
    case "value":
      return <CmsMcq />;

    default:
      return <CmsArticle />;
  }
}
