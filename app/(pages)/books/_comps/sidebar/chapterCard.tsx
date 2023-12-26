import { AppStyles } from "@/lib";
import styled from "styled-components";
import Link from "next/link";
import { Text } from "@/comps";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { trpc } from "@/_trpc";
import { TopicCard } from "./topicCard";

export function ChapterCard(props: {
  book_id: string;
  setShowSheet: (value: React.SetStateAction<boolean>) => void;
}) {
  const [openChapter, setOpenChapter] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

  const { isLoading, data: chapters } = trpc.book_chapter.get_all.useQuery({
    book_id: props.book_id,
  });

  if (!chapters) return <div>No chapters</div>;
  if (isLoading) return <Wrapper>Loading...</Wrapper>;
  return (
    <>
      {chapters.map((val, i) => (
        <Wrapper>
          <div
            className="chapter_title"
            onClick={() => setOpenChapter((prev) => !prev)}
          >
            <Text variant={"B3"}>{val.title}</Text>
            {openChapter ? (
              <MdArrowDropDown size={25} />
            ) : (
              <MdArrowDropUp size={25} />
            )}
          </div>
          {openChapter && <TopicCard book_id={""} />}

          {openChapter && (
            <div className="add_div">
              <Link href={`${props.book_id}/create_topic`}>
                <p className="trigger_text">Add Topic</p>
              </Link>
            </div>
          )}
        </Wrapper>
      ))}
      <div className={"add_sec"}>
        <p className="trigger_text" onClick={() => props.setShowSheet(true)}>
          Add Chapter
        </p>
      </div>
    </>
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
