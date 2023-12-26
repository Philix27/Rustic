import React from "react";
import { AppStyles } from "@/lib";
import { Text } from "@/comps";
import Link from "next/link";
import { styled } from "styled-components";

export function TopicCard(props: {
  chapter_id: string;
  book_id: string;
  topics: {
    id: string;
    title: string;
    content: string;
    video_url: string;
    created_at: Date;
    updated_at: Date;
    book_id: string;
    chapter_id: string;
  }[];
}) {
  return (
    <Wrapper>
      {props.topics.map((val, index) => (
        <Link href={`/books/${props.book_id}/${val.id}`} key={index}>
          <div className="topic_title">
            <Text variant={"B5"} className="title">
              {val.title}
            </Text>
          </div>
        </Link>
      ))}
      <Link href={`/books/${props.book_id}/create_topic`}>
        <div className="topic_title">
          <Text variant={"B5"} className="title">
            Add Topic
          </Text>
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0px;
  .topic_title {
    background-color: ${AppStyles.colors.background3};
    padding: 10px;
    padding-right: 20px;
    border-bottom: solid 1px ${AppStyles.colors.grey1};
    &:hover {
      opacity: 0.5;
      cursor: pointer;
      .title {
        color: white;
      }
    }
  }
`;
