"use client";
import { AppTopNavbar } from "@/comps";
import { useState } from "react";
import { MdViewSidebar } from "react-icons/md";
import { trpc } from "@/lib";
import styled from "styled-components";
import { Sidebar, ActiveContent } from "../_comps";

export default function BookClient(props: { book_id: string }) {
  console.log("BookId Cheker", props.book_id);
  const { isLoading, data: book } = trpc.books.get_by_id.useQuery({
    book_id: props.book_id,
  });

  if (isLoading) return <Wrapper>Loading...</Wrapper>;
  if (!book) return <Wrapper>No book available</Wrapper>;
  return (
    <Wrapper>
      <div className={"sidebar"}>
        <Sidebar book_id={book.id} />
      </div>
      <div className={"content_wrapper"}>
        <AppTopNavbar title={book.title} icons={[]} />
        <ActiveContent
          isFirstPage={true}
          bannerTitle={book.title}
          subtitle={""}
          cover_image={book.img_url}
          content={book.desc}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-height: 100vh;
  height: 100vh;
  display: flex;
  .sidebar {
    width: 300px;
    max-height: 100vh;
    min-height: calc(100vh - 40px);
  }
  .content_wrapper {
    width: calc(100% - 300px);
    flex-direction: column;
    max-height: 100vh;
    overflow-y: auto;
  }
`;
