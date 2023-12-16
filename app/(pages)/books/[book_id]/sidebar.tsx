import { AppStyles } from "@/lib";
import React from "react";
import { CSSProperties } from "styled-components";
import ChapterCard from "./chapterCard";
import { ChapterList } from "./chapterList";

const s:  = {
  wrapper: {
    height: "100%",
    width: "30%",
    backgroundColor: AppStyles.colors.backgroundLight,
    borderTop: `solid 1px ${AppStyles.colors.grey1}`,
    overflowY: "hidden",
    scrollBehavior: "smooth"
  },
};

export default function Sidebar() {
  return (
    <div style={s.wrapper}>
      {ChapterList.map((v, i) => (
        <ChapterCard chapter={v} key={i} />
      ))}
    </div>
  );
}
