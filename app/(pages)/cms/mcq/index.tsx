"use client";
import { AppInput } from "@/comps/input";
import { AppStyles } from "@/lib/utils";
import React from "react";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import { styled } from "styled-components";

export default function CmsMcq() {
  return (
    <Wrapper>
      <div>
        {/* <AppInput
          label={"Question"}
          name={"question"}
          placeholder={"Enter your question"}
          // register={}
        /> */}
        <input type={"text"} placeholder="title" />
        <input type={"text"} placeholder="title" />
        <input type={"text"} placeholder="title" />
        <input type={"text"} placeholder="title" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 80%;
    background-color: ${AppStyles.colors.backgroundLight};
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
    input {
    }
  }
`;
