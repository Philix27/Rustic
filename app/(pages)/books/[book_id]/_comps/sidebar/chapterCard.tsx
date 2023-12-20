import { AppStyles, ICustomStyles } from "@/lib";
import { AppModal, TextBody } from "@/comps";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Link from "next/link";

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
  addDiv: {
    backgroundColor: AppStyles.colors.background3,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  triggerText: {
    fontSize: "12px",
    padding: "10px",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export function ChapterCard(props: {
  book_id: string;
  chapter: { title: string; id: string; topics: { title: string }[] };
}) {
  const [openChapter, setOpenChapter] = useState(false);
  const [showSheet, setShowSheet] = useState(false);
  const handleAddTopic = () => {
    setShowSheet(true);
  };
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
          <div style={s.topicTitle} key={i}>
            <TextBody variant={"four"}>{v.title}</TextBody>
          </div>
        ))}
      {openChapter && (
        <div style={s.addDiv}>
          <Link href={`books/${props.book_id}/create_topic`}>
            <p style={s.triggerText}>Add Topic</p>
          </Link>
        </div>
      )}
    </div>
  );
}
