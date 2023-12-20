"use client";
import { trpc } from "@/_trpc";
import { AppTopNavbar } from "@/comps";
import React, { useState } from "react";
import { MdPreview, MdPublish } from "react-icons/md";

export function WriteComp(props: {
  docContent: {
    title: string;
    subtitle: string;
    content: string;
  };
  setDocContent: React.Dispatch<
    React.SetStateAction<{
      title: string;
      subtitle: string;
      content: string;
    }>
  >;
}) {
  const [showDoc, setShowDoc] = useState<"WRITE" | "PREVIEW">("WRITE");

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            //   backgroundColor: "#02262eed",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
                props.setDocContent({
                  ...props.docContent,
                  title: e.target.value,
                })
              }
              value={props.docContent.title}
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

            <input
              type={"text"}
              placeholder="Subtitle"
              aria-rowspan={2}
              value={props.docContent.subtitle}
              onChange={(e) =>
                props.setDocContent({
                  ...props.docContent,
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
              value={props.docContent.content}
              onChange={(e) =>
                props.setDocContent({
                  ...props.docContent,
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
        </div>
      </div>
    </>
  );
}
