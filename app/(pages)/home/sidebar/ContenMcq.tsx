import { AllMcq, AppHelperFn } from "@/lib";
import React from "react";
import { styled } from "styled-components";
import { Text } from "@/comps";
import Link from "next/link";

export default function ContentMcq(props: { title: string }) {
  return (
    <div>
      {AllMcq.map((v, i) => (
        <ListItem key={i}>
          <Link href={`/mcq/${AppHelperFn.remove_whitespace(v.title)}`}>
            <Text variant="B4">{v.title}</Text>
            <Text variant="B5">{v.subtitle}</Text>
            {/* <p>{v.date_updated}</p> */}
            <hr />
          </Link>
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