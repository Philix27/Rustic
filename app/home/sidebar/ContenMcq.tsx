import React, { Fragment } from "react";
import { styled } from "styled-components";
import Text from "../comps/Text";
import { mcqData } from "../data/mcq";

export default function ContentMcq() {
  return (
    <div>
      {mcqData.map((v, i) => (
        <ListItem key={i}>
          <Text variants="B4">{v.question}</Text>
          <Text variants="B5">{v.answer}</Text>
          <p>{v.date_updated}</p>
          <hr />
        </ListItem>
      ))}
    </div>
  );
}

const ListItem = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 10px;
  hr {
    margin-top: 10px;
    border: solid 0.01px gray;
  }
  &:hover {
    background-color: #1e1e1e;
  }
`;
