import { AppStyles, ICustomStyles } from "@/lib";
import { TextBody, TextHeader } from "@/comps";
import * as stylex from "@stylexjs/stylex";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const s: ICustomStyles = {
  wrapper: {
    minHeight: "100vh",
    width: "30%",
    backgroundColor: AppStyles.colors.backgroundLight,
    borderTop: `solid 1px ${AppStyles.colors.grey1}`,
  },
  chapterCard: { borderBottom: `solid 1px ${AppStyles.colors.grey1}` },
  chapterTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 10px",
  },
  topicTitle: {
    backgroundColor: AppStyles.colors.background3,
    padding: "10px",
    borderBottom: `solid 1px ${AppStyles.colors.grey1}`,
  },
};

export default function ChapterCard(props: {
  chapter: { title: string; topics: { title: string }[] };
}) {
  const [openChapter, setOpenChapter] = useState(false);
  return (
    <div style={s.chapterCard}>
      <div
        style={s.chapterTitle}
        onClick={() => setOpenChapter((prev) => !prev)}
      >
        <TextBody variant={"two"}>{props.chapter.title}</TextBody>
        {openChapter ? (
          <MdArrowDropDown size={25} />
        ) : (
          <MdArrowDropUp size={25} />
        )}
      </div>
      {openChapter &&
        props.chapter.topics.map((v, i) => (
          <div style={s.topicTitle}>
            <TextBody variant={"four"}>{v.title}</TextBody>
          </div>
        ))}
    </div>
  );
}
