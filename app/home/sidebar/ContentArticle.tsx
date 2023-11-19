import { AllMcq } from "@/lib/docs/mcq";
import React from "react";
import { articlesData } from "../data";

export default function ContentArticle(props: { title: string }) {
  // const dataList = AllMcq.filter((v, index) => v.title === props.title)[0];
  return (
    <div>
      {/* {dataList.list.map((v, i) => (
        <div>{v.answer_index} </div>
      ))} */}
    </div>
  );
}
