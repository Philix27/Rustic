import React from "react";
import { Text } from "@/comps";
import { styled } from "styled-components";
import { AppStyles } from "@/lib";
import { trpc } from "@/_trpc";

export default function Chapters(props: {
  data: {
    id: string;
    title: string;
    desc: string;
    img_url: string;
  };
}) {
  const { isLoading, data: chapters } = trpc.book_chapter.get_all.useQuery({
    book_id: props.data.id,
  });
  if (isLoading) return <CardTitle>Loading...</CardTitle>;
  if (!chapters) return <div>No chapters...</div>;

  const first3Chapters = chapters.slice(0, 4);
  return (
    <>
      {first3Chapters.map((v, i) => (
        <ChapterTitle key={i}>
          <Text variant="B4" style={{ paddingBottom: "10px" }}>
            {v.title}
          </Text>
          <Text variant="B5">{v.subtitle}</Text>
        </ChapterTitle>
      ))}
    </>
  );
}

const ChapterTitle = styled.div`
  background-color: ${AppStyles.colors.backgroundLight};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px 15px;
  border-bottom: solid 1px ${AppStyles.colors.grey1};
`;

const CardTitle = styled.div`
  background-color: ${AppStyles.colors.background3};
  color: ${AppStyles.colors.offWhite2};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px 15px;
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  /* background-color: orange; */
`;
