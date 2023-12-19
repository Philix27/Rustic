"use client";
import { AppStyles } from "@/lib";
import React, { useState } from "react";
import { styled } from "styled-components";
import { trpc } from "@/_trpc";

export function AddBookModal() {
  const { data: books } = trpc.books.get_all.useQuery();

  const [docContent, setDocContent] = useState<{
    title: string;
    subtitle: string;
    content: string;
  }>({
    title: "",
    subtitle: "",
    content: "",
  });

  return (
    <Container>
      <div>
        <input
          type={"text"}
          placeholder="Write the title of the book"
          onChange={(e) =>
            setDocContent({
              ...docContent,
              title: e.target.value,
            })
          }
          value={docContent.title}
        />
        <input
          type={"text"}
          placeholder="Subtitle"
          aria-rowspan={2}
          value={docContent.subtitle}
          onChange={(e) =>
            setDocContent({
              ...docContent,
              subtitle: e.target.value,
            })
          }
        />
        <textarea
          placeholder="Story"
          value={docContent.content}
          onChange={(e) =>
            setDocContent({
              ...docContent,
              content: e.target.value,
            })
          }
        ></textarea>
        <button>Submit</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${AppStyles.colors.background3};
  border: solid 0.1px ${AppStyles.colors.grey2};
  padding: 20px;
  width: 50%;
  height: 75%;
  border-radius: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    input {
      min-width: 100%;
      border: none;
      outline: none;
      margin-bottom: 20px;
      color: ${AppStyles.colors.offWhite1};
      background-color: ${AppStyles.colors.backgroundDark};
      font-size: 16px;
      font-weight: 600;
      padding: 10px;
      border-radius: 5px;
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      min-height: 300px;
      max-height: 80%;
      border: none;
      background-color: transparent;
      outline: none;
      padding: 10px;
      color: ${AppStyles.colors.offWhite1};
      background-color: ${AppStyles.colors.backgroundDark};
      font-size: 16px;
      font-weight: 400;
      font-family: sans-serif;
      line-height: 25px;
      border-radius: 5px;
    }
    button {
      padding: 8px 20px;
      background-color: ${AppStyles.colors.backgroundLight};
      border-radius: 5px;
      margin-top: 20px;
    }
  }
`;