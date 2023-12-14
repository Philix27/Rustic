"use client";

import { getArticles } from "@/sanity";
import React from "react";

export default async function CmsArticle() {
  const articles = await getArticles()
  return (
    <div>
      <input type={"text"} placeholder="title" />
      <input type={"text"} placeholder="title" />
      <input type={"text"} placeholder="title" />
      <input type={"text"} placeholder="title" />
    </div>
  );
}
