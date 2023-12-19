"use client"
import { AppStyles } from "@/lib";
import React, { useState } from "react";
import { styled } from "styled-components";
import { trpc } from "@/_trpc";

export function AddBookModal() {
  const [showDoc, setShowDoc] = useState<"WRITE" | "PREVIEW">("WRITE");
  // const { data: books } = trpc.books.get_all.useQuery();

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
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "20px",
          // backgroundColor: "#0f7890ec",
        }}
      >
        <input
          type={"text"}
          placeholder="Title"
          onChange={(e) =>
            setDocContent({
              ...docContent,
              title: e.target.value,
            })
          }
          value={docContent.title}
          style={{
            minWidth: "100%",
            border: "none",
            outline: "none",
            marginBottom: "20px",
            color: "#cfc6c6",
            backgroundColor: "transparent",
            fontSize: "26px",
            fontWeight: "bold",
            padding: "10px",
          }}
        />
        <hr style={{ border: "solid 1px #fff" }} />
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
          style={{
            minWidth: "100%",
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            marginBottom: "20px",
            padding: "10px",
            color: "#cfc6c6",
            fontSize: "18px",
            fontWeight: "lighter",
          }}
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
          style={{
            maxWidth: "100%",
            minWidth: "100%",
            minHeight: "100vh",
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            padding: "10px",
            margin: "10px",
            color: "#cfc6c6",
            fontSize: "16px",
            fontWeight: "lighter",
            fontFamily: "sans-serif",
            lineHeight: "25px",
          }}
        ></textarea>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${AppStyles.colors.background3};
  border: solid 0.1px ${AppStyles.colors.grey2};
  padding: 10px 0;
  /* position: absolute; */
  /* top: 30px; */
  width: 350px;
  /* width: content; */
  border-radius: 5px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 10px; */
  padding: 10px;
  &:hover {
    background-color: ${AppStyles.colors.backgroundDark};
  }
`;
const Icon = styled.div<{ bgColor: string }>`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${AppStyles.colors.offWhite1};
  background-color: ${(props) => props.bgColor};

  svg {
    font-size: 20px;
  }
`;
