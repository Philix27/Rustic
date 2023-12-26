import { AppStyles } from "@/lib";
import { Text } from "@/comps";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Link from "next/link";
import styled from "styled-components";
import { trpc } from "@/_trpc";

export function TopicCard(props: { book_id: string }) {
  const { isLoading: isLoadingChapter, data: topics } =
    trpc.book_chapter_topics.get_by_book.useQuery({
      book_id: props.book_id,
    });
  return (
    <>
      {topics.map((val, index) => (
        <Link href={`${props.book_id}/${val.id}`} key={index}>
          <div className="topic_title">
            <Text variant={"B5"} className="title">
              {val.title}
            </Text>
          </div>
        </Link>
      ))}
    </>
  );
}
