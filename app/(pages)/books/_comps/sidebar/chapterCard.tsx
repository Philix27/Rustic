import { AppStyles } from "@/lib";
import { Text } from "@/comps";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Link from "next/link";
import styled from "styled-components";

export function ChapterCard(props: {
  book_id: string;
  chapter_id: string;
  topic_id: string;
  chapter: {
    title: string;
    id: string;
    topics: { title: string; id: string }[];
  };
}) {
  const [openChapter, setOpenChapter] = useState(false);
  const [showSheet, setShowSheet] = useState(false);
  const handleAddTopic = () => {
    setShowSheet(true);
  };
  return (
    <Wrapper>
      <div
        className="chapter_title"
        onClick={() => setOpenChapter((prev) => !prev)}
      >
        <Text variant={"B3"}>{props.chapter.title}</Text>
        {openChapter ? (
          <MdArrowDropDown size={25} />
        ) : (
          <MdArrowDropUp size={25} />
        )}
      </div>
      {openChapter &&
        props.chapter.topics.map((v, i) => (
          <Link href={`${props.book_id}/${v.id}`} key={i}>
            <div className="topic_title" key={i}>
              <Text variant={"B5"} className="title">
                {v.title}
              </Text>
            </div>
          </Link>
        ))}
      {openChapter && (
        <div className="add_div">
          <Link href={`${props.book_id}/create_topic`}>
            <p className="trigger_text">Add Topic</p>
          </Link>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-bottom: solid 1px ${AppStyles.colors.grey1};

  .chapter_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
  }
  .topic_title {
    background-color: ${AppStyles.colors.background3};
    padding: 10px;
    border-bottom: solid 1px ${AppStyles.colors.grey1};
    &:hover {
      opacity: 0.5;
      cursor: pointer;
      .title {
        color: white;
      }
    }
  }
  .add_div {
    background-color: ${AppStyles.colors.background3};
    display: flex;
    align-items: center;
    flex-direction: column;

    .trigger_text {
      font-size: 12px;
      padding: 10px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
