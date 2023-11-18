import React from "react";
import { articlesData } from "../data";

export default function ContentArticle() {
  return (
    <div>
      {articlesData.map((v, i) => (
        <div>{v.title} </div>
      ))}
    </div>
  );
}
