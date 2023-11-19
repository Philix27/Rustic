import { McqList, McqTypes } from "@/lib/docs/mcq/types";
import React, { useState } from "react";
import styled from "styled-components";
import ContentMcq from "./ContenMcq";
import ContentArticle from "./ContentArticle";
import TopBar from "./top";
import { TabsTypes } from "./types";

export default function Sidebar(props: { title: string }) {
  const [activeTab, setActiveTab] = useState<TabsTypes>("MCQ");
  return (
    <Container>
      <TopBar activeTab={activeTab} setActive={setActiveTab} />
      {activeTab === "ARTICLE" ? (
        <ContentArticle title={props.title} />
      ) : (
        <ContentMcq title={props.title} />
      )}
      {/* {getList(activeTab)} */}
    </Container>
  );
}

const Container = styled.div`
  width: 30%;
  border-right: solid 0.1px gray;
  height: 100%;
`;

// function getList(current: TabsTypes): JSX.Element {
//   switch (current) {
//     case "ARTICLE":
//       return <ContentArticle />;
//     case "MCQ":
//       return <ContentMcq />;
//     default:
//       return <ContentArticle />;
//   }
// }
