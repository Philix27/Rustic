import { AllMcq } from "@/lib/docs/mcq";
import { McqList, McqTypes } from "@/lib/docs/mcq/types";
import React, { Fragment } from "react";
import { styled } from "styled-components";
import Text from "../comps/Text";
import { mcqData } from "../data/mcq";

export default function ContentMcq(props: { title: string }) {
  return (
    <div>
      {AllMcq.map((v, i) => (
        <ListItem key={i}>
          <Text variants="B4">{v.title}</Text>
          <Text variants="B5">{v.subtitle}</Text>
          {/* <p>{v.date_updated}</p> */}
          <hr />
        </ListItem>
      ))}
    </div>
  );
}

const ListItem = styled.div`
  padding-right: 15px;
  padding-left: 30px;
  padding-top: 10px;
  hr {
    margin-top: 10px;
    border: solid 0.01px #323232;
  }
  &:hover {
    background-color: #323232;
  }
`;
