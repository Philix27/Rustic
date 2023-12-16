import { AppStyles, ICustomStyles } from "@/lib";
import React from "react";
import { CSSProperties } from "styled-components";
import ChapterCard from "./chapterCard";
import { ChapterList } from "./chapterList";

const s: ICustomStyles = {
  wrapper: {
    maxHeight: "100vh",
    width: "30%",
    backgroundColor: AppStyles.colors.backgroundLight,
    borderTop: `solid 1px ${AppStyles.colors.grey1}`,
    overflowY: "auto",
    scrollBehavior: "smooth",
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
